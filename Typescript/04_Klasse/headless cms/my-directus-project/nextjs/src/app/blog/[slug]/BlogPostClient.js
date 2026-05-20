'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostClient;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const visual_editing_1 = require("@directus/visual-editing");
const useVisualEditing_1 = require("@/hooks/useVisualEditing");
const DirectusImage_1 = __importDefault(require("@/components/shared/DirectusImage"));
const Text_1 = __importDefault(require("@/components/ui/Text"));
const separator_1 = require("@/components/ui/separator");
const ShareDialog_1 = __importDefault(require("@/components/ui/ShareDialog"));
const link_1 = __importDefault(require("next/link"));
const Headline_1 = __importDefault(require("@/components/ui/Headline"));
const container_1 = __importDefault(require("@/components/ui/container"));
const directus_schema_1 = require("@/types/directus-schema");
function BlogPostClient({ post, relatedPosts, author, authorName, postUrl }) {
    const { isVisualEditingEnabled, apply } = (0, useVisualEditing_1.useVisualEditing)();
    const router = (0, navigation_1.useRouter)();
    (0, react_1.useEffect)(() => {
        if (isVisualEditingEnabled) {
            apply({
                onSaved: () => {
                    router.refresh();
                },
            });
        }
    }, [isVisualEditingEnabled, apply, router]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(container_1.default, { className: "py-12", children: [(0, jsx_runtime_1.jsx)("h1", { children: "das ist uper" }), post.image && ((0, jsx_runtime_1.jsx)("div", { className: "mb-8", children: (0, jsx_runtime_1.jsx)("div", { className: "relative w-full h-[400px] overflow-hidden rounded-lg", "data-directus": (0, visual_editing_1.setAttr)({
                            collection: 'posts',
                            item: post.id,
                            fields: ['image', 'meta_header_image'],
                            mode: 'modal',
                        }), children: (0, jsx_runtime_1.jsx)(DirectusImage_1.default, { uuid: post.image, alt: post.title || 'post header image', className: "object-cover", fill: true }) }) })), (0, jsx_runtime_1.jsx)(Headline_1.default, { as: "h2", headline: post.title, className: "!text-accent mb-4", "data-directus": (0, visual_editing_1.setAttr)({
                        collection: 'posts',
                        item: post.id,
                        fields: ['title', 'slug'],
                        mode: 'popover',
                    }) }), (0, jsx_runtime_1.jsx)(separator_1.Separator, { className: "mb-8" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-[minmax(0,_2fr)_400px] gap-12", children: [(0, jsx_runtime_1.jsx)("main", { className: "text-left", children: (0, jsx_runtime_1.jsx)(Text_1.default, { content: post.content || '', "data-directus": (0, visual_editing_1.setAttr)({
                                    collection: 'posts',
                                    item: post.id,
                                    fields: ['content', 'meta_header_content'],
                                    mode: 'drawer',
                                }) }) }), (0, jsx_runtime_1.jsxs)("aside", { className: "space-y-6 p-6 rounded-lg max-w-[496px] h-fit bg-background-muted", children: [author && ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4", "data-directus": (0, visual_editing_1.setAttr)({
                                        collection: 'posts',
                                        item: post.id,
                                        fields: ['author'],
                                        mode: 'popover',
                                    }), children: [author.avatar && ((0, jsx_runtime_1.jsx)(DirectusImage_1.default, { uuid: typeof author.avatar === 'string' ? author.avatar : author.avatar.id, alt: authorName || 'author avatar', className: "rounded-full object-cover size-[48px]", width: 48, height: 48 })), (0, jsx_runtime_1.jsx)("div", { children: authorName && (0, jsx_runtime_1.jsx)("p", { className: "font-bold", children: authorName }) })] })), post.description && ((0, jsx_runtime_1.jsx)("p", { "data-directus": (0, visual_editing_1.setAttr)({
                                        collection: 'posts',
                                        item: post.id,
                                        fields: 'description',
                                        mode: 'popover',
                                    }), children: post.description })), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-start", children: (0, jsx_runtime_1.jsx)(ShareDialog_1.default, { postUrl: postUrl, postTitle: post.title }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(separator_1.Separator, { className: "my-4" }), (0, jsx_runtime_1.jsx)("h3", { className: "font-bold mb-4", children: "Related Posts" }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: relatedPosts.map((relatedPost) => ((0, jsx_runtime_1.jsxs)(link_1.default, { href: `/blog/${relatedPost.slug}`, className: "flex items-center space-x-4 hover:text-accent group", children: [relatedPost.image && ((0, jsx_runtime_1.jsx)("div", { className: "relative shrink-0 w-[150px] h-[100px] overflow-hidden rounded-lg", children: (0, jsx_runtime_1.jsx)(DirectusImage_1.default, { uuid: relatedPost.image, alt: relatedPost.title || 'related posts', className: "object-cover transition-transform duration-300 group-hover:scale-110", fill: true, sizes: "(max-width: 768px) 100px, (max-width: 1024px) 150px, 150px" }) })), (0, jsx_runtime_1.jsx)("span", { className: "font-heading", children: relatedPost.title })] }, relatedPost.id))) })] })] })] })] }) }));
}
//# sourceMappingURL=BlogPostClient.js.map