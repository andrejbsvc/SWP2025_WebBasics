import { UseFormReturn } from 'react-hook-form';
interface CheckboxGroupFieldProps {
    name: string;
    options: {
        value: string;
        text: string;
    }[];
    form: UseFormReturn<any>;
}
declare const CheckboxGroupField: ({ name, options, form }: CheckboxGroupFieldProps) => any;
export default CheckboxGroupField;
//# sourceMappingURL=CheckboxGroupField.d.ts.map