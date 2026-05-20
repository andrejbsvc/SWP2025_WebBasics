"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("@/lib/utils");
const Container = ({ children = null, className = '', as: Component = 'div', role }) => {
    if (!children)
        return null;
    return ((0, jsx_runtime_1.jsx)(Component, { className: (0, utils_1.cn)('max-w-7xl mx-auto px-4 sm:px-6 lg:px-16', className), role: role, children: children }));
};
exports.default = Container;
//# sourceMappingURL=container.js.map