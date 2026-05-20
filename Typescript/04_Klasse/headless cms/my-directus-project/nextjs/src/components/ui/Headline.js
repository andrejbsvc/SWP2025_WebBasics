"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Headline = ({ headline, className = '', as: Component = 'p', 'data-directus': dataDirectus }) => {
    if (!headline)
        return null;
    return ((0, jsx_runtime_1.jsx)(Component, { className: `font-heading text-foreground font-normal ${className}
         text-4xl md:text-5xl lg:text-headline`, "data-directus": dataDirectus, children: headline }));
};
exports.default = Headline;
//# sourceMappingURL=Headline.js.map