interface HeroProps {
    data: {
        id: string;
        tagline: string;
        headline: string;
        description: string;
        layout: 'image_left' | 'image_center' | 'image_right';
        image: string;
        button_group?: {
            id: string;
            buttons: Array<{
                id: string;
                label: string | null;
                variant: string | null;
                url: string | null;
                type: 'url' | 'page' | 'post';
                pagePermalink?: string | null;
                postSlug?: string | null;
            }>;
        };
    };
}
export default function Hero({ data }: HeroProps): any;
export {};
//# sourceMappingURL=Hero.d.ts.map