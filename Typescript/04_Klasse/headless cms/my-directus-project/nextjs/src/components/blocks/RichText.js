'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const utils_1 = require("@/lib/utils");
const Tagline_1 = __importDefault(require("@/components/ui/Tagline"));
const Headline_1 = __importDefault(require("@/components/ui/Headline"));
const Text_1 = __importDefault(require("@/components/ui/Text"));
const visual_editing_1 = require("@directus/visual-editing");
const RichText = ({ data, className }) => {
    const { id, tagline, headline, content, alignment = 'left' } = data;
    const router = (0, navigation_1.useRouter)();
    (0, react_1.useEffect)(() => {
        const container = document.querySelector('.prose');
        const links = container?.querySelectorAll('a');
        links?.forEach((link) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('/')) {
                link.onclick = (event) => {
                    event.preventDefault();
                    router.push(href);
                };
            }
        });
        const iframes = container?.querySelectorAll('iframe');
        iframes?.forEach((iframe) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'relative aspect-video';
            iframe.parentNode?.insertBefore(wrapper, iframe);
            wrapper.appendChild(iframe);
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
        });
    }, [content, router]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)('mx-auto max-w-[600px] space-y-6', alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left', className), children: [tagline && ((0, jsx_runtime_1.jsx)(Tagline_1.default, { tagline: tagline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_richtext',
                    item: id,
                    fields: 'tagline',
                    mode: 'popover',
                }) })), headline && ((0, jsx_runtime_1.jsx)(Headline_1.default, { headline: headline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_richtext',
                    item: id,
                    fields: 'headline',
                    mode: 'popover',
                }) })), content && ((0, jsx_runtime_1.jsx)(Text_1.default, { content: content, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_richtext',
                    item: id,
                    fields: 'content',
                    mode: 'drawer',
                }) }))] }));
};
exports.default = RichText;
//# sourceMappingURL=RichText.js.map