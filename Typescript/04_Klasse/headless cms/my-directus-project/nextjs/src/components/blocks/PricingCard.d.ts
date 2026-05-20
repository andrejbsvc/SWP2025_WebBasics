export interface PricingCardProps {
    card: {
        id: string;
        title: string;
        description?: string;
        price?: string;
        badge?: string;
        features?: string[];
        button?: {
            id: string;
            label: string | null;
            variant: string | null;
            url: string | null;
        };
        is_highlighted?: boolean;
    };
}
declare const PricingCard: ({ card }: PricingCardProps) => any;
export default PricingCard;
//# sourceMappingURL=PricingCard.d.ts.map