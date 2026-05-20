'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const DynamicForm_1 = __importDefault(require("./DynamicForm"));
const forms_1 = require("@/lib/directus/forms");
const directus_schema_1 = require("@/types/directus-schema");
const utils_1 = require("@/lib/utils");
const FormBuilder = ({ form, className }) => {
    const [isSubmitted, setIsSubmitted] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    if (!form.is_active)
        return null;
    const handleSubmit = async (data) => {
        setError(null);
        try {
            const fieldsWithNames = form.fields.map((field) => ({
                id: field.id,
                name: field.name || '',
                type: field.type || '',
            }));
            await (0, forms_1.submitForm)(form.id, fieldsWithNames, data);
            if (form.on_success === 'redirect' && form.success_redirect_url) {
                window.location.href = form.success_redirect_url;
            }
            else {
                setIsSubmitted(true);
            }
        }
        catch (err) {
            console.error('Error submitting form:', err);
            setError('Failed to submit the form. Please try again later.');
        }
    };
    if (isSubmitted) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center space-y-4 p-6 text-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle, { className: "size-12 text-green-500" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: form.success_message || 'Your form has been submitted successfully.' })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)('space-y-6 border border-input p-8 rounded-lg', className), children: [form.title && (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-4", children: form.title }), error && ((0, jsx_runtime_1.jsxs)("div", { className: "p-4 text-red-500 bg-red-100 rounded-md", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Error:" }), " ", error] })), (0, jsx_runtime_1.jsx)(DynamicForm_1.default, { fields: form.fields, onSubmit: handleSubmit, submitLabel: form.submit_label || 'Submit', id: form.id })] }));
};
exports.default = FormBuilder;
//# sourceMappingURL=FormBuilder.js.map