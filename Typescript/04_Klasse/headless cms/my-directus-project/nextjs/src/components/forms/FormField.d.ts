import type { FormField as FormFieldType } from '@/types/directus-schema';
import { UseFormReturn } from 'react-hook-form';
interface FieldProps {
    field: FormFieldType;
    form: UseFormReturn;
}
declare const Field: ({ field, form }: FieldProps) => any;
export default Field;
//# sourceMappingURL=FormField.d.ts.map