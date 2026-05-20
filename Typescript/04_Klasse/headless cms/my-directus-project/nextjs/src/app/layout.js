"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMetadata = generateMetadata;
exports.default = RootLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
require("@/styles/globals.css");
require("@/styles/fonts.css");
const react_1 = require("react");
const next_1 = require("next");
const VisualEditingLayout_1 = __importDefault(require("@/components/layout/VisualEditingLayout"));
const ThemeProvider_1 = require("@/components/ui/ThemeProvider");
const fetchers_1 = require("@/lib/directus/fetchers");
const directus_utils_1 = require("@/lib/directus/directus-utils");
async function generateMetadata() {
    const { globals } = await (0, fetchers_1.fetchSiteData)();
    const siteTitle = globals?.title || 'Simple CMS';
    const siteDescription = globals?.description || 'A starter CMS template powered by Next.js and Directus.';
    const faviconURL = globals?.favicon ? (0, directus_utils_1.getDirectusAssetURL)(globals.favicon) : '/favicon.ico';
    return {
        title: {
            default: siteTitle,
            template: `%s | ${siteTitle}`,
        },
        description: siteDescription,
        icons: {
            icon: faviconURL,
        },
    };
}
async function RootLayout({ children }) {
    const { globals, headerNavigation, footerNavigation } = await (0, fetchers_1.fetchSiteData)();
    const accentColor = globals?.accent_color || '#6644ff';
    return ((0, jsx_runtime_1.jsx)("html", { lang: "en", style: { '--accent-color': accentColor }, suppressHydrationWarning: true, children: (0, jsx_runtime_1.jsx)("body", { className: "antialiased font-sans flex flex-col min-h-screen", children: (0, jsx_runtime_1.jsx)(ThemeProvider_1.ThemeProvider, { children: (0, jsx_runtime_1.jsx)(VisualEditingLayout_1.default, { headerNavigation: headerNavigation, footerNavigation: footerNavigation, globals: globals, children: (0, jsx_runtime_1.jsx)("main", { className: "flex-grow", children: children }) }) }) }) }));
}
//# sourceMappingURL=layout.js.map