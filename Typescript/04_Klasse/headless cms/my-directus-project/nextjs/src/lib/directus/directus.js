"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDirectus = void 0;
const sdk_1 = require("@directus/sdk");
const p_queue_1 = __importDefault(require("p-queue"));
// Helper for retrying fetch requests
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fetchRetry = async (count, ...args) => {
    const response = await fetch(...args);
    if (count > 2 || response.status !== 429)
        return response;
    console.warn(`[429] Too Many Requests (Attempt ${count + 1})`);
    await sleep(500);
    return fetchRetry(count + 1, ...args);
};
// Queue for rate-limited requests
const queue = new p_queue_1.default({ intervalCap: 10, interval: 500, carryoverConcurrencyCount: true });
const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const directus = (0, sdk_1.createDirectus)(directusUrl, {
    globals: {
        fetch: (...args) => queue.add(() => fetchRetry(0, ...args)),
    },
}).with((0, sdk_1.rest)());
const useDirectus = () => ({
    directus: directus,
    readItems: sdk_1.readItems,
    readItem: sdk_1.readItem,
    readSingleton: sdk_1.readSingleton,
    readUser: sdk_1.readUser,
    createItem: sdk_1.createItem,
    uploadFiles: sdk_1.uploadFiles,
    withToken: sdk_1.withToken,
});
exports.useDirectus = useDirectus;
//# sourceMappingURL=directus.js.map