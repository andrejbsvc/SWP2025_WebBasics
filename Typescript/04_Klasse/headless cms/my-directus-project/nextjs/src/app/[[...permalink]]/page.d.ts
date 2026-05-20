export declare function generateMetadata({ params, searchParams, }: {
    params: Promise<{
        permalink?: string[];
    }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<{
    title: string;
    description: string;
    openGraph?: never;
} | {
    title: any;
    description: any;
    openGraph: {
        title: any;
        description: any;
        url: string;
        type: string;
    };
} | undefined>;
export default function Page({ params, searchParams, }: {
    params: Promise<{
        permalink?: string[];
    }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<any>;
//# sourceMappingURL=page.d.ts.map