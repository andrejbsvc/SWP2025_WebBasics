"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const select_1 = require("@/components/ui/select");
const react_hook_form_1 = require("react-hook-form");
const SelectField = ({ name, options, placeholder, form }) => {
    return ((0, jsx_runtime_1.jsxs)(select_1.Select, { onValueChange: (value) => form.setValue(name, value), value: form.getValues(name), children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: placeholder || 'Select an option' }) }), (0, jsx_runtime_1.jsx)(select_1.SelectContent, { children: options.map((option) => ((0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: option.value, children: option.text }, option.value))) })] }));
};
exports.default = SelectField;
//# sourceMappingURL=SelectField.js.map