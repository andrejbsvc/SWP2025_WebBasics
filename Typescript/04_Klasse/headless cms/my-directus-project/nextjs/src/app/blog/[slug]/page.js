"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const fetchers_1 = require("@/lib/directus/fetchers");
const BlogPostClient_1 = __importDefault(require("./BlogPostClient"));
async function BlogPostPage({ params, searchParams, }) {
    const { slug } = await params;
    const { id, version, preview, token } = await searchParams;
    const isDraft = (preview === 'true' && !!token) || (!!version && version !== 'published') || !!token;
    // Live preview adds version = main which is not required when fetching the main version.
    const fixedVersion = version != 'main' ? version : undefined;
    try {
        let postId = id;
        let post;
        let relatedPosts = [];
        // Content Version Fetching
        if (fixedVersion && !postId) {
            const foundPostId = await (0, fetchers_1.getPostIdBySlug)(slug, token || undefined);
            if (!foundPostId) {
                return (0, jsx_runtime_1.jsx)("div", { className: "text-center text-xl mt-[20%]", children: "404 - Post Not Found" });
            }
            postId = foundPostId;
        }
        if (postId && fixedVersion) {
            const result = await (0, fetchers_1.fetchPostByIdAndVersion)(postId, fixedVersion, slug, token || undefined);
            post = result.post;
            relatedPosts = result.relatedPosts;
        }
        else {
            const result = await (0, fetchers_1.fetchPostBySlug)(slug, {
                draft: isDraft,
                token,
            });
            post = result.post;
            relatedPosts = result.relatedPosts;
        }
        if (!post) {
            return (0, jsx_runtime_1.jsx)("div", { className: "text-center text-xl mt-[20%]", children: "404 - Post Not Found" });
        }
        const author = post.author;
        const authorName = author ? [author.first_name, author.last_name].filter(Boolean).join(' ') : '';
        const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;
        return ((0, jsx_runtime_1.jsx)(BlogPostClient_1.default, { post: post, relatedPosts: relatedPosts, author: author, authorName: authorName, postUrl: postUrl }));
    }
    catch (error) {
        console.error('Error loading blog post:', error);
        return (0, jsx_runtime_1.jsx)("div", { className: "text-center text-xl mt-[20%]", children: "404 - Post Not Found" });
    }
}
//# sourceMappingURL=page.js.map