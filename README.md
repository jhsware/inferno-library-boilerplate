# inferno-library-boilerplate


## Quickstart

1. Fork `inferno-library-boilerplate`

2. Update all the package related info in `package.json`

3. Add code to `/src` and tests to `/test`

4. Choose a great name for your library and update `package.json` and probably your Git repos name aswell...

5. Release your library `npm version patch && npm publish`

## HOWTOs

[Introduction to porting a React library](./howto/porting_react_library.md)

[About semantic versioning](https://docs.npmjs.com/about-semantic-versioning)

## Contributing

If you find bugs, please submit a PR.

If you solve a problem that might be of use to others. Please add a howto in the docs folder and submit a PR.

This boilerplate was created to lower the bar to create libraries for Inferno. I found that it took several hours to set up thee basic scaffolding. Now you can hopefully be up and running in five minutes.

## Customisation

### Adding unit tests

The tests are in the `/test` folder. There is a really simple example of an inferno component test there.

- packages: `jest`, `jsdom`, `sinon`
- command: `npm run test`
- config: `jest.config.js`, `JEST-DEBUG.js`

Jest simplifies A LOT when it comes to setting up the testing environment. To learn more about writing tests, you can check out [inferno-bootstrap/__tests__](https://github.com/jhsware/inferno-bootstrap/tree/master/__test__)

### Building for release

Releasing your library is very easy! 

1. Tag a version, the preversion hook will run the tests and lint your code. If all is well the version will be bumped.

  `$ npm version patch`

  (If the linting fails you can run `$ npm run lint-fix` or manually fix linting errors)

2. Publish your app

  `$ npm publish`

Rollup is our main characte when creating releases. It works like Webpack but came as a nicer options for libraries, geneerating smaller and more readble code base.

- packages: `rollup*`
- command: `npm run build` or `npm run build:dist``
- config: `rollup.config.js`

When you add dependencies add them as an `external` to `rollup.config.js`. That way it won't get added to the generated code bundle, but rather as an external dependency. This avoids that your app has lots of duplicate packages.

### Transpiling

Transpiling of es6 code is done with:

- packages: `@babel/*` and `babel-*`
- command: `npm run build` or `npm run build-dev`
- config: `.babelrc`

The `inferno-app` preset does A LOT of th heavy lifting! If you want to add or remove transpiling features, you would change these `.babelrc` and install or remove plugins/presets.

### Linting

Code style suggestions and linting is done with:

- packages: `eslint-*`
- command: `npm run lint` or `npm run lint-fix`
- config: `.eslintrc.js`

If you don't want linting, you can remove them. If you want to change the coding style, modify the config.
