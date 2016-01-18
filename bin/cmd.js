#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const fs = require("fs");
const execute = require("../lib/cli/cli").execute;
if (!argv["entry"] || !argv["output"]) {
    const usage = fs.readFileSync(__dirname + "/usage.txt", "utf-8");
    console.log(usage);
    process.exit(1);
}
const exitStatus = execute(argv);
process.exit(exitStatus);