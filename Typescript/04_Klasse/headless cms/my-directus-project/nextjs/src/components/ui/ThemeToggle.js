'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const next_themes_1 = require("next-themes");
const clsx_1 = __importDefault(require("clsx"));
const ThemeToggle = ({ className }) => {
    const { theme, setTheme, resolvedTheme } = (0, next_themes_1.useTheme)();
    const isDark = theme === 'dark' || resolvedTheme === 'dark';
    return ((0, jsx_runtime_1.jsx)("button", { "aria-label": "Toggle Dark Mode", onClick: () => setTheme(isDark ? 'light' : 'dark'), className: (0, clsx_1.default)('p-1 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 transition-colors', className), children: isDark ? ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "size-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z" }) })) : ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "size-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: (0, jsx_runtime_1.jsx)("path", { d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" }) })) }));
};
exports.default = ThemeToggle;
//# sourceMappingURL=ThemeToggle.js.map