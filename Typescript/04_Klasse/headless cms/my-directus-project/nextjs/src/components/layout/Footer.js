'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const container_1 = __importDefault(require("@/components/ui/container"));
const ThemeToggle_1 = __importDefault(require("@/components/ui/ThemeToggle"));
const Footer = (0, react_1.forwardRef)(({ navigation, globals }, ref) => {
    const directusURL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
    const lightLogoUrl = globals?.logo ? `${directusURL}/assets/${globals.logo}` : '/images/logo.svg';
    const darkLogoUrl = globals?.logo_dark_mode ? `${directusURL}/assets/${globals.logo_dark_mode}` : '';
    return ((0, jsx_runtime_1.jsx)("footer", { ref: ref, className: "bg-gray dark:bg-[var(--background-variant-color)] py-16", children: (0, jsx_runtime_1.jsx)(container_1.default, { className: "text-foreground dark:text-white", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row justify-between items-start gap-8 pt-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsxs)(link_1.default, { href: "/", className: "inline-block transition-opacity hover:opacity-70", children: [(0, jsx_runtime_1.jsx)("img", { src: lightLogoUrl, alt: "Logo", className: darkLogoUrl ? 'w-[120px] h-auto dark:hidden' : 'w-[120px] h-auto' }), darkLogoUrl && ((0, jsx_runtime_1.jsx)("img", { src: darkLogoUrl, alt: "Logo (Dark Mode)", className: "w-[120px] h-auto hidden dark:block" }))] }), globals?.description && (0, jsx_runtime_1.jsx)("p", { className: "text-description mt-2", children: globals.description }), globals?.social_links && ((0, jsx_runtime_1.jsx)("div", { className: "mt-4 flex space-x-4", children: globals.social_links.map((social) => ((0, jsx_runtime_1.jsx)("a", { href: social.url, target: "_blank", rel: "noopener noreferrer", className: "size-8 rounded bg-transparent inline-flex items-center justify-center transition-colors hover:opacity-70", children: (0, jsx_runtime_1.jsx)("img", { src: `/icons/social/${social.service}.svg`, alt: `${social.service} icon`, className: "size-6 dark:invert" }) }, social.service))) }))] }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-start md:items-end flex-1", children: (0, jsx_runtime_1.jsx)("nav", { className: "w-full md:w-auto text-left", children: (0, jsx_runtime_1.jsxs)("ul", { className: "space-y-4", children: [navigation?.items?.map((item) => ((0, jsx_runtime_1.jsx)("li", { children: item.page?.permalink ? ((0, jsx_runtime_1.jsx)(link_1.default, { href: item.page.permalink, className: "text-nav font-medium hover:underline", children: item.title })) : ((0, jsx_runtime_1.jsx)("a", { href: item.url || '#', className: "text-nav font-medium hover:underline", children: item.title })) }, item.id))), (0, jsx_runtime_1.jsx)(ThemeToggle_1.default, { className: "dark:text-white" })] }) }) })] }) }) }));
});
Footer.displayName = 'Footer';
exports.default = Footer;
//# sourceMappingURL=Footer.js.map