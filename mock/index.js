let Path = require("path");
let glob = require("glob");

// 读取所有API文件
const apiFiles = glob.sync(Path.resolve(__dirname, "./api") + "/**/*.js", {
    nodir: true
});
let data = {};
apiFiles.forEach(item => {
    let ps = item
        .split("/mock/api/")[1]
        .replace(/^(.*)\.\w+$/, "$1")
        .replace("/", "_");
    console.dir(ps);
    data[ps] = require(item);
});

module.exports = function() {
    return data;
};
