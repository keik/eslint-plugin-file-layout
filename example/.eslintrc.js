module.exports = {
  extends: ["eslint:recommended"],
  plugins: ["file-layout"],
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
