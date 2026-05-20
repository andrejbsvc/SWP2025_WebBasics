'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hero;
const jsx_runtime_1 = require("react/jsx-runtime");
const Tagline_1 = __importDefault(require("../ui/Tagline"));
const Headline_1 = __importDefault(require("@/components/ui/Headline"));
const Text_1 = __importDefault(require("@/components/ui/Text"));
const DirectusImage_1 = __importDefault(require("@/components/shared/DirectusImage"));
const ButtonGroup_1 = __importDefault(require("@/components/blocks/ButtonGroup"));
const utils_1 = require("@/lib/utils");
const visual_editing_1 = require("@directus/visual-editing");
function Hero({ data }) {
    const { id, layout, tagline, headline, description, image, button_group } = data;
    return ((0, jsx_runtime_1.jsxs)("section", { className: (0, utils_1.cn)('relative w-full mx-auto flex flex-col gap-6 md:gap-12', layout === 'image_center'
            ? 'items-center text-center'
            : layout === 'image_left'
                ? 'md:flex-row-reverse items-center'
                : 'md:flex-row items-center'), children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)('flex flex-col gap-4 w-full', layout === 'image_center' ? 'md:w-3/4 xl:w-2/3 items-center' : 'md:w-1/2 items-start'), children: [(0, jsx_runtime_1.jsx)(Tagline_1.default, { tagline: tagline, "data-directus": (0, visual_editing_1.setAttr)({
                            collection: 'block_hero',
                            item: id,
                            fields: 'tagline',
                            mode: 'popover',
                        }) }), (0, jsx_runtime_1.jsx)(Headline_1.default, { headline: headline, "data-directus": (0, visual_editing_1.setAttr)({
                            collection: 'block_hero',
                            item: id,
                            fields: 'headline',
                            mode: 'popover',
                        }) }), description && ((0, jsx_runtime_1.jsx)(Text_1.default, { content: description, "data-directus": (0, visual_editing_1.setAttr)({
                            collection: 'block_hero',
                            item: id,
                            fields: 'description',
                            mode: 'popover',
                        }) })), button_group && button_group.buttons.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)(layout === 'image_center' && 'flex justify-center', 'mt-6'), "data-directus": (0, visual_editing_1.setAttr)({
                            collection: 'block_button_group',
                            item: button_group.id,
                            fields: 'buttons',
                            mode: 'modal',
                        }), children: (0, jsx_runtime_1.jsx)(ButtonGroup_1.default, { buttons: button_group.buttons }) }))] }), image && ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)('relative w-full', layout === 'image_center' ? 'md:w-3/4 xl:w-2/3 h-[400px]' : 'md:w-1/2 h-[562px]'), "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_hero',
                    item: id,
                    fields: ['image', 'layout'],
                    mode: 'modal',
                }), children: (0, jsx_runtime_1.jsx)(DirectusImage_1.default, { uuid: image, alt: tagline || headline || 'Hero Image', fill: true, sizes: layout === 'image_center' ? '100vw' : '(max-width: 768px) 100vw, 50vw', className: "object-contain" }) }))] }));
}
//# sourceMappingURL=Hero.js.map