'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const badge_1 = require("@/components/ui/badge");
const separator_1 = require("@/components/ui/separator");
const Button_1 = __importDefault(require("@/components/blocks/Button"));
const lucide_react_1 = require("lucide-react");
const visual_editing_1 = require("@directus/visual-editing");
const PricingCard = ({ card }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex flex-col max-w-[600px] md:min-h-[424px] border rounded-lg p-6 ${card.is_highlighted ? 'border-accent' : 'border-input'}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-start gap-2 mb-4", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-heading text-foreground", "data-directus": (0, visual_editing_1.setAttr)({
                            collection: 'block_pricing_cards',
                            item: card.id,
                            fields: ['title'],
                            mode: 'popover',
                        }), children: card.title }), (0, jsx_runtime_1.jsx)("div", { className: "flex-shrink-0", children: card.badge && ((0, jsx_runtime_1.jsx)(badge_1.Badge, { variant: card.is_highlighted ? 'secondary' : 'default', className: "text-xs font-medium uppercase", "data-directus": (0, visual_editing_1.setAttr)({
                                collection: 'block_pricing_cards',
                                item: card.id,
                                fields: ['badge'],
                                mode: 'popover',
                            }), children: card.badge })) })] }), card.price && ((0, jsx_runtime_1.jsx)("p", { className: "text-h2 mt-2 font-semibold", "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_pricing_cards',
                    item: card.id,
                    fields: ['price'],
                    mode: 'popover',
                }), children: card.price })), card.description && ((0, jsx_runtime_1.jsx)("p", { className: "text-description mt-2 line-clamp-2", "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_pricing_cards',
                    item: card.id,
                    fields: ['description'],
                    mode: 'popover',
                }), children: card.description })), (0, jsx_runtime_1.jsx)(separator_1.Separator, { className: "my-4" }), (0, jsx_runtime_1.jsx)("div", { className: "flex-grow", children: card.features && Array.isArray(card.features) && ((0, jsx_runtime_1.jsx)("ul", { className: "space-y-4", "data-directus": (0, visual_editing_1.setAttr)({
                        collection: 'block_pricing_cards',
                        item: card.id,
                        fields: ['features'],
                        mode: 'popover',
                    }), children: card.features.map((feature, index) => ((0, jsx_runtime_1.jsxs)("li", { className: "flex items-center gap-3 text-regular", children: [(0, jsx_runtime_1.jsx)("div", { className: "mt-1", children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle2, { className: "size-4 text-gray-muted" }) }), (0, jsx_runtime_1.jsx)("p", { className: "leading-relaxed", children: feature })] }, index))) })) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-auto pt-4", children: card.button && ((0, jsx_runtime_1.jsx)(Button_1.default, { id: card.button.id, "data-directus": (0, visual_editing_1.setAttr)({
                        collection: 'block_button',
                        item: card.button.id,
                        fields: ['type', 'label', 'variant', 'url', 'page', 'post'],
                        mode: 'popover',
                    }), label: card.button.label, variant: card.button.variant, url: card.button.url, block: true })) })] }));
};
exports.default = PricingCard;
//# sourceMappingURL=PricingCard.js.map