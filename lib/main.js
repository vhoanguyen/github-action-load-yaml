"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var core = require("@actions/core");
var github = require("@actions/github");
var yaml = require('js-yaml');
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
function run() {
    var dataFileName = core.getInput("json_file");
    console.log(dataFileName);
    var config = readConfigFile(dataFileName);
    console.log(config);
    core.setOutput("Data", "123");
}
function readConfigFile(filePath) {
    var fileContent = {};
    var file_path = path.resolve(filePath);
    console.log(file_path);
    try {
        fileContent = yaml.load(fs.readFileSync(file_path, "utf8"));
    }
    catch (e) {
        console.log(e);
    }
    return fileContent;
}
run();
