"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirectusAssetURL = getDirectusAssetURL;
const directus_schema_1 = require("@/types/directus-schema");
function getDirectusAssetURL(fileOrString) {
    if (!fileOrString)
        return '';
    if (typeof fileOrString === 'string') {
        return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${fileOrString}`;
    }
    return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${fileOrString.id}`;
}
//# sourceMappingURL=directus-utils.js.map