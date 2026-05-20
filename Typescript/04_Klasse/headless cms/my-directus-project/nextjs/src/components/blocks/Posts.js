'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const lucide_react_1 = require("lucide-react");
const Tagline_1 = __importDefault(require("../ui/Tagline"));
const Headline_1 = __importDefault(require("@/components/ui/Headline"));
const DirectusImage_1 = __importDefault(require("@/components/shared/DirectusImage"));
const link_1 = __importDefault(require("next/link"));
const pagination_1 = require("../ui/pagination");
const directus_schema_1 = require("@/types/directus-schema");
const fetchers_1 = require("@/lib/directus/fetchers");
const visual_editing_1 = require("@directus/visual-editing");
const Posts = ({ data }) => {
    const { tagline, headline, posts, limit, id } = data;
    const router = (0, navigation_1.useRouter)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const visiblePages = 5;
    const initialPage = Number(searchParams.get('page')) || 1;
    const perPage = limit || 6;
    const [currentPage, setCurrentPage] = (0, react_1.useState)(initialPage);
    const [paginatedPosts, setPaginatedPosts] = (0, react_1.useState)(currentPage === 1 ? posts || [] : []);
    const [totalPages, setTotalPages] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const fetchTotalPages = async () => {
            try {
                const totalCount = await (0, fetchers_1.fetchTotalPostCount)();
                setTotalPages(Math.ceil(totalCount / perPage));
            }
            catch (error) {
                console.error('Error fetching total post count:', error);
            }
        };
        fetchTotalPages();
    }, [perPage]);
    (0, react_1.useEffect)(() => {
        const fetchPosts = async () => {
            try {
                if (currentPage === 1) {
                    setPaginatedPosts(posts || []);
                    return;
                }
                const response = await (0, fetchers_1.fetchPaginatedPosts)(perPage, currentPage);
                setPaginatedPosts(response || []);
            }
            catch (error) {
                console.error('Error fetching paginated posts:', error);
                setPaginatedPosts([]);
            }
        };
        fetchPosts();
    }, [currentPage, perPage, posts]);
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            router.replace(`?page=${page}`, { scroll: false });
        }
    };
    const generatePagination = () => {
        const pages = [];
        if (totalPages <= visiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }
        else {
            const rangeStart = Math.max(1, currentPage - 2);
            const rangeEnd = Math.min(totalPages, currentPage + 2);
            if (rangeStart > 1)
                pages.push('ellipsis-start');
            for (let i = rangeStart; i <= rangeEnd; i++)
                pages.push(i);
            if (rangeEnd < totalPages)
                pages.push('ellipsis-end');
        }
        return pages;
    };
    const paginationLinks = generatePagination();
    return ((0, jsx_runtime_1.jsxs)("div", { children: [tagline && ((0, jsx_runtime_1.jsx)(Tagline_1.default, { tagline: tagline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_posts',
                    item: id,
                    fields: 'tagline',
                    mode: 'popover',
                }) })), headline && ((0, jsx_runtime_1.jsx)(Headline_1.default, { headline: headline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_posts',
                    item: id,
                    fields: 'headline',
                    mode: 'popover',
                }) })), (0, jsx_runtime_1.jsx)("div", { className: "mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_posts',
                    item: id,
                    fields: ['collection', 'limit'],
                    mode: 'popover',
                }), children: paginatedPosts && paginatedPosts.length > 0 ? (paginatedPosts.map((post) => ((0, jsx_runtime_1.jsxs)(link_1.default, { href: `/blog/${post.slug}`, className: "group block overflow-hidden rounded-lg", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative w-full h-64 rounded-lg overflow-hidden", children: post.image && ((0, jsx_runtime_1.jsx)(DirectusImage_1.default, { uuid: typeof post.image === 'string' ? post.image : post.image?.id, alt: post.title, fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw", className: "w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" })) }), (0, jsx_runtime_1.jsxs)("div", { className: "p-4", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl group-hover:text-accent font-heading transition-colors duration-300", children: post.title }), post.description && (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-foreground mt-2", children: post.description })] })] }, post.id)))) : ((0, jsx_runtime_1.jsx)("p", { className: "text-center text-gray-500", children: "No posts available." })) }), totalPages > 1 && ((0, jsx_runtime_1.jsx)(pagination_1.Pagination, { children: (0, jsx_runtime_1.jsxs)(pagination_1.PaginationContent, { children: [totalPages > visiblePages && currentPage > 1 && ((0, jsx_runtime_1.jsx)(pagination_1.PaginationItem, { children: (0, jsx_runtime_1.jsx)(pagination_1.PaginationLink, { href: "#", onClick: (e) => {
                                    e.preventDefault();
                                    handlePageChange(1);
                                }, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronFirst, { className: "size-5" }) }) })), totalPages > visiblePages && currentPage > 1 && ((0, jsx_runtime_1.jsx)(pagination_1.PaginationItem, { children: (0, jsx_runtime_1.jsx)(pagination_1.PaginationPrevious, { href: "#", onClick: (e) => {
                                    e.preventDefault();
                                    handlePageChange(currentPage - 1);
                                } }) })), paginationLinks.map((page, index) => typeof page === 'number' ? ((0, jsx_runtime_1.jsx)(pagination_1.PaginationItem, { children: (0, jsx_runtime_1.jsx)(pagination_1.PaginationLink, { href: "#", isActive: currentPage === page, onClick: (e) => {
                                    e.preventDefault();
                                    handlePageChange(page);
                                }, children: page }) }, index)) : ((0, jsx_runtime_1.jsx)(pagination_1.PaginationItem, { children: (0, jsx_runtime_1.jsx)(pagination_1.PaginationEllipsis, {}) }, index))), totalPages > visiblePages && currentPage < totalPages && ((0, jsx_runtime_1.jsx)(pagination_1.PaginationItem, { children: (0, jsx_runtime_1.jsx)(pagination_1.PaginationNext, { href: "#", onClick: (e) => {
                                    e.preventDefault();
                                    handlePageChange(currentPage + 1);
                                } }) })), totalPages > visiblePages && currentPage < totalPages && ((0, jsx_runtime_1.jsx)(pagination_1.PaginationItem, { children: (0, jsx_runtime_1.jsx)(pagination_1.PaginationLink, { href: "#", onClick: (e) => {
                                    e.preventDefault();
                                    handlePageChange(totalPages);
                                }, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronLast, { className: "size-5" }) }) }))] }) }))] }));
};
exports.default = Posts;
//# sourceMappingURL=Posts.js.map