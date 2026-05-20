interface PricingCardType {
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
}
interface PricingData {
    id: string;
    tagline?: string;
    headline?: string;
    pricing_cards: PricingCardType[];
}
interface PricingProps {
    data: PricingData;
}
declare const Pricing: ({ data }: PricingProps) => any;
export default Pricing;
//# sourceMappingURL=Pricing.d.ts.map