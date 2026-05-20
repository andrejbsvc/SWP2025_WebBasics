'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const zod_1 = require("@hookform/resolvers/zod");
const Button_1 = __importDefault(require("@/components/blocks/Button"));
const form_1 = require("@/components/ui/form");
const FormField_1 = __importDefault(require("./FormField"));
const zodSchemaBuilder_1 = require("@/lib/zodSchemaBuilder");
const visual_editing_1 = require("@directus/visual-editing");
const DynamicForm = ({ fields, onSubmit, submitLabel, id }) => {
    const sortedFields = [...fields].sort((a, b) => (a.sort || 0) - (b.sort || 0));
    const formSchema = (0, zodSchemaBuilder_1.buildZodSchema)(fields);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: fields.reduce((defaults, field) => {
            if (!field.name)
                return defaults;
            switch (field.type) {
                case 'checkbox':
                    defaults[field.name] = false;
                    break;
                case 'checkbox_group':
                    defaults[field.name] = [];
                    break;
                case 'radio':
                    defaults[field.name] = '';
                    break;
                default:
                    defaults[field.name] = '';
                    break;
            }
            return defaults;
        }, {}),
    });
    return ((0, jsx_runtime_1.jsx)(form_1.Form, { ...form, children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-wrap gap-4", "data-directus": (0, visual_editing_1.setAttr)({
                collection: 'forms',
                item: id,
                fields: 'fields',
                mode: 'popover',
            }), children: [sortedFields.map((field) => ((0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsx)(FormField_1.default, { field: field, form: form }, field.id) }, field.id))), (0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsx)("div", { "data-directus": (0, visual_editing_1.setAttr)({
                            collection: 'forms',
                            item: id,
                            fields: 'submit_label',
                            mode: 'popover',
                        }), children: (0, jsx_runtime_1.jsx)(Button_1.default, { type: "submit", label: submitLabel, icon: "arrow", iconPosition: "right", id: `submit-${id}` }) }) })] }) }));
};
exports.default = DynamicForm;
//# sourceMappingURL=DynamicForm.js.map