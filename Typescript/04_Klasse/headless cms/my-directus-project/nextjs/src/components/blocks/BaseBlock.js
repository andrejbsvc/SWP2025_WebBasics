'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const RichText_1 = __importDefault(require("@/components/blocks/RichText"));
const Hero_1 = __importDefault(require("@/components/blocks/Hero"));
const Gallery_1 = __importDefault(require("@/components/blocks/Gallery"));
const Pricing_1 = __importDefault(require("@/components/blocks/Pricing"));
const Posts_1 = __importDefault(require("@/components/blocks/Posts"));
const Form_1 = __importDefault(require("@/components/blocks/Form"));
const BaseBlock = ({ block }) => {
    const components = {
        block_hero: Hero_1.default,
        block_richtext: RichText_1.default,
        block_gallery: Gallery_1.default,
        block_pricing: Pricing_1.default,
        block_posts: Posts_1.default,
        block_form: Form_1.default,
    };
    const Component = components[block.collection];
    if (!Component) {
        return null;
    }
    const itemId = block.item?.id;
    return (0, jsx_runtime_1.jsx)(Component, { data: block.item, blockId: block.id, itemId: itemId });
};
exports.default = BaseBlock;
//# sourceMappingURL=BaseBlock.js.map