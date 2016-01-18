// LICENSE : MIT
"use strict";
import {dayOneToQuiver} from "../dayone-to-quiver";
export function execute(argv) {
    try {
        dayOneToQuiver(argv["entry"], argv["output"]);
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}