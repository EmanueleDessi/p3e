# P3E

P3E is a starter kit to start an electron project with [Polymer 3 ](https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview)

## Install

[Npm](https://www.npmjs.com/get-npm) is required to install the project, once the repository has been cloned run:
```bash
npm install
```

## Development Build
Before launching the project it needs to be built, run this command:
```bash
npm run build-polymer
```
and after that Electron can be launched to run the project.

## Run
```bash
npm start
```

## Run Test
```bash
npm run test
```

## Build Electron Bundle
```bash
cd build/es6bundle/app
./../../../node_modules/.bin/electron-builder -c.extraMetadata.main=main.js -w --x64
```