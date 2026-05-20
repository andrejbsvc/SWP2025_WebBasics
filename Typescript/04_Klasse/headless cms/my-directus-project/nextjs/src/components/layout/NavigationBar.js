'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const navigation_menu_1 = require("@/components/ui/navigation-menu");
const dropdown_menu_1 = require("@/components/ui/dropdown-menu");
const button_1 = require("@/components/ui/button");
const collapsible_1 = require("@/components/ui/collapsible");
const lucide_react_1 = require("lucide-react");
const ThemeToggle_1 = __importDefault(require("../ui/ThemeToggle"));
const SearchModal_1 = __importDefault(require("@/components/ui/SearchModal"));
const container_1 = __importDefault(require("@/components/ui/container"));
const visual_editing_1 = require("@directus/visual-editing");
const NavigationBar = (0, react_1.forwardRef)(({ navigation, globals }, ref) => {
    const [menuOpen, setMenuOpen] = (0, react_1.useState)(false);
    const directusURL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
    const lightLogoUrl = globals?.logo ? `${directusURL}/assets/${globals.logo}` : '/images/logo.svg';
    const darkLogoUrl = globals?.logo_dark_mode ? `${directusURL}/assets/${globals.logo_dark_mode}` : '';
    const handleLinkClick = () => {
        setMenuOpen(false);
    };
    return ((0, jsx_runtime_1.jsx)("header", { ref: ref, className: "sticky top-0 z-50 w-full bg-background text-foreground", children: (0, jsx_runtime_1.jsxs)(container_1.default, { className: "flex items-center justify-between p-4", children: [(0, jsx_runtime_1.jsxs)(link_1.default, { href: "/", className: "flex-shrink-0", children: [(0, jsx_runtime_1.jsx)(image_1.default, { src: lightLogoUrl, alt: "Logo", width: 150, height: 100, className: "w-[120px] h-auto dark:hidden", priority: true }), darkLogoUrl && ((0, jsx_runtime_1.jsx)(image_1.default, { src: darkLogoUrl, alt: "Logo (Dark Mode)", width: 150, height: 100, className: "w-[120px] h-auto hidden dark:block", priority: true }))] }), (0, jsx_runtime_1.jsxs)("nav", { className: "flex items-center gap-4", children: [(0, jsx_runtime_1.jsx)(SearchModal_1.default, {}), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenu, { className: "hidden md:flex", "data-directus": navigation
                                ? (0, visual_editing_1.setAttr)({
                                    collection: 'navigation',
                                    item: navigation.id,
                                    fields: ['items'],
                                    mode: 'modal',
                                })
                                : undefined, children: (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuList, { className: "flex gap-6", children: navigation?.items?.map((section) => ((0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuItem, { children: section.children && section.children.length > 0 ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuTrigger, { className: "focus:outline-none", children: (0, jsx_runtime_1.jsx)("span", { className: "font-heading text-nav", children: section.title }) }), (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuContent, { className: "absolute mt-2 min-w-[150px] rounded-md bg-background p-4 shadow-md", children: (0, jsx_runtime_1.jsx)("ul", { className: "flex flex-col gap-2 pb-4", children: section.children.map((child) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { href: child.page?.permalink || child.url || '#', className: "font-heading text-nav", children: child.title }) }, child.id))) }) })] })) : ((0, jsx_runtime_1.jsx)(navigation_menu_1.NavigationMenuLink, { href: section.page?.permalink || section.url || '#', className: "font-heading text-nav", children: section.title })) }, section.id))) }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex md:hidden", children: (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { open: menuOpen, onOpenChange: setMenuOpen, children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "link", size: "icon", "aria-label": "Open menu", className: "dark:text-white dark:hover:text-accent", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Menu, {}) }) }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuContent, { align: "start", className: "top-full w-screen p-6 shadow-md max-w-full overflow-hidden", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-4", children: navigation?.items?.map((section) => ((0, jsx_runtime_1.jsx)("div", { children: section.children && section.children.length > 0 ? ((0, jsx_runtime_1.jsxs)(collapsible_1.Collapsible, { children: [(0, jsx_runtime_1.jsxs)(collapsible_1.CollapsibleTrigger, { className: "font-heading text-nav hover:text-accent w-full text-left flex items-center focus:outline-none", children: [(0, jsx_runtime_1.jsx)("span", { children: section.title }), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "size-4 ml-1 hover:rotate-180 active:rotate-180 focus:rotate-180" })] }), (0, jsx_runtime_1.jsx)(collapsible_1.CollapsibleContent, { className: "ml-4 mt-2 flex flex-col gap-2", children: section.children.map((child) => ((0, jsx_runtime_1.jsx)(link_1.default, { href: child.page?.permalink || child.url || '#', className: "font-heading text-nav", onClick: handleLinkClick, children: child.title }, child.id))) })] })) : ((0, jsx_runtime_1.jsx)(link_1.default, { href: section.page?.permalink || section.url || '#', className: "font-heading text-nav", onClick: handleLinkClick, children: section.title })) }, section.id))) }) })] }) }), (0, jsx_runtime_1.jsx)(ThemeToggle_1.default, {})] })] }) }));
});
NavigationBar.displayName = 'NavigationBar';
exports.default = NavigationBar;
//# sourceMappingURL=NavigationBar.js.map