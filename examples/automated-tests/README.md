# Automated Testing Example

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

You will need to navigate to the example folder and install all dependencies.

```
cd examples/automated-tests/
npm install
```

To run the unit test examples:

```
npm run unit-test
```

To run the UI test example:

```
npm run ui-test
```

This test will also generate screenshots. Take a look inside of the "examples/automated-tests/screenshots" folder.

Note that the UI testing examples will only work with Chrome version 87. To work with the latest version of Chrome, run this where X is the version number:

```
npm uninstall chromedriver
npm install --save-dev chromedriver@X # X is the version number
```
