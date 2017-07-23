var fs = require("fs");

var fileContents = fs.readFileSync(__dirname + "/test.txt", "utf8");
console.log("Sync - The file contents are  : ", fileContents);

fs.readFile(__dirname + "/test.txt", "utf8", function(err, fileContents) {
    console.log("Async - The file contents are : ", fileContents);
});

console.log("end!");