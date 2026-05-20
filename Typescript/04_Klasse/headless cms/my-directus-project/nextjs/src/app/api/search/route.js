"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const directus_1 = require("@/lib/directus/directus");
const server_1 = require("next/server");
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    if (!search || search.length < 3) {
        return server_1.NextResponse.json({ error: 'Query must be at least 3 characters.' }, { status: 400 });
    }
    const { directus, readItems } = (0, directus_1.useDirectus)();
    try {
        const [pages, posts] = await Promise.all([
            directus.request(readItems('pages', {
                filter: {
                    _or: [{ title: { _contains: search } }, { permalink: { _contains: search } }],
                },
                fields: ['id', 'title', 'permalink', 'seo'],
            })),
            directus.request(readItems('posts', {
                filter: {
                    _and: [
                        { status: { _eq: 'published' } },
                        {
                            _or: [
                                { title: { _contains: search } },
                                { description: { _contains: search } },
                                { slug: { _contains: search } },
                                { content: { _contains: search } },
                            ],
                        },
                    ],
                },
                fields: ['id', 'title', 'description', 'slug', 'content', 'status'],
            })),
        ]);
        const results = [
            ...pages.map((page) => ({
                id: page.id,
                title: page.title,
                description: page.seo.meta_description,
                type: 'Page',
                link: `/${page.permalink.replace(/^\/+/, '')}`,
            })),
            ...posts.map((post) => ({
                id: post.id,
                title: post.title,
                description: post.description,
                type: 'Post',
                link: `/blog/${post.slug}`,
            })),
        ];
        return server_1.NextResponse.json(results);
    }
    catch (error) {
        console.error('Error fetching search results:', error);
        return server_1.NextResponse.json({ error: 'Failed to fetch search results.' }, { status: 500 });
    }
}
//# sourceMappingURL=route.js.map