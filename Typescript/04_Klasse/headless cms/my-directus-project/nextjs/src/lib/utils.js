"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = cn;
exports.debounce = debounce;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
const next_1 = require("next");
/**
 * Combines class names dynamically with Tailwind merge.
 *
 * @param inputs - The class names to combine
 * @returns A single string with combined class names
 */
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
// Native debounce utility
function debounce(func, wait) {
    let timeout;
    return (...args) => {
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
//# sourceMappingURL=utils.js.map