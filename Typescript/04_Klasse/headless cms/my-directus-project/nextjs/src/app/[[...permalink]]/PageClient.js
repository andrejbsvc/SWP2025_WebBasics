'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageClient;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const PageBuilder_1 = __importDefault(require("@/components/layout/PageBuilder"));
const useVisualEditing_1 = require("@/hooks/useVisualEditing");
const directus_schema_1 = require("@/types/directus-schema");
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const visual_editing_1 = require("@directus/visual-editing");
function PageClient({ sections, pageId }) {
    const { isVisualEditingEnabled, apply } = (0, useVisualEditing_1.useVisualEditing)();
    const router = (0, navigation_1.useRouter)();
    (0, react_1.useEffect)(() => {
        if (isVisualEditingEnabled) {
            apply({
                onSaved: () => {
                    router.refresh();
                },
            });
            apply({
                elements: document.querySelector('#visual-editing-button'),
                customClass: 'visual-editing-button-class',
                onSaved: () => {
                    router.refresh();
                },
            });
        }
    }, [isVisualEditingEnabled, apply, router]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)(PageBuilder_1.default, { sections: sections }), isVisualEditingEnabled && pageId && ((0, jsx_runtime_1.jsx)("div", { className: "fixed z-50 w-full bottom-4 inset-x-0 p-4 flex justify-center items-center gap-2", children: (0, jsx_runtime_1.jsxs)(button_1.Button, { id: "visual-editing-button", variant: "secondary", className: "visual-editing-button-class", "data-directus": (0, visual_editing_1.setAttr)({
                        collection: 'pages',
                        item: pageId,
                        fields: ['blocks', 'meta_m2a_button'],
                        mode: 'modal',
                    }), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Pencil, { className: "size-4 mr-2" }), "Edit All Blocks"] }) })), (0, jsx_runtime_1.jsx)("style", { jsx: true, global: true, children: `
				/* Safe to remove this if you're not using the visual editor. */
				.directus-visual-editing-overlay.visual-editing-button-class .directus-visual-editing-edit-button {
					position: absolute;
					inset: 0;
					width: 100%;
					height: 100%;
					transform: none;
					background: transparent;
				}
			` })] }));
}
//# sourceMappingURL=PageClient.js.map