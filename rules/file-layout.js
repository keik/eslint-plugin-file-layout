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
  const currentPath = paths[0];
  if (currentPath == null) return false;
  if (typeof setting === "string") {
    return (
      setting === "**" ||
      (paths.length === 1 &&
        (setting === currentPath ||
          /* TODO: allow glob pattern or regexp */
          setting === "*"))
    );
  } else if (typeof setting === "object") {
    if (Object.prototype.hasOwnProperty.call(setting, currentPath)) {
      return isValid(setting[currentPath], paths.slice(1));
    } else if (
      /* TODO: allow glob pattern or regexp */
      Object.prototype.hasOwnProperty.call(setting, "*")
    ) {
      return isValid(setting["*"], paths.slice(1));
    } else {
      false;
    }
  } else {
    throw new Error("Reached unexpected case. This is likely bug.");
  }
}
