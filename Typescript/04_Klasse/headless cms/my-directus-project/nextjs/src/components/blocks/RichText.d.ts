interface RichTextProps {
    data: {
        id: string;
        tagline?: string;
        headline?: string;
        content?: string;
        alignment?: 'left' | 'center' | 'right';
    };
    className?: string;
}
declare const RichText: ({ data, className }: RichTextProps) => any;
export default RichText;
//# sourceMappingURL=RichText.d.ts.map