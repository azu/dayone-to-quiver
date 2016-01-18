// LICENSE : MIT
"use strict";
const fs = require("fs");
const path = require("path");
const plist = require("plist");
const mkdirp = require("mkdirp");
import DayOneEntry from "./DayOneEntry";
import QuiverEntryBuilder from "./QuiverEntryBuilder";
/**
 *
 * @param {string} dayOneFilePath
 * @returns
 */
export function getEntries(dayOneFilePath) {
    const entryDir = path.join(dayOneFilePath, "entries");
    const entriesFilePathList = fs.readdirSync(entryDir);
    return entriesFilePathList.map(filePath => {
        const entryXML = fs.readFileSync(path.join(entryDir, filePath), "utf-8");
        const entryJSON = plist.parse(entryXML);
        return new DayOneEntry(entryJSON);
    });
}

export function dayOneToQuiver(dayOneFilePath, outputDir) {
    const entries = getEntries(dayOneFilePath);
    /*
    B59AC519-2A2C-4EC8-B701-E69F54F40A85.qvnote/
    ├── content.json
    ├── meta.json
     */
    entries.filter(entry => !entry.isFragment).forEach(entry => {
        const builder = new QuiverEntryBuilder(entry);
        const qvnoteDir = path.join(outputDir, `${entry.uuid}.qvnote`);
        // create dir
        mkdirp.sync(qvnoteDir);
        // create meta
        fs.writeFileSync(path.join(qvnoteDir, 'meta.json'), JSON.stringify(builder.toMeta(), null, 2));
        // create content
        fs.writeFileSync(path.join(qvnoteDir, 'content.json'), JSON.stringify(builder.toContent(), null, 2));
        console.log("Created " + qvnoteDir);
    });
}