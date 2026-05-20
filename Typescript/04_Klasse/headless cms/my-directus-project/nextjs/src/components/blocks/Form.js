'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const directus_schema_1 = require("@/types/directus-schema");
const Tagline_1 = __importDefault(require("@/components/ui/Tagline"));
const FormBuilder_1 = __importDefault(require("../forms/FormBuilder"));
const Headline_1 = __importDefault(require("@/components/ui/Headline"));
const visual_editing_1 = require("@directus/visual-editing");
const FormBlock = ({ data }) => {
    const { tagline, headline, form } = data;
    if (!form) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("section", { className: "mx-auto", children: [tagline && ((0, jsx_runtime_1.jsx)(Tagline_1.default, { tagline: tagline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_form',
                    item: data.id,
                    fields: 'tagline',
                    mode: 'popover',
                }) })), headline && ((0, jsx_runtime_1.jsx)(Headline_1.default, { headline: headline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_form',
                    item: data.id,
                    fields: 'headline',
                    mode: 'popover',
                }) })), (0, jsx_runtime_1.jsx)("div", { "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_form',
                    item: data.id,
                    fields: ['form'],
                    mode: 'popover',
                }), children: (0, jsx_runtime_1.jsx)(FormBuilder_1.default, { form: form, className: "mt-8" }) })] }));
};
exports.default = FormBlock;
//# sourceMappingURL=Form.js.map