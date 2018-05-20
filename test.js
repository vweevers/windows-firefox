'use strict'

const test = require('tape')
const http = require('http')
const firefox = require('.')

test('basic', function (t) {
  t.plan(4)

  let cp

  http.createServer(function (req, res) {
    if (/favicon/.test(req.url)) {
      res.writeHead(404)
      return res.end()
    }

    t.is(req.url, '/test', 'got request')
    cp.kill()
  }).listen(3000, '127.0.0.1', function () {
    firefox({ uri: `http://localhost:3000/test`, headless: true }, (err, _cp, meta) => {
      if (err) throw err

      t.ok(_cp, 'got child process')
      t.is(meta.name, 'firefox', 'got meta.name')
      t.ok(meta.version, 'got meta.version')

      cp = _cp
    })
  }).unref()
})
