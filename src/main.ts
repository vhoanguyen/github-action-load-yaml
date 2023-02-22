const core = require("@actions/core");
const github = require("@actions/github");
const yaml = require('js-yaml')
import * as fs from 'fs';
import * as path from "path";


function run(): void {
    const dataFileName = core.getInput("json_file")
    console.log(dataFileName)
    let config = readConfigFile(dataFileName)
    console.log(config)
    core.setOutput("Data", config);

}

function readConfigFile(filePath: string) {
    let fileContent = {}
    let file_path = path.resolve(filePath)
    console.log(file_path)
    try {
      fileContent = yaml.load(fs.readFileSync(file_path, "utf8"));
    }
    catch(e: any) {
        console.log(e)
    }
    return fileContent
  }

run()