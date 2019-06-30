module.exports = {
  extends: ["eslint:recommended"],
  plugins: ["file-layout"],
  settings: {
    "file-layout": {
      src: {
        dir1: "*"
      }
    }
  },
  rules: {
    "file-layout/file-layout": "error"
  }
};
