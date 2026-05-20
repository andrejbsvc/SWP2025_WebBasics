import { Page, Post, Redirect } from '@/types/directus-schema';
/**
 * Fetches page data by permalink, including all nested blocks and dynamically fetching blog posts if required.
 */
export declare const fetchPageData: (permalink: string, postPage?: number, token?: string, preview?: boolean) => Promise<any>;
/**
 * Fetches page data by id and version
 */
export declare const fetchPageDataById: (id: string, version?: string, token?: string) => Promise<Page>;
/**
 * Helper function to get page ID by permalink
 */
export declare const getPageIdByPermalink: (permalink: string, token?: string) => Promise<any>;
/**
 * Helper function to get post ID by slug
 */
export declare const getPostIdBySlug: (slug: string, token?: string) => Promise<any>;
/**
 * Fetches a single blog post by ID and version
 */
export declare const fetchPostByIdAndVersion: (id: string, version: string, slug: string, token?: string) => Promise<{
    post: Post;
    relatedPosts: Post[];
}>;
/**
 * Fetches global site data, header navigation, and footer navigation.
 */
export declare const fetchSiteData: () => Promise<{
    globals: any;
    headerNavigation: any;
    footerNavigation: any;
}>;
/**
 * Fetches a single blog post by slug and related blog posts excluding the given ID. Handles live preview mode.
 */
export declare const fetchPostBySlug: (slug: string, options?: {
    draft?: boolean;
    token?: string;
}) => Promise<{
    post: Post | null;
    relatedPosts: Post[];
}>;
/**
 * Fetches paginated blog posts.
 */
export declare const fetchPaginatedPosts: (limit: number, page: number) => Promise<Post[]>;
/**
 * Fetches the total number of published blog posts.
 */
export declare const fetchTotalPostCount: () => Promise<number>;
export declare function fetchRedirects(): Promise<Pick<Redirect, 'url_from' | 'url_to' | 'response_code'>[]>;
//# sourceMappingURL=fetchers.d.ts.map