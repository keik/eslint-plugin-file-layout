module.exports = {
  extends: ["eslint:recommended"],
  plugins: ["file-layout"],
  settings: {
    "file-layout": {
      // all source codes are in `src` directory.
      src: {
        // `feature1` and `feature2` contains feature-specific source code.
        // Both directory must have specific file layout which structured Flux architecture.
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
