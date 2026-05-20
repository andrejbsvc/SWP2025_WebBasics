"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRedirectError = isRedirectError;
exports.generateRedirects = generateRedirects;
const fetchers_1 = require("./directus/fetchers");
function isRedirectError(error) {
    return typeof error === 'object' && error !== null && 'type' in error && error.type === 'redirect';
}
async function generateRedirects() {
    try {
        const redirects = await (0, fetchers_1.fetchRedirects)();
        return redirects
            .filter((redirect) => typeof redirect.url_from === 'string' &&
            typeof redirect.url_to === 'string' &&
            (redirect.response_code === '301' || redirect.response_code === '302'))
            .map((redirect) => ({
            source: redirect.url_from,
            destination: redirect.url_to,
            permanent: redirect.response_code === '301',
        }));
    }
    catch (error) {
        console.error('Error generating redirects:', error);
        return [];
    }
}
//# sourceMappingURL=redirects.js.map