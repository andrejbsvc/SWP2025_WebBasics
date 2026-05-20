import type { FormField as FormFieldType } from '@/types/directus-schema';
interface DynamicFormProps {
    fields: FormFieldType[];
    onSubmit: (data: Record<string, any>) => void;
    submitLabel: string;
    id: string;
}
declare const DynamicForm: ({ fields, onSubmit, submitLabel, id }: DynamicFormProps) => any;
export default DynamicForm;
//# sourceMappingURL=DynamicForm.d.ts.map