"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Tagline = ({ tagline, className = '', as: Component = 'h2', 'data-directus': dataDirectus }) => {
    if (!tagline)
        return null;
    return ((0, jsx_runtime_1.jsx)(Component, { className: `font-heading text-accent font-normal uppercase ${className}
         text-lg md:text-xl lg:text-tagline`, "data-directus": dataDirectus, children: tagline }));
};
exports.default = Tagline;
//# sourceMappingURL=Tagline.js.map