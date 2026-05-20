"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitForm = void 0;
const directus_1 = require("./directus");
const submitForm = async (formId, fields, data) => {
    const { directus, uploadFiles, createItem, withToken } = (0, directus_1.useDirectus)();
    const TOKEN = process.env.DIRECTUS_FORM_TOKEN;
    if (!TOKEN) {
        throw new Error('DIRECTUS_FORM_TOKEN is not defined. Check your .env file.');
    }
    try {
        const submissionValues = [];
        for (const field of fields) {
            const value = data[field.name];
            if (value === undefined || value === null)
                continue;
            if (field.type === 'file' && value instanceof File) {
                const formData = new FormData();
                formData.append('file', value);
                const uploadedFile = await directus.request(withToken(TOKEN, uploadFiles(formData)));
                if (uploadedFile && 'id' in uploadedFile) {
                    submissionValues.push({
                        field: field.id,
                        file: uploadedFile.id,
                    });
                }
            }
            else {
                submissionValues.push({
                    field: field.id,
                    value: value.toString(),
                });
            }
        }
        const payload = {
            form: formId,
            values: submissionValues,
        };
        await directus.request(withToken(TOKEN, createItem('form_submissions', payload)));
    }
    catch (error) {
        console.error('Error submitting form:', error);
        throw new Error('Failed to submit form');
    }
};
exports.submitForm = submitForm;
//# sourceMappingURL=forms.js.map