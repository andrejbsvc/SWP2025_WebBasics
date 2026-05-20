"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sitemap;
const directus_1 = require("@/lib/directus/directus");
async function sitemap() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
        throw new Error('Environment variable NEXT_PUBLIC_SITE_URL is not set');
    }
    const { directus, readItems } = (0, directus_1.useDirectus)();
    try {
        const pagesPromise = directus.request(readItems('pages', {
            filter: { status: { _eq: 'published' } },
            fields: ['permalink', 'published_at'],
            limit: -1,
        }));
        const postsPromise = directus.request(readItems('posts', {
            filter: { status: { _eq: 'published' } },
            fields: ['slug', 'published_at'],
            limit: -1,
        }));
        const [pages, posts] = await Promise.all([pagesPromise, postsPromise]);
        const pageUrls = pages
            .filter((page) => page.permalink)
            .map((page) => ({
            url: `${process.env.NEXT_PUBLIC_SITE_URL}${page.permalink}`,
            lastModified: page.published_at || new Date().toISOString(),
        }));
        const postUrls = posts
            .filter((post) => post.slug)
            .map((post) => ({
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
            lastModified: post.published_at || new Date().toISOString(),
        }));
        return [...pageUrls, ...postUrls];
    }
    catch (error) {
        console.error('Error generating sitemap:', error);
        throw new Error('Failed to generate sitemap');
    }
}
//# sourceMappingURL=sitemap.js.map