export default function BlogPostPage({ params, searchParams, }: {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{
        id?: string;
        version?: string;
        preview?: string;
        token?: string;
    }>;
}): Promise<any>;
//# sourceMappingURL=page.d.ts.map