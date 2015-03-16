var babel = require("babel-core");

module.exports = {
  process: function (src, filename) {
    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && babel.canCompile(filename)) {
      return babel.transform(src, { filename: filename }).code;
    } else if (filename.indexOf(".less") === filename.length - 5) {
      return '';
    }
    return src;
  }
};
