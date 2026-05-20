"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildZodSchema = void 0;
const zod_1 = require("zod");
const buildZodSchema = (fields) => {
    const schema = {};
    fields.forEach((field) => {
        let fieldSchema;
        switch (field.type) {
            case 'checkbox':
                fieldSchema = zod_1.z.boolean().default(false);
                break;
            case 'checkbox_group':
                fieldSchema = zod_1.z.array(zod_1.z.string()).default([]);
                break;
            case 'radio':
                fieldSchema = zod_1.z.string();
                break;
            case 'file':
                if (field.required) {
                    fieldSchema = zod_1.z.instanceof(File, {
                        message: `${field.label || field.name} is required`,
                    });
                }
                else {
                    fieldSchema = zod_1.z
                        .instanceof(File, {
                        message: `${field.label || field.name} must be a valid file if provided`,
                    })
                        .or(zod_1.z.undefined());
                }
                break;
            default:
                fieldSchema = zod_1.z.string();
                break;
        }
        if (field.validation) {
            const rules = field.validation.split('|');
            rules.forEach((rule) => {
                const [ruleName, ruleValue] = rule.split(':');
                const normalizedRule = ruleName.toLowerCase();
                if (fieldSchema instanceof zod_1.z.ZodString) {
                    switch (normalizedRule) {
                        case 'email':
                            fieldSchema = fieldSchema.email(`${field.label || field.name} must be a valid email`);
                            break;
                        case 'url':
                            fieldSchema = fieldSchema.url(`${field.label || field.name} must be a valid URL`);
                            break;
                        case 'min': {
                            const min = parseInt(ruleValue, 10);
                            fieldSchema = fieldSchema.min(min, `${field.label || field.name} must be at least ${min} characters`);
                            break;
                        }
                        case 'max': {
                            const max = parseInt(ruleValue, 10);
                            fieldSchema = fieldSchema.max(max, `${field.label || field.name} must be at most ${max} characters`);
                            break;
                        }
                        case 'length': {
                            const length = parseInt(ruleValue, 10);
                            fieldSchema = fieldSchema.length(length, `${field.label || field.name} must be exactly ${length} characters`);
                            break;
                        }
                        default:
                            console.warn(`Unknown validation rule: ${ruleName}`);
                    }
                }
            });
        }
        if (field.required) {
            if (fieldSchema instanceof zod_1.z.ZodString) {
                fieldSchema = fieldSchema.nonempty(`${field.label || field.name} is required`);
            }
        }
        else {
            // Allow empty strings or undefined for optional fields
            fieldSchema = fieldSchema.or(zod_1.z.literal('')).or(zod_1.z.undefined());
        }
        if (field.name) {
            schema[field.name] = fieldSchema;
        }
    });
    return zod_1.z.object(schema);
};
exports.buildZodSchema = buildZodSchema;
//# sourceMappingURL=zodSchemaBuilder.js.map