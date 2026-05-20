"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const radio_group_1 = require("@/components/ui/radio-group");
const react_hook_form_1 = require("react-hook-form");
const RadioGroupField = ({ name, options, form }) => ((0, jsx_runtime_1.jsx)(radio_group_1.RadioGroup, { value: form.watch(name), onValueChange: (value) => form.setValue(name, value), className: "", children: options.map((option) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(radio_group_1.RadioGroupItem, { id: `${name}-${option.value}`, value: option.value }), (0, jsx_runtime_1.jsx)("label", { htmlFor: `${name}-${option.value}`, className: "text-sm", children: option.text })] }, option.value))) }));
exports.default = RadioGroupField;
//# sourceMappingURL=RadioGroupField.js.map