"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const checkbox_1 = require("@/components/ui/checkbox");
const react_hook_form_1 = require("react-hook-form");
const CheckboxField = ({ name, label, form }) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { id: name, checked: form.watch(name), onCheckedChange: (checked) => form.setValue(name, checked) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: name, className: "text-sm", children: label })] }));
exports.default = CheckboxField;
//# sourceMappingURL=CheckboxField.js.map