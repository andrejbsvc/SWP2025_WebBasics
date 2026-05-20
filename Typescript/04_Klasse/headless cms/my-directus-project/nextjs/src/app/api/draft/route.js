"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const headers_1 = require("next/headers");
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const token = searchParams.get('token');
    if (!token || token !== process.env.DRAFT_MODE_SECRET) {
        return new Response('Invalid token', { status: 401 });
    }
    if (!slug) {
        return new Response('Missing slug', { status: 400 });
    }
    (await (0, headers_1.draftMode)()).enable();
    return new Response(null, {
        status: 307,
        headers: {
            Location: `/blog/${slug}?preview=true&token=${token}`,
        },
    });
}
//# sourceMappingURL=route.js.map