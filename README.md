# Corporate Components

**This repo is no longer maintained or supported**

## Table of contents

- [Corporate Components](#corporate-components)
  - [Table of contents](#table-of-contents)
  - [Usage](#usage)
    - [Clone this repo](#clone-this-repo)
    - [Node version and NVM](#node-version-and-nvm)
    - [Installation](#installation)
    - [Setup NPM Link (for local development)](#setup-npm-link-for-local-development)
    - [Link to consuming project e.g. corporate-react](#link-to-consuming-project-eg-corporate-react)
    - [Import desired component(s) into your project](#import-desired-components-into-your-project)
    - [Import styles](#import-styles)
    - [Permissions (with npm link)](#permissions-with-npm-link)
  - [Development](#development)
    - [Develop](#develop)
    - [Build](#build)
    - [Run Storybook](#run-storybook)
  - [Issues](#issues)
    - [React hooks error](#react-hooks-error)

## Usage

### Clone this repo

(TODO: setup npm package location)

`git clone git@github.com:wellcometrust/corporate-components.git`


### Node version and NVM

This repo supports a specific version of Node.js which is specified in [.nvmrc](.nvmrc). It is strongly recommended that you install [NVM](http://nvm.sh/) on your local machine to easily manage multiple versions of Node.

Running `nvm use` from the command line will automatically pick up the version named in the `.nvmrc` file and set this as the node version for the current terminal window.


### Installation

```
npm install
```

### Setup NPM Link (for local development)

In order to preview any code changes within another local project, a symlink needs to be setup for the corporate-components project. From the `corporate-components` root, run:

```bash
npm link
```


### Link to consuming project e.g. corporate-react

Assuming your consuming project and this repo are in the same folder, run the following command (or set it as an alias for convenience).

```npm link @wellcometrust/corporate-components --legacy-peer-deps && cd ../corporate-components && npm link ../corporate-react/node_modules/react --legacy-peer-deps && cd ../corporate-react```

See the following table for a breakdown of this script.

| Command | Description |
| ------ | ------ |
| `npm link @wellcometrust/corporate-components` | Link to the symlinked CC package from the consuming app |
| `--legacy-peer-deps` | Optional flag ignores dependency tree checks. This is bad practice in production environments as some dependency versions may not be supported by certain packages and cause issues. We only use it here to overcome dependency mismatches in Storybook which is not included in the production version of the package. |
| `cd ../corporate-components` | Switch to CC root folder |
| `npm link ../corporate-react/node_modules/react` | Link CC to the consuming app's version of React to [avoid a hooks error](#react-hooks-errors) |
| `cd ../corporate-react` | Switch back to consuming app root folder |

**`npm link` will need to be rerun after any npm install operation.**

[Read more about npm link](https://docs.npmjs.com/cli/link)

**Please note that `corporate-components` must first be compiled or built in order to use the compiled distributable files.**


### Import desired component(s) into your project

```js
import { ComponentName } from '@wellcometrust/corporate-components';
```


### Import styles

```css
@import '@wellcometrust/corporate-components/dist/style.css';
```


### Permissions (with npm link)

```bash
sudo npm link
```

## Development

### Develop

Watch and compile files on change.

```bash
npm run dev
```

### Build

Builds files for distribution.

```bash
npm run build
```

### Run Storybook

[Storybook](https://storybook.js.org/) is a UI development environment we are using to preview and test our component library. Using Storybook allows us to work on components in isolation.

```bash
npm run storybook
```

## Issues

### React hooks error

Seeing this error message?

```Hooks can only be called inside the body of a function component.```

This issue can be caused by `npm link` and the very nature of the symlinks which npm uses to create the links. Effectively React is flagging up a possible duplicate instance of React.

To get round this you will need to link to the app's instance of React by running the following command from the library root (assuming the library and app are in the same folder).

```bash
npm link ../corporate-react/node_modules/react
```

- [Read more about invalid React Hook call warning](https://reactjs.org/warnings/invalid-hook-call-warning.html)
- [Read more about Hooks + multiple instances of React on github](https://github.com/facebook/react/issues/13991)