"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const checkbox_1 = require("@/components/ui/checkbox");
const react_hook_form_1 = require("react-hook-form");
const CheckboxGroupField = ({ name, options, form }) => {
    const currentValues = form.watch(name) || [];
    const toggleValue = (value, checked) => {
        const updatedValues = checked ? [...currentValues, value] : currentValues.filter((v) => v !== value);
        form.setValue(name, updatedValues);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: options.map((option) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { id: `${name}-${option.value}`, checked: currentValues.includes(option.value), onCheckedChange: (checked) => toggleValue(option.value, !!checked) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: `${name}-${option.value}`, className: "text-sm", children: option.text })] }, option.value))) }));
};
exports.default = CheckboxGroupField;
//# sourceMappingURL=CheckboxGroupField.js.map