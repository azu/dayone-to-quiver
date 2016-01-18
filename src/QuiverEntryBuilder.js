// LICENSE : MIT
"use strict";
export default class QuiverEntryBuilder {
    /**
     *
     * @param {DayOneEntry} dayOneEntry
     */
    constructor(dayOneEntry) {
        this.entry = dayOneEntry;
    }

    toMeta() {
        var entry = this.entry;
        return {
            "created_at": entry.created_at,
            "tags": entry.tags,
            "title": entry.title,
            "updated_at": entry.updated_at,
            "uuid": entry.uuid
        }
    }

    toContent() {
        var entry = this.entry;
        return {
            "title": entry.title,
            "cells": [
                {
                    "type": "markdown",
                    "data": entry.body
                }
            ]
        }
    }
}