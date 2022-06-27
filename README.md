[![Build Status](https://app.travis-ci.com/kaltura/playkit-js-ui-managers.svg?branch=master)](https://app.travis-ci.com/kaltura/playkit-js-ui-managers)
[![](https://img.shields.io/npm/v/@playkit-js/ui-managers/latest.svg)](https://www.npmjs.com/package/@playkit-js/ui-managers)
[![](https://img.shields.io/npm/v/@playkit-js/ui-managers/canary.svg)](https://www.npmjs.com/package/@playkit-js/ui-managers/v/canary)

# playkit-js-ui-managers

playkit-js-ui-managers is a [kaltura player] plugin that groups several UI services,
in order to simplify and facilitate the customization of the [kaltura player] UI by providing a simple and clean API.

Each service manages a different area of UI functionality.

It relies on [kaltura player] core API for managing UI features.

playkit-js-ui-managers is written in [ECMAScript6] (`*.js`) and [TypeScript] (`*.ts`) (strongly typed superset of ES6), 
and transpiled in ECMAScript5 using [Babel](https://babeljs.io/) and the [TypeScript compiler].

[Webpack] is used to build the distro bundle and serve the local development environment.

[kaltura player]: https://github.com/kaltura/kaltura-player-js.
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[typescript]: https://www.typescriptlang.org/
[typescript compiler]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
[webpack]: https://webpack.js.org/

## services

- ### Side Panels
  manages and controls the side panel items, including: \
  \
  - When an item is activated in a panel, the other items in that panel are automatically deactivated.
  - Automatically deactivates a panel when its counter panel is activated\
  \
    Full API documentation can be found [here](https://kaltura.github.io/playkit-js-ui-managers/docs/api/classes/side_panels_manager.SidePanelsManager.html)
  
- ### Upper bar manager
  manages and controls the upper bar menu, including: \
  \
  - Setting the order in which icons are shown.
  - Increasing and decreasing the number of icons that appear depending on the size of the player\
  \
    Full API documentation can be found [here](https://kaltura.github.io/playkit-js-ui-managers/docs/api/classes/upper_bar_manager.UpperBarManager.html)
    
## Getting started with development

```sh
# First, checkout the repository and install the required dependencies
git clone https://github.com/kaltura/playkit-js-ui-managers.git

# Navigate to the repo dir
cd playkit-js-ui-managers

# Run dev-server for demo page (recompiles on file-watch, and write to actual dist fs artifacts)
npm run dev

# Before submitting a PR - Run the pre commit command
npm run pre:commit

# this command will run:

# 1. types check
# 2. lint check
# 3. generate/update types
# 4. generate/update docs
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

### Automated tests (Cypress)

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

## API docs

[API docs](https://kaltura.github.io/playkit-js-ui-managers/docs/api/index.html)

## Usage guide

[usage guide](./docs/guide.md)

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

## License

playkit-js-ui-managers is released under [Apache 2.0 License](LICENSE)