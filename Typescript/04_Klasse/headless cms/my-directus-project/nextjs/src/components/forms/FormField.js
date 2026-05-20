"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const form_1 = require("@/components/ui/form");
const input_1 = require("@/components/ui/input");
const textarea_1 = require("@/components/ui/textarea");
const tooltip_1 = require("@/components/ui/tooltip");
const lucide_react_1 = require("lucide-react");
const CheckboxField_1 = __importDefault(require("./fields/CheckboxField"));
const CheckboxGroupField_1 = __importDefault(require("./fields/CheckboxGroupField"));
const RadioGroupField_1 = __importDefault(require("./fields/RadioGroupField"));
const SelectField_1 = __importDefault(require("./fields/SelectField"));
const FileUploadField_1 = __importDefault(require("./fields/FileUploadField"));
const react_hook_form_1 = require("react-hook-form");
const utils_1 = require("@/lib/utils");
const Field = ({ field, form }) => {
    if (field.type === 'hidden')
        return null;
    const getFieldElement = () => {
        switch (field.type) {
            case 'text':
                return (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: field.placeholder || '', ...form.register(field.name) });
            case 'textarea':
                return (0, jsx_runtime_1.jsx)(textarea_1.Textarea, { placeholder: field.placeholder || '', ...form.register(field.name) });
            case 'checkbox':
                return (0, jsx_runtime_1.jsx)(CheckboxField_1.default, { name: field.name, label: field.label, form: form });
            case 'checkbox_group':
                return (0, jsx_runtime_1.jsx)(CheckboxGroupField_1.default, { name: field.name, options: field.choices || [], form: form });
            case 'radio':
                return (0, jsx_runtime_1.jsx)(RadioGroupField_1.default, { name: field.name, options: field.choices || [], form: form });
            case 'select':
                return ((0, jsx_runtime_1.jsx)(SelectField_1.default, { name: field.name, placeholder: field.placeholder, options: field.choices || [], form: form }));
            case 'file':
                return (0, jsx_runtime_1.jsx)(FileUploadField_1.default, { name: field.name, form: form });
            default:
                return null;
        }
    };
    const fieldElement = getFieldElement();
    if (!fieldElement)
        return null;
    const widthClass = field.width
        ? {
            100: 'flex-[100%]',
            50: 'flex-[calc(50%-1rem)]',
            67: 'flex-[calc(67%-1rem)]',
            33: 'flex-[calc(33%-1rem)]',
        }[field.width] || 'flex-[100%]'
        : 'flex-[100%]';
    return ((0, jsx_runtime_1.jsx)("div", { className: `flex-shrink-0 ${widthClass}`, children: (0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: field.name, render: ({ field: formField }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsxs)(form_1.FormLabel, { htmlFor: field.name, className: (0, utils_1.cn)('text-sm font-medium flex items-center justify-between', field.type === 'checkbox' || field.type === 'radio' ? 'space-x-2' : ''), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-1", children: [field.type !== 'checkbox' && (0, jsx_runtime_1.jsx)("span", { children: field.label }), field.help && ((0, jsx_runtime_1.jsx)(tooltip_1.TooltipProvider, { children: (0, jsx_runtime_1.jsxs)(tooltip_1.Tooltip, { children: [(0, jsx_runtime_1.jsx)(tooltip_1.TooltipTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(lucide_react_1.Info, { className: "size-4 text-gray-500 cursor-pointer" }) }), (0, jsx_runtime_1.jsx)(tooltip_1.TooltipContent, { children: field.help })] }) }))] }), field.required && (0, jsx_runtime_1.jsx)("span", { className: "text-sm text-gray-400", children: "*Required" })] }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: fieldElement }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, { className: "text-red-500 italic text-sm" })] })) }) }));
};
exports.default = Field;
//# sourceMappingURL=FormField.js.map