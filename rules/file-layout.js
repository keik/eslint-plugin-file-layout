const path = require("path");
const debug = require("debug")("eslint-plugin-file-layout:file-layout");

module.exports = {
  meta: {
    type: "layout",
    schema: []
  },
  create(context) {
    const filename = path.relative(process.cwd(), context.getFilename());
    const paths = filename.split(path.sep);
    const setting = context.settings["file-layout"];
    debug("create()", filename);
    return {
      Program(node) {
        if (!isValid(setting, paths))
          context.report(
            node,
            "Filename '{{filename}}' does not match file layout rules.",
            { filename }
          );
      }
    };
  }
};

function isValid(setting, paths) {
  debug(`isValid(${JSON.stringify(setting)}, ${JSON.stringify(paths)}})`);
  if (setting === true) return true;
  const currentPath = paths[0];
  if (currentPath == null) return false;
  if (typeof setting === "string") {
    return paths.length === 1 && RegExp("^" + setting + "$").test(currentPath);
  } else if (typeof setting === "object") {
    for (let k in setting) {
      if (RegExp("^" + k + "$").test(currentPath)) {
        return isValid(setting[k], paths.slice(1));
      }
    }
  } else {
    throw new Error("Reached unexpected case. This is likely bug.");
  }
}
