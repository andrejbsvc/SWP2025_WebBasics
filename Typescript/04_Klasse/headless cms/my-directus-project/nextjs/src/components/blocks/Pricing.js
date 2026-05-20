'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Tagline_1 = __importDefault(require("@/components/ui/Tagline"));
const Headline_1 = __importDefault(require("@/components/ui/Headline"));
const PricingCard_1 = __importDefault(require("@/components/blocks/PricingCard"));
const visual_editing_1 = require("@directus/visual-editing");
const Pricing = ({ data }) => {
    const { id, tagline, headline, pricing_cards } = data;
    if (!pricing_cards || !Array.isArray(pricing_cards)) {
        return null;
    }
    const gridClasses = (() => {
        if (pricing_cards.length === 1)
            return 'grid-cols-1';
        if (pricing_cards.length % 3 === 0)
            return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
        return 'grid-cols-1 sm:grid-cols-2';
    })();
    return ((0, jsx_runtime_1.jsxs)("section", { children: [tagline && ((0, jsx_runtime_1.jsx)(Tagline_1.default, { tagline: tagline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_pricing',
                    item: id,
                    fields: 'tagline',
                    mode: 'popover',
                }) })), headline && ((0, jsx_runtime_1.jsx)(Headline_1.default, { headline: headline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_pricing',
                    item: id,
                    fields: 'headline',
                    mode: 'popover',
                }) })), (0, jsx_runtime_1.jsx)("div", { className: `grid gap-6 mt-8 ${gridClasses}`, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_pricing',
                    item: id,
                    fields: ['pricing_cards'],
                    mode: 'modal',
                }), children: pricing_cards.map((card) => ((0, jsx_runtime_1.jsx)(PricingCard_1.default, { card: card }, card.id))) })] }));
};
exports.default = Pricing;
//# sourceMappingURL=Pricing.js.map