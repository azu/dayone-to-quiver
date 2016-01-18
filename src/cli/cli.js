// LICENSE : MIT
"use strict";
import {dayOneToQuiver} from "../dayone-to-quiver";
const path = require("path");
export function execute(argv) {
    const entryPath = path.join(process.cwd(), argv["entry"]);
    const outputPath = path.join(process.cwd(), argv["output"]);
    try {
        dayOneToQuiver(entryPath, outputPath);
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}