import { FormField } from '@/types/directus-schema';
interface FormBlockProps {
    data: {
        id: string;
        tagline: string | null;
        headline: string | null;
        form: {
            id: string;
            on_success?: 'redirect' | 'message' | null;
            sort?: number | null;
            submit_label?: string;
            success_message?: string | null;
            title?: string | null;
            success_redirect_url?: string | null;
            is_active?: boolean | null;
            fields: FormField[];
        };
    };
    itemId?: string;
    blockId?: string;
}
declare const FormBlock: ({ data }: FormBlockProps) => any;
export default FormBlock;
//# sourceMappingURL=Form.d.ts.map