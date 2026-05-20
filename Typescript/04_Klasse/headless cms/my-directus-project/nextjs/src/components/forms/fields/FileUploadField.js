"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const input_1 = require("@/components/ui/input");
const react_hook_form_1 = require("react-hook-form");
const FileUploadField = ({ name, form }) => {
    return ((0, jsx_runtime_1.jsx)(input_1.Input, { type: "file", id: name, onChange: (e) => {
            const file = e.target.files?.[0];
            form.setValue(name, file);
        } }));
};
exports.default = FileUploadField;
//# sourceMappingURL=FileUploadField.js.map