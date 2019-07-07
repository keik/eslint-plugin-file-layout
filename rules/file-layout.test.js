const { RuleTester } = require("eslint");

const rule = require("./file-layout");
const ruleTester = new RuleTester();

ruleTester.run("file-layout", rule, {
  valid: [
    {
      code: "",
      filename: "a/b/c.js",
      settings: {
        "file-layout": true
      }
    },
    {
      code: "",
      filename: "a/b/c.js",
      settings: {
        "file-layout": {
          a: true
        }
      }
    },
    {
      code: "",
      filename: "a/b/c.js",
      settings: {
        "file-layout": {
          a: {
            b: true
          }
        }
      }
    },
    {
      code: "",
      filename: "a/b/c.js",
      settings: {
        "file-layout": {
          a: {
            b: "c.js"
          }
        }
      }
    },
    {
      code: "",
      filename: "a/b/c.js",
      settings: {
        "file-layout": {
          a: {
            ".*": "c.js"
          }
        }
      }
    }
  ],
  invalid: [
    {
      code: "",
      filename: "a/b/c.js",
      settings: {
        "file-layout": ".*"
      },
      errors: [
        {
          message: "Filename 'a/b/c.js' does not match file layout rules."
        }
      ]
    },
    {
      code: "",
      filename: "a/b/c.js",
      settings: {
        "file-layout": {}
      },
      errors: [
        {
          message: "Filename 'a/b/c.js' does not match file layout rules."
        }
      ]
    }
  ]
});
