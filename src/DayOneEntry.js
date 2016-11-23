const uuid = require('uuid');
const moment = require("moment");
const removeMd = require('remove-markdown');
export default class DayOneEntry {
    constructor(entryObject) {
        const createdDate = moment(entryObject["Creation Date"]);
        const entryText = entryObject['Entry Text'];
        const entryLines = entryText.split("\n");
        const title = removeMd(entryLines[0]);
        const body = entryLines.slice(1).join("\n");
        this.created_at = createdDate.unix();
        this.updated_at = createdDate.unix();
        this.title = title;
        this.body = body;
        this.tags = entryObject["Tags"] || [];
        this.uuid = uuid.v4().toUpperCase();
        // no title item
        this.isFragment = !(this.title || this.title.trim().length > 0);
    }
}