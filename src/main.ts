const core = require("@actions/core");
const github = require("@actions/github");
const yaml = require('js-yaml')
import * as fs from 'fs';
import * as path from "path";


function run(): void {
    const dataFileName = core.getInput("json_file");
    let config = readConfigFile(dataFileName)
    console.log(config)
    core.setOutput("Data", config);

}

function readConfigFile(filePath: string) {
    let fileContent = {}
    try {
      fileContent = yaml.load(fs.readFileSync(path.resolve(filePath), "utf8"));
    }
    catch {
      return fileContent
    }
    return fileContent
  }

run()