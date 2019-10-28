const IncomingForm = require("formidable");
const formData = new IncomingForm();
const path = require("path");
const fs = require("fs");
// const crypto = require("crypto");
const md5 = require("md5");
// let hash = crypto.createHash("md5");

formData.encoding = "utf-8";
formData.keepExtensions = true;
console.log(path.resolve(""));
formData.uploadDir = path.resolve("./app/public/upload/");
formData.multiples = true;

formData.on("fileBegin", (name, file) => {
    // console.log(name);
    // console.log(file);
});
formData.on("progress", function(bytesReceived, bytesExpected) {
    console.log(bytesReceived + "progress");
    // console.log(bytesExpected);
});
formData.on("file", function(name, file) {
    // upload file finish and move to new path;
    // console.log(file);
    // fs.rename(file.path, )
});
formData.on("end", function(name, file) {
    // console.log(file);
    console.log("finish parse");
});


module.exports = formData;
