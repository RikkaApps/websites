console.log(`CWD: ${process.cwd()}`)

const { port, secret, sites, cf_email, cf_key, cf_zone_id } = require(`${process.cwd()}/config.json`)
const http = require('http')
const request = require('request-promise')
const crypto = require('crypto')
const {
    spawn
} = require('child_process')
const fs = require('fs')
const vuepress = require('vuepress')

console.log(`Port: ${port}`)
console.log(`Secret: ${secret}`)
console.log(`CF_Email: ${cf_email}`)
console.log(`CF_Key: ${cf_key}`)
console.log(`CF_Zone_Id: ${cf_zone_id}`)

async function buildVuePress(path) {
    const app = vuepress.createApp({
        sourceDir: path,
    })
    await app.process()
    return app.build()
}

async function purgeCloudflareCache(urls) {
    for (let index = 0; index < urls.length; index += 30) {
        let sliced = urls.slice(index, index + 30 < urls.length ? urls.length : index + 30)
        try {
            let res = await request(
                {
                    url: `https://api.cloudflare.com/client/v4/zones/${cf_zone_id}/purge_cache`,
                    method: 'POST',
                    body: {
                        "files": sliced
                    },
                    json: true,
                    headers: {
                        "X-Auth-Email": cf_email,
                        "X-Auth-Key": cf_key
                    }
                })
            console.log(JSON.stringify(res))
        } catch (e) {
            console.log(JSON.stringify(e))
        }
    }
}

function collect(body) {
    let targets = new Set()
    let urls = new Set()
    body.commits.forEach(commit => {
        let changes = commit.added.concat(commit.removed).concat(commit.modified)
        changes.forEach(change => {
            let i = change.indexOf('/')
            if (i != -1) {
                let target = change.substring(0, i)
                if (target in sites) {
                    let url = change.substring(i + 1).replace("/README.md", "/").replace(".md", ".html")
                    targets.add(target)
                    urls.add(`https://${sites[target]}/${url}`)
                }
            }
        })
    })

    return {
        targets: Array.from(targets),
        urls: Array.from(urls)
    }
}

http.createServer(function (req, res) {
    let body = []

    req.on('error', (err) => {
        console.error(err)
    }).on('data', function (data) {
        body.push(data)
    }).on('end', async () => {
        res.on('error', (err) => {
            console.error(err)
        })

        body = Buffer.concat(body).toString()

        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(body).digest('hex')

        if (process.env.NODE_ENV === 'production') {
            if (req.headers['x-hub-signature'] != sig) {
                console.error(`bad request: ${req.headers['x-hub-signature']} rather than ${sig}`)
                res.statusCode = 403
                res.end()
                return
            }
        }

        let info
        try {
            info = collect(JSON.parse(body))
        } catch (e) {
            console.log(e)
            res.write(e.toString())
            res.write('\n')
        }
        info.targets.forEach(value => {
            res.write(`Site https://${sites[value]} requires rebuild.\n`)
            console.log(`Site https://${sites[value]} requires rebuild`)
        })
        info.urls.forEach(value => {
            res.write(`Url ${value} requires purge cache.\n`)
            console.log(`Url ${value} requires purge cache`)
        })

        res.write("Calling git pull...\n")
        console.log("Calling git pull")
        let child = spawn('git', ['pull'])
        child.stdout.on('data', function (data) {
            res.write(data)
            console.log(data.toString())
        })
        child.stderr.on('data', function (data) {
            res.write(data)
            console.error(data.toString())
        })
        child.on('close', async (code) => {
            res.write(`Child process exited with code ${code}`)
            console.log(`Child process exited with code ${code}`)

            res.statusCode = 200
            res.end()

            for (const target of info.targets) {
                console.log(`vuepress build ../${target}...`)
                await buildVuePress(`../${target}`)
                console.log(`purge Cloudflare cache...`)
                await purgeCloudflareCache(info.urls)
            }
        })
    })
}).listen(port);