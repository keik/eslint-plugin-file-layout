# eslint-plugin-file-layout

ESLint rules to ensure consistent file layout for not only JavaScripts but also all files.

## Setting

Require to define allowed file layout in `settings['file-layout']` field at .eslintrc.

File layout definitions can be specified as object and regard the nested key-value as file paths.

* Regexp is available in path string.
* Special value `true` would ignore remaind paths.

```js
module.exports = {
  plugins: ["file-layout"],

  // define file layout rule to settings['file-layout'] field.
  settings: {
    "file-layout": {
      src: {
        dir1: true
      }
    }
  },
  rules: {
    "file-layout/file-layout": "error"
  }
};
```

Working example is in [example](./example).
Checkout and execute `npm install && npm run lint`.

## Rules

### `file-layout`

Validate file to fit specified file layout.

