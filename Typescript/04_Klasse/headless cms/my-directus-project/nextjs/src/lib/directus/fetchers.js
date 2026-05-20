"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTotalPostCount = exports.fetchPaginatedPosts = exports.fetchPostBySlug = exports.fetchSiteData = exports.fetchPostByIdAndVersion = exports.getPostIdBySlug = exports.getPageIdByPermalink = exports.fetchPageDataById = exports.fetchPageData = void 0;
exports.fetchRedirects = fetchRedirects;
const directus_schema_1 = require("@/types/directus-schema");
const directus_1 = require("./directus");
const sdk_1 = require("@directus/sdk");
const redirects_1 = require("../redirects");
/**
 * Page fields configuration for Directus queries
 *
 * This defines the complete field structure for pages including:
 * - Basic page metadata (title, id)
 * - SEO fields for search engine optimization
 * - Complex nested content blocks (hero, gallery, pricing, forms, etc.)
 * - All nested relationships and dynamic content fields
 */
const pageFields = [
    'title',
    'seo',
    'id',
    {
        blocks: [
            'id',
            'background',
            'collection',
            'item',
            'sort',
            'hide_block',
            {
                item: {
                    block_richtext: ['id', 'tagline', 'headline', 'content', 'alignment'],
                    block_gallery: ['id', 'tagline', 'headline', { items: ['id', 'directus_file', 'sort'] }],
                    block_pricing: [
                        'id',
                        'tagline',
                        'headline',
                        {
                            pricing_cards: [
                                'id',
                                'title',
                                'description',
                                'price',
                                'badge',
                                'features',
                                'is_highlighted',
                                {
                                    button: ['id', 'label', 'variant', 'url', 'type', { page: ['permalink'] }, { post: ['slug'] }],
                                },
                            ],
                        },
                    ],
                    block_hero: [
                        'id',
                        'tagline',
                        'headline',
                        'description',
                        'layout',
                        'image',
                        {
                            button_group: [
                                'id',
                                {
                                    buttons: ['id', 'label', 'variant', 'url', 'type', { page: ['permalink'] }, { post: ['slug'] }],
                                },
                            ],
                        },
                    ],
                    block_posts: ['id', 'tagline', 'headline', 'collection', 'limit'],
                    block_form: [
                        'id',
                        'tagline',
                        'headline',
                        {
                            form: [
                                'id',
                                'title',
                                'submit_label',
                                'success_message',
                                'on_success',
                                'success_redirect_url',
                                'is_active',
                                {
                                    fields: [
                                        'id',
                                        'name',
                                        'type',
                                        'label',
                                        'placeholder',
                                        'help',
                                        'validation',
                                        'width',
                                        'choices',
                                        'required',
                                        'sort',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
        ],
    },
];
/**
 * Fetches page data by permalink, including all nested blocks and dynamically fetching blog posts if required.
 */
const fetchPageData = async (permalink, postPage = 1, token, preview) => {
    const { directus } = (0, directus_1.useDirectus)();
    try {
        const pageData = (await directus.request((0, sdk_1.withToken)(token, (0, sdk_1.readItems)('pages', {
            filter: preview && token
                ? { permalink: { _eq: permalink } }
                : { permalink: { _eq: permalink }, status: { _eq: 'published' } },
            limit: 1,
            fields: pageFields,
            deep: {
                blocks: { _sort: ['sort'], _filter: { hide_block: { _neq: true } } },
            },
        }))));
        if (!pageData.length) {
            throw new Error('Page not found');
        }
        const page = pageData[0];
        // Dynamic Content Enhancement:
        // Some blocks need additional data fetched at runtime
        // This is where we enhance static block data with dynamic content
        if (Array.isArray(page.blocks)) {
            for (const block of page.blocks) {
                // Handle dynamic posts blocks - these blocks display a list of posts
                // The posts are fetched dynamically based on the block's configuration
                if (block.collection === 'block_posts' &&
                    block.item &&
                    typeof block.item !== 'string' &&
                    'collection' in block.item &&
                    block.item.collection === 'posts') {
                    const blockPost = block.item;
                    const limit = blockPost.limit ?? 6; // Default to 6 posts if no limit specified
                    // Fetch the actual posts data for this block
                    // Always fetch published posts only (no preview mode for dynamic content)
                    const posts = await directus.request((0, sdk_1.readItems)('posts', {
                        fields: ['id', 'title', 'description', 'slug', 'image', 'published_at'],
                        filter: { status: { _eq: 'published' } },
                        sort: ['-published_at'],
                        limit,
                        page: postPage,
                    }));
                    // Attach the fetched posts to the block for frontend rendering
                    block.item.posts = posts;
                }
            }
        }
        return page;
    }
    catch (error) {
        console.error('Error fetching page data:', error);
        throw new Error('Failed to fetch page data');
    }
};
exports.fetchPageData = fetchPageData;
/**
 * Fetches page data by id and version
 */
const fetchPageDataById = async (id, version, token) => {
    if (!id || id.trim() === '') {
        throw new Error('Invalid id: id must be a non-empty string');
    }
    if (!version || version.trim() === '') {
        throw new Error('Invalid version: version must be a non-empty string');
    }
    const { directus } = (0, directus_1.useDirectus)();
    try {
        return (await directus.request((0, sdk_1.withToken)(token, (0, sdk_1.readItem)('pages', id, {
            version,
            fields: pageFields,
            deep: {
                blocks: { _sort: ['sort'], _filter: { hide_block: { _neq: true } } },
            },
        }))));
    }
    catch (error) {
        console.error('Error fetching versioned page:', error);
        throw new Error('Failed to fetch versioned page');
    }
};
exports.fetchPageDataById = fetchPageDataById;
/**
 * Helper function to get page ID by permalink
 */
const getPageIdByPermalink = async (permalink, token) => {
    if (!permalink || permalink.trim() === '') {
        throw new Error('Invalid permalink: permalink must be a non-empty string');
    }
    const { directus } = (0, directus_1.useDirectus)();
    try {
        const pageData = (await directus.request((0, sdk_1.withToken)(token, (0, sdk_1.readItems)('pages', {
            filter: { permalink: { _eq: permalink } },
            limit: 1,
            fields: ['id'],
        }))));
        return pageData.length > 0 ? pageData[0].id : null;
    }
    catch (error) {
        console.error('Error getting page ID:', error);
        return null;
    }
};
exports.getPageIdByPermalink = getPageIdByPermalink;
/**
 * Helper function to get post ID by slug
 */
const getPostIdBySlug = async (slug, token) => {
    if (!slug || slug.trim() === '') {
        throw new Error('Invalid slug: slug must be a non-empty string');
    }
    const { directus } = (0, directus_1.useDirectus)();
    try {
        const postData = (await directus.request((0, sdk_1.withToken)(token, (0, sdk_1.readItems)('posts', {
            filter: { slug: { _eq: slug } },
            limit: 1,
            fields: ['id'],
        }))));
        return postData.length > 0 ? postData[0].id : null;
    }
    catch (error) {
        console.error('Error getting post ID:', error);
        return null;
    }
};
exports.getPostIdBySlug = getPostIdBySlug;
/**
 * Fetches a single blog post by ID and version
 */
const fetchPostByIdAndVersion = async (id, version, slug, token) => {
    if (!id || id.trim() === '') {
        throw new Error('Invalid id: id must be a non-empty string');
    }
    if (!version || version.trim() === '') {
        throw new Error('Invalid version: version must be a non-empty string');
    }
    if (!slug || slug.trim() === '') {
        throw new Error('Invalid slug: slug must be a non-empty string');
    }
    const { directus } = (0, directus_1.useDirectus)();
    try {
        const [postData, relatedPosts] = await Promise.all([
            directus.request((0, sdk_1.withToken)(token, (0, sdk_1.readItem)('posts', id, {
                version,
                fields: [
                    'id',
                    'title',
                    'content',
                    'status',
                    'published_at',
                    'image',
                    'description',
                    'slug',
                    'seo',
                    {
                        author: ['id', 'first_name', 'last_name', 'avatar'],
                    },
                ],
            }))),
            directus.request((0, sdk_1.readItems)('posts', {
                filter: { slug: { _neq: slug }, status: { _eq: 'published' } },
                limit: 2,
                fields: ['id', 'title', 'slug', 'image'],
            })),
        ]);
        return { post: postData, relatedPosts: relatedPosts };
    }
    catch (error) {
        console.error('Error fetching versioned post:', error);
        throw new Error('Failed to fetch versioned post');
    }
};
exports.fetchPostByIdAndVersion = fetchPostByIdAndVersion;
/**
 * Fetches global site data, header navigation, and footer navigation.
 */
const fetchSiteData = async () => {
    const { directus } = (0, directus_1.useDirectus)();
    try {
        const [globals, headerNavigation, footerNavigation] = await Promise.all([
            directus.request((0, sdk_1.readSingleton)('globals', {
                fields: ['id', 'title', 'description', 'logo', 'logo_dark_mode', 'social_links', 'accent_color', 'favicon'],
            })),
            directus.request((0, sdk_1.readItem)('navigation', 'main', {
                fields: [
                    'id',
                    'title',
                    {
                        items: [
                            'id',
                            'title',
                            {
                                page: ['permalink'],
                                children: ['id', 'title', 'url', { page: ['permalink'] }],
                            },
                        ],
                    },
                ],
                deep: { items: { _sort: ['sort'] } },
            })),
            directus.request((0, sdk_1.readItem)('navigation', 'footer', {
                fields: [
                    'id',
                    'title',
                    {
                        items: [
                            'id',
                            'title',
                            {
                                page: ['permalink'],
                                children: ['id', 'title', 'url', { page: ['permalink'] }],
                            },
                        ],
                    },
                ],
            })),
        ]);
        return { globals, headerNavigation, footerNavigation };
    }
    catch (error) {
        console.error('Error fetching site data:', error);
        throw new Error('Failed to fetch site data');
    }
};
exports.fetchSiteData = fetchSiteData;
/**
 * Fetches a single blog post by slug and related blog posts excluding the given ID. Handles live preview mode.
 */
const fetchPostBySlug = async (slug, options) => {
    const { directus } = (0, directus_1.useDirectus)();
    const { draft, token } = options || {};
    try {
        const filter = token || draft ? { slug: { _eq: slug } } : { slug: { _eq: slug }, status: { _eq: 'published' } };
        const [posts, relatedPosts] = await Promise.all([
            directus.request((0, sdk_1.withToken)(token, (0, sdk_1.readItems)('posts', {
                filter,
                limit: 1,
                fields: [
                    'id',
                    'title',
                    'content',
                    'status',
                    'published_at',
                    'image',
                    'description',
                    'slug',
                    'seo',
                    {
                        author: ['id', 'first_name', 'last_name', 'avatar'],
                    },
                ],
            }))),
            directus.request((0, sdk_1.withToken)(token, (0, sdk_1.readItems)('posts', {
                filter: { slug: { _neq: slug }, status: { _eq: 'published' } },
                limit: 2,
                fields: ['id', 'title', 'slug', 'image'],
            }))),
        ]);
        const post = posts.length > 0 ? posts[0] : null;
        return { post, relatedPosts };
    }
    catch (error) {
        console.error('Error in fetchPostBySlug:', error);
        throw new Error('Failed to fetch blog post and related posts');
    }
};
exports.fetchPostBySlug = fetchPostBySlug;
/**
 * Fetches paginated blog posts.
 */
const fetchPaginatedPosts = async (limit, page) => {
    const { directus } = (0, directus_1.useDirectus)();
    try {
        const response = (await directus.request((0, sdk_1.readItems)('posts', {
            limit,
            page,
            sort: ['-published_at'],
            fields: ['id', 'title', 'description', 'slug', 'image'],
            filter: { status: { _eq: 'published' } },
        })));
        return response;
    }
    catch (error) {
        console.error('Error fetching paginated posts:', error);
        throw new Error('Failed to fetch paginated posts');
    }
};
exports.fetchPaginatedPosts = fetchPaginatedPosts;
/**
 * Fetches the total number of published blog posts.
 */
const fetchTotalPostCount = async () => {
    const { directus } = (0, directus_1.useDirectus)();
    try {
        const response = await directus.request((0, sdk_1.aggregate)('posts', {
            aggregate: { count: '*' },
            filter: { status: { _eq: 'published' } },
        }));
        return Number(response[0]?.count) || 0;
    }
    catch (error) {
        console.error('Error fetching total post count:', error);
        return 0;
    }
};
exports.fetchTotalPostCount = fetchTotalPostCount;
async function fetchRedirects() {
    const { directus } = (0, directus_1.useDirectus)();
    const response = await directus.request((0, sdk_1.readItems)('redirects', {
        filter: {
            _and: [
                {
                    url_from: { _nnull: true },
                },
                {
                    url_to: { _nnull: true },
                },
            ],
        },
        fields: ['url_from', 'url_to', 'response_code'],
    }));
    return response || [];
}
//# sourceMappingURL=fetchers.js.map