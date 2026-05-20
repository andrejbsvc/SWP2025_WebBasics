"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMetadata = generateMetadata;
exports.default = Page;
const jsx_runtime_1 = require("react/jsx-runtime");
const fetchers_1 = require("@/lib/directus/fetchers");
const directus_schema_1 = require("@/types/directus-schema");
const navigation_1 = require("next/navigation");
const PageClient_1 = __importDefault(require("./PageClient"));
async function generateMetadata({ params, searchParams, }) {
    const { permalink } = await params;
    const searchParamsResolved = await searchParams;
    const permalinkSegments = permalink || [];
    const resolvedPermalink = `/${permalinkSegments.join('/')}`.replace(/\/$/, '') || '/';
    const preview = searchParamsResolved.preview === 'true';
    const version = typeof searchParamsResolved.version === 'string' ? searchParamsResolved.version : '';
    // Skip metadata generation for preview/versioned content
    if (preview || version) {
        return {
            title: 'Preview Mode',
            description: 'Content preview',
        };
    }
    try {
        const page = await (0, fetchers_1.fetchPageData)(resolvedPermalink);
        if (!page)
            return;
        return {
            title: page.seo?.title ?? page.title ?? '',
            description: page.seo?.meta_description ?? '',
            openGraph: {
                title: page.seo?.title ?? page.title ?? '',
                description: page.seo?.meta_description ?? '',
                url: `${process.env.NEXT_PUBLIC_SITE_URL}${resolvedPermalink}`,
                type: 'website',
            },
        };
    }
    catch (error) {
        console.error('Error loading page metadata:', error);
        return;
    }
}
async function Page({ params, searchParams, }) {
    const { permalink } = await params;
    const searchParamsResolved = await searchParams;
    const permalinkSegments = permalink || [];
    const resolvedPermalink = `/${permalinkSegments.join('/')}`.replace(/\/$/, '') || '/';
    const id = typeof searchParamsResolved.id === 'string' ? searchParamsResolved.id : '';
    const version = typeof searchParamsResolved.version === 'string' ? searchParamsResolved.version : '';
    const preview = searchParamsResolved.preview === 'true';
    const token = typeof searchParamsResolved.token === 'string' ? searchParamsResolved.token : '';
    // Live preview adds version = main which is not required when fetching the main version.
    const fixedVersion = version != 'main' ? version : undefined;
    try {
        let page;
        // Version-specific content handling:
        // When a version is requested (e.g., "draft", "published"), we need to:
        // 1. Look up the page ID by permalink if not provided directly
        // 2. Fetch the specific version of that page
        // 3. Fail gracefully if the page doesn't exist for that version
        if (fixedVersion && id) {
            // We have both ID and version - fetch the specific version
            page = await (0, fetchers_1.fetchPageDataById)(id, fixedVersion, token || undefined);
        }
        else if (fixedVersion && !id) {
            // We have version but no ID - look up the page ID first
            const pageId = await (0, fetchers_1.getPageIdByPermalink)(resolvedPermalink, token || undefined);
            if (!pageId) {
                (0, navigation_1.notFound)();
            }
            page = await (0, fetchers_1.fetchPageDataById)(pageId, fixedVersion, token || undefined);
        }
        else {
            // Regular page fetch (published or draft with preview)
            page = await (0, fetchers_1.fetchPageData)(resolvedPermalink, 1, token || undefined, preview);
        }
        if (!page || !page.blocks) {
            (0, navigation_1.notFound)();
        }
        const blocks = page.blocks || [];
        return (0, jsx_runtime_1.jsx)(PageClient_1.default, { sections: blocks, pageId: page.id });
    }
    catch (error) {
        console.error('Error loading page:', error);
        (0, navigation_1.notFound)();
    }
}
//# sourceMappingURL=page.js.map