"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("@/lib/utils");
const Text = ({ content, className, 'data-directus': dataDirectus }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)('prose dark:prose-invert', className), dangerouslySetInnerHTML: { __html: content }, "data-directus": dataDirectus }));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map