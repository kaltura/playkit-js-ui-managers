[![Build Status](https://app.travis-ci.com/kaltura/playkit-js-ui-managers.svg?branch=master)](https://app.travis-ci.com/kaltura/playkit-js-ui-managers)
[![](https://img.shields.io/npm/v/@playkit-js/ui-managers/latest.svg)](https://www.npmjs.com/package/@playkit-js/ui-managers)
[![](https://img.shields.io/npm/v/@playkit-js/ui-managers/canary.svg)](https://www.npmjs.com/package/@playkit-js/ui-managers/v/canary)

# playkit-js-ui-managers

playkit-js-ui-managers is a [kaltura player] plugin JavaScript library that group several UI services together in order to simplify and 
facilitate the customization of the [kaltura player] UI by providing a simple and clean API.

It relies on [kaltura player] core API for managing UI features.

playkit-js-ui-managers works as a plugin of [kaltura player]

playkit-js-ui-managers is written in [ECMAScript6] (`*.js`) and [TypeScript] (`*.ts`) (strongly typed superset of ES6), and transpiled in ECMAScript5 using [Babel](https://babeljs.io/) and the [TypeScript compiler].

[kaltura player]: https://github.com/kaltura/kaltura-player-js
[Webpack] is used to build the distro bundle and serve the local development environment.
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[typescript]: https://www.typescriptlang.org/
[typescript compiler]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
[webpack]: https://webpack.js.org/

## servises

- Side Panels
    - add and remove side panel items
    - activate/deactivate side panel items
- Upper bar manager
    - soon
    
## Getting started with development

```sh
# First, checkout the repository and install the required dependencies
git clone https://github.com/kaltura/playkit-js-ui-managers.git

# Navigate to the repo dir
cd playkit-js-ui-managers

# Run dev-server for demo page (recompiles on file-watch, and write to actual dist fs artifacts)
npm run dev
```

The dev server will host files on port 8000. Once started, the demo can be found running at http://localhost:8000/.

Before submitting a PR, please see our [contribution guidelines](CONTRIBUTING.md).


### Linter (ESlint)

Run linter:

```
npm run lint:check
```

Run linter with auto-fix mode:

```
npm run lint:fix
```

### Formatting Code

Run prettier to format code

```
npm run prettier:fix
```

### Type Check

Run type-check to verify TypeScript types

```
npm run types:check
```

### Automated tests (Mocha/Karma)

Run all tests at once:

```
npm test
```

Run unit tests in watch mode:

```
npm run test:watch
```

## Design

An overview of this project's design, can be found [here](https://kaltura.atlassian.net/wiki/spaces/PROD/pages/3554412657/Side+Panel+Manager+-+Design+Document).

## API docs and usage guide

[API and usage docs, with code examples](./docs/API.md)

## Demo

[https://kaltura.github.io/playkit-js-ui-managers/demo/index.html](https://kaltura.github.io/playkit-js-ui-managers/demo/index.html)


## Compatibility

playkit-js-ui-managers is only compatible with browsers supporting MediaSource extensions (MSE) API with 'video/MP4' mime-type inputs.

playkit-js-ui-managers is supported on:

- Chrome 39+ for Android
- Chrome 39+ for Desktop
- Firefox 41+ for Android
- Firefox 42+ for Desktop
- IE11 for Windows 8.1+
- Edge for Windows 10+
- Safari 8+ for MacOS 10.10+
- Safari for ipadOS 13+

## Using playkit-js-ui-managers

[API and usage docs, with code examples](./docs/API.md)


## License

HLS.js is released under [Apache 2.0 License](LICENSE)