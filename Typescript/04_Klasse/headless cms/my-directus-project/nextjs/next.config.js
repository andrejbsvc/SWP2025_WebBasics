"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bundle_analyzer_1 = __importDefault(require("@next/bundle-analyzer"));
const redirects_1 = require("./src/lib/redirects");
const withBundleAnalyzer = (0, bundle_analyzer_1.default)({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true',
});
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    frame-src *;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src *;
    connect-src *;
    font-src 'self' data:;
    frame-ancestors 'self' http://localhost:3000 ${process.env.NEXT_PUBLIC_DIRECTUS_URL};
`;
const nextConfig = {
    webpack: (config) => {
        config.cache = false;
        return config;
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_DIRECTUS_URL?.split('//')[1] || '',
                pathname: '/assets/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8055',
                pathname: '/assets/**',
            },
        ],
    },
    env: {
        DIRECTUS_PUBLIC_TOKEN: process.env.DIRECTUS_PUBLIC_TOKEN,
        DIRECTUS_FORM_TOKEN: process.env.DIRECTUS_FORM_TOKEN,
        DRAFT_MODE_SECRET: process.env.DRAFT_MODE_SECRET,
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: ContentSecurityPolicy.replace(/\n/g, '').trim(),
                    },
                ],
            },
        ];
    },
    async redirects() {
        const redirects = await (0, redirects_1.generateRedirects)();
        return redirects;
    },
};
exports.default = withBundleAnalyzer(nextConfig);
//# sourceMappingURL=next.config.js.map