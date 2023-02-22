const core = require("@actions/core");
const github = require("@actions/github");

function run(): void {
    const dataFileName = core.getInput("json_file");
    console.log(dataFileName)
}
run()