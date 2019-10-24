const port = process.env.PORT || 8080
const secret = process.env.SECRET || ''

console.log(`Your port is ${port}`)
console.log(`Your secret is ${secret}`)

const http = require('http')
const crypto = require('crypto')
const {
    spawn
} = require('child_process')
const fs = require('fs')

function markBuild(body) {
    let folders = new Set()
    body.commits.forEach(commit => {
        let changes = commit.added.concat(commit.removed).concat(commit.modified)
        changes.forEach(function (change, index, array) {
            let i = change.indexOf('/')
            if (i != -1) {
                let name = change.substring(0, i)
                folders.add(name)
            }
        })

        new Set(folders).forEach(function (key, value, set) {
            if (!fs.lstatSync(value).isDirectory() || value == 'webhooks')
                folders.delete(value)
        })
    })

    folders.forEach(function (key, value, set) {
        fs.closeSync(fs.openSync(value + '/.rebuild', 'w'))
    })
    return folders
}

http.createServer(function (req, res) {
    let body = []

    req.on('error', (err) => {
        console.error(err)
    }).on('data', function (data) {
        body.push(data)
    }).on('end', () => {
        body = Buffer.concat(body).toString()

        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(body).digest('hex')

        if (req.headers['x-hub-signature'] != sig) {
            res.statusCode = 403
            res.end()
            return
        }
        
        let folders
        try {
            folders = markBuild(JSON.parse(body))
        } catch (e) {
            console.log(e)
            res.write(e.toString())
            res.write('\n')
        }
        folders.forEach(function (key, value, set) {
            console.log("Folder " + value + " requires rebuild")
            res.write("Folder " + value + " requires rebuild.\n")
        })

        console.log("Calling git pull")
        let child = spawn('git', ['pull'])
        res.statusCode = 200
        res.end()
        /*child.stdout.on('data', function (data) {
            res.write(data)
        })
        child.stderr.on('data', function (data) {
            res.write(data)
        })
        child.on('close', (code) => {
            res.write(`\nChild process exited with code ${code}`)

            res.statusCode = 200
            res.end()
        })*/

        res.on('error', (err) => {
            console.error(err)
        })
    })
}).listen(port);