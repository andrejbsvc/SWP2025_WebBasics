import { UseFormReturn } from 'react-hook-form';
interface SelectFieldProps {
    name: string;
    options: {
        value: string;
        text: string;
    }[];
    placeholder?: string | null;
    form: UseFormReturn;
}
declare const SelectField: ({ name, options, placeholder, form }: SelectFieldProps) => any;
export default SelectField;
//# sourceMappingURL=SelectField.d.ts.map