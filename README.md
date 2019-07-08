# eslint-plugin-file-layout

ESLint rules to ensure consistency in file layout.

## Why

File layout is frontend part of application architecture.

**No consistency in file layout means no application architecture.**

Get consistent file layout for better development.

## Setting

Require to define allowed file layout in `settings["file-layout"]` field at .eslintrc.

File layout definitions can be specified as object and regard the nested key-value as file paths.

* Regexp is available in path string.
* Special value `true` would ignore remaind paths.

```js
module.exports = {
  plugins: ["file-layout"],

  // define file layout rule to settings["file-layout"] field.
  settings: {
    "file-layout": {
      // all source codes are in `src` directory.
      src: {
        // `feature1` and `feature2` directories contain feature-specific source code.
        // Both directory must have specific file layout, like Flux architecture.
        "(feature1|feature2)": {
          actions: ".+Action.js",
          // `components` directory can contain any files and directories nested free.
          components: true,
          // `containers` directory can contain only `Container.js` suffixed file like `FooContainer.js`.
          containers: ".+Container.js",
          // `reducers` directory can contain any files and directories nested free.
          reducers: true,
          // `index.js` under `feature1` and `feature2` directory is allowed.
          "index.js": true
        },
        // `utilities` directory can contain any files but no nested free.
        utilities: ".+"
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

