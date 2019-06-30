# eslint-plugin-file-layout

ESLint rules to ensure consistent file layout for not only JavaScripts but also all files.

## Example

in .eslintrc.js

```js
module.exports = {
  plugins: ["file-layout"],
  // define file layout rule to settings['file-layout'] field.
  settings: {
    "file-layout": {
      src: {
        dir1: "*"
      }
    }
  },
  rules: {
    // enable rule
    "file-layout/file-layout": "error"
  }
};
```

Working example is in [example](./example).
Checkout and execute `npm install && npm run lint`.

## Rules

### `file-layout`

Validate file to fit specified file layout.
