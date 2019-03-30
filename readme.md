# windows-firefox

**Launch a fresh Firefox on Windows. See also [`osx-firefox`](https://github.com/juliangruber/osx-firefox) and [`linux-firefox`](https://github.com/juliangruber/linux-firefox).**

[![npm status](http://img.shields.io/npm/v/windows-firefox.svg?style=flat-square)](https://www.npmjs.org/package/windows-firefox)
[![node](https://img.shields.io/node/v/windows-firefox.svg?style=flat-square)](https://www.npmjs.org/package/windows-firefox)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/windows-firefox.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/windows-firefox)
[![Dependency status](https://img.shields.io/david/vweevers/windows-firefox.svg?style=flat-square)](https://david-dm.org/vweevers/windows-firefox)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/vweevers/windows-firefox.svg)](https://greenkeeper.io/)

## Example

```js
const firefox = require('windows-firefox')

firefox({ uri: 'https://github.com/' }, (err, cp) => {
  if (err) throw err
  cp.on('error', console.error)
})
```

## API

### `firefox([options, ]callback)`

The `callback` receives an error if any, a child process and a [metadata object](https://github.com/vweevers/win-detect-browsers/#api).

Options:

- `uri` (string): URL to open
- `channel` (string): filter installed versions by [release channel](https://github.com/vweevers/win-detect-browsers/#api), e.g. `nightly`
- `version` (string): filter versions by partial (e.g. `62`) or exact version. If neither `channel` nor `version` is specified, the first found version will be launched.
- `proxy`, `noProxy` and `prefs`: passed to [`create-firefox-profile`](https://github.com/vweevers/create-firefox-profile)
- `headless` (boolean): Run Firefox in [headless mode](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Headless_mode). Available since Firefox 56.
- `devtools` (boolean): Start with [Developer Tools](https://developer.mozilla.org/en-US/docs/Tools) opened.
- `background`: Don't foreground the browser.

## Install

With [npm](https://npmjs.org) do:

```
npm install windows-firefox
```

Firefox needs to be installed on your system as well.

## License

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers
