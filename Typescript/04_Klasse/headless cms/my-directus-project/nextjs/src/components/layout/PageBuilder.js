"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const directus_schema_1 = require("@/types/directus-schema");
const BaseBlock_1 = __importDefault(require("@/components/blocks/BaseBlock"));
const container_1 = __importDefault(require("@/components/ui/container"));
const PageBuilder = ({ sections }) => {
    const validBlocks = sections.filter((block) => typeof block.collection === 'string' && !!block.item && typeof block.item === 'object');
    return ((0, jsx_runtime_1.jsx)("div", { children: validBlocks.map((block) => ((0, jsx_runtime_1.jsx)("div", { "data-background": block.background, className: "py-16", children: (0, jsx_runtime_1.jsx)(container_1.default, { children: (0, jsx_runtime_1.jsx)(BaseBlock_1.default, { block: {
                        collection: block.collection,
                        item: block.item,
                        id: block.id,
                    } }) }) }, block.id))) }));
};
exports.default = PageBuilder;
//# sourceMappingURL=PageBuilder.js.map