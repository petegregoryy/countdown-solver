const fs = require("fs");

var dictFile = fs.readFileSync("dictionary.json");

var dict = JSON.parse(dictFile);
