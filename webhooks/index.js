const port = process.env.PORT || 8080
const secret = process.env.SECRET || ''

console.log(`Your port is ${port}`)
console.log(`Your secret is ${secret}`)

const http = require('http')
const crypto = require('crypto')
const {
    spawn
} = require('child_process')

http.createServer(function(req, res) {
    let body = []

    req.on('error', (err) => {
        console.error(err)
    }).on('data', function(data) {
        body.push(data)
    }).on('end', () => {
        body = Buffer.concat(body).toString()

        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(body).digest('hex')

        if (req.headers['x-hub-signature'] != sig) {
            res.statusCode = 403
            res.end()
            return
        }

        let child = spawn('git', ['pull'])
        child.stdout.on('data', function(data) {
            res.write(data)
        })
        child.stderr.on('data', function(data) {
            res.write(data)
        })
        child.on('close', (code) => {
            res.write(`\nChild process exited with code ${code}`)
			
            res.statusCode = 200
            res.end()
        })

        res.on('error', (err) => {
            console.error(err)
        })
    })
}).listen(port);