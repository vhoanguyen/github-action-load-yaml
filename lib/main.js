"use strict";
var core = require("@actions/core");
var github = require("@actions/github");
function run() {
    var dataFileName = core.getInput("json_file");
    console.log(dataFileName);
}
run();
