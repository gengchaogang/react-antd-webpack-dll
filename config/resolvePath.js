const path = require("path");
function resolvePath(rel) {
    return path.resolve(__dirname, rel);
}

module.exports = resolvePath;