import assert from "power-assert";
import {getEntries} from "../src/dayone-to-quiver";
import DayOneEntry from "../src/DayOneEntry";
describe("dayone-to-quiver", function () {
    describe("getEntries", ()=> {
        it("should return dayOne entry", () => {
            const pathToDayOne = __dirname + "/fixtures/Journal.dayone";
            const entries = getEntries(pathToDayOne);
            assert(entries.length > 0);
            entries.forEach(entry => {
                assert(entry instanceof DayOneEntry);
            })
        });
    });

});