import { FormField } from '@/types/directus-schema';
interface FormBuilderProps {
    className?: string;
    itemId?: string;
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
}
declare const FormBuilder: ({ form, className }: FormBuilderProps) => any;
export default FormBuilder;
//# sourceMappingURL=FormBuilder.d.ts.map