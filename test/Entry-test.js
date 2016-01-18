import assert from "power-assert";
import Entry from "../src/DayOneEntry"
const fs = require("fs");
const plist = require("plist");
describe('DayOneEntry', function () {
    it("should has expected json", function () {
        const entryXML = fs.readFileSync(__dirname + "/fixtures/entry.doentry", "utf-8");
        const entryJSON = plist.parse(entryXML);
        const entry = new Entry(entryJSON);
        const expected = require("./fixtures/expected.entry.json");

        assert.deepEqual(entry.tags, expected.tags);
        assert(typeof entry.uuid === "string");
        assert.equal(entry.body, expected.body);
        assert.equal(entry.title, expected.title);
    });
});