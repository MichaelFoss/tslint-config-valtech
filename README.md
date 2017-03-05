# tslint-config-valtech

This repository houses the shared TSLint configuration for Valtech's front-end team.

## How to Use

This configuration is designed to be used with [TSLint][].
In order to use it in your project, first install the npm module:

```bash
npm install --save-dev tslint-config-valtech
```

That will add the configuration to your `package.json`. From there,
extend the TSLint ruleset by adding this to your `tslint.json` file:

```js
"extends": "node_modules/tslint-config-valtech/tslint-config-valtech.json"
```

You can extend it with your own rules and configuration.
See the [TSLint docs][] for more information.

  [TSLint]: https://www.npmjs.com/package/tslint
  [TSLint docs]: https://www.npmjs.com/package/tslint#table-of-contents
