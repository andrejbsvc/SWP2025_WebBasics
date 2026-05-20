'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VisualEditingLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useVisualEditing_1 = require("@/hooks/useVisualEditing");
const navigation_1 = require("next/navigation");
const NavigationBar_1 = __importDefault(require("@/components/layout/NavigationBar"));
const Footer_1 = __importDefault(require("@/components/layout/Footer"));
function VisualEditingLayout({ headerNavigation, footerNavigation, globals, children, }) {
    const navRef = (0, react_1.useRef)(null);
    const footerRef = (0, react_1.useRef)(null);
    const { isVisualEditingEnabled, apply } = (0, useVisualEditing_1.useVisualEditing)();
    const router = (0, navigation_1.useRouter)();
    (0, react_1.useEffect)(() => {
        if (isVisualEditingEnabled) {
            // Apply visual editing for the navigation bar if its ref is set.
            if (navRef.current) {
                apply({
                    elements: [navRef.current],
                    onSaved: () => router.refresh(),
                });
            }
            // Apply visual editing for the footer if its ref is set.
            if (footerRef.current) {
                apply({
                    elements: [footerRef.current],
                    onSaved: () => router.refresh(),
                });
            }
        }
    }, [isVisualEditingEnabled, apply, router]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NavigationBar_1.default, { ref: navRef, navigation: headerNavigation, globals: globals }), children, (0, jsx_runtime_1.jsx)(Footer_1.default, { ref: footerRef, navigation: footerNavigation, globals: globals })] }));
}
//# sourceMappingURL=VisualEditingLayout.js.map