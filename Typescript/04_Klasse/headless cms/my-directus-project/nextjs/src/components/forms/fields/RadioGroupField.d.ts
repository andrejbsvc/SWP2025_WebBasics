import { UseFormReturn } from 'react-hook-form';
interface RadioGroupFieldProps {
    name: string;
    options: {
        value: string;
        text: string;
    }[];
    form: UseFormReturn;
}
declare const RadioGroupField: ({ name, options, form }: RadioGroupFieldProps) => any;
export default RadioGroupField;
//# sourceMappingURL=RadioGroupField.d.ts.map