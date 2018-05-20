'use strict'

const profile = require('create-firefox-profile')
const find = require('win-detect-browsers')
const spawn = require('child_process').spawn

module.exports = (opts, callback) => {
  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  } else if (opts == null) {
    opts = {}
  }

  const args = [
    opts.headless && '-headless',
    opts.devtools && '-devtools',
    opts.background && '-background',
    '-no-remote',
    '-silent'
  ].filter(Boolean)

  profile(opts, function (err, folder) {
    if (err) return callback(err)

    args.push('-profile', folder)
    if (opts.uri) args.push(opts.uri)

    find(['firefox'], function (err, browsers) {
      if (err) return callback(err)

      if (browsers.length === 0) {
        return callback(new Error('firefox not found'))
      }

      browsers = browsers.filter(b => {
        if (opts.channel && b.channel !== opts.channel) return false
        if (opts.version && !b.version.startsWith(opts.version)) return false

        return true
      })

      if (browsers.length === 0) {
        return callback(new Error('no matching version found'))
      }

      callback(null, spawn(browsers[0].path, args), browsers[0])
    })
  })
}
