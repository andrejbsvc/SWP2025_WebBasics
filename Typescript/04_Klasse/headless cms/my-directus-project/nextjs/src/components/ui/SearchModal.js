'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const command_1 = require("@/components/ui/command");
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const badge_1 = require("@/components/ui/badge");
const utils_1 = require("@/lib/utils");
const dialog_1 = require("./dialog");
const navigation_1 = require("next/navigation");
function SearchModal() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [results, setResults] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [searched, setSearched] = (0, react_1.useState)(false);
    const router = (0, navigation_1.useRouter)();
    (0, react_1.useEffect)(() => {
        const onKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);
    (0, react_1.useEffect)(() => {
        if (!open) {
            setResults([]);
            setSearched(false);
            setLoading(false);
        }
    }, [open]);
    const fetchResults = async (search) => {
        if (search.length < 3) {
            setResults([]);
            setSearched(false);
            return;
        }
        setLoading(true);
        setSearched(true);
        try {
            const res = await fetch(`/api/search?search=${encodeURIComponent(search)}`);
            if (!res.ok)
                throw new Error('Failed to fetch results');
            const data = await res.json();
            setResults(data.filter((r) => r.link));
        }
        catch (error) {
            console.error('Error fetching search results:', error);
            setResults([]);
        }
        finally {
            setLoading(false);
        }
    };
    const debouncedFetchResults = (0, utils_1.debounce)(fetchResults, 300);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "sm:max-w-[540px] max-w-full", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", size: "icon", onClick: () => setOpen(true), "aria-label": "Search", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Search, { className: "size-5" }) }), (0, jsx_runtime_1.jsxs)(command_1.CommandDialog, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(dialog_1.DialogTitle, { className: "p-2 sr-only", children: "Search" }), (0, jsx_runtime_1.jsx)(dialog_1.DialogDescription, { className: "px-2 sr-only", children: "Search for pages or posts" }), (0, jsx_runtime_1.jsx)(command_1.CommandInput, { placeholder: "Search for pages or posts", onValueChange: (value) => debouncedFetchResults(value), className: "m-2 p-4 focus:outline-none text-base leading-normal" }), (0, jsx_runtime_1.jsxs)(command_1.CommandList, { className: "p-2 text-foreground max-h-[500px] overflow-auto", children: [!loading && !searched && ((0, jsx_runtime_1.jsx)(command_1.CommandEmpty, { className: "py-2 text-sm text-center", children: "Enter a search term above to see results" })), loading && (0, jsx_runtime_1.jsx)(command_1.CommandEmpty, { className: "py-2 text-sm text-center", children: "Loading..." }), !loading && searched && results.length === 0 && ((0, jsx_runtime_1.jsx)(command_1.CommandEmpty, { className: "py-2 text-sm text-center", children: "No results found" })), !loading && results.length > 0 && ((0, jsx_runtime_1.jsx)(command_1.CommandGroup, { heading: "Search Results", className: "pt-2", forceMount: true, children: results.map((result) => ((0, jsx_runtime_1.jsxs)(command_1.CommandItem, { className: "flex items-start gap-4 px-2 py-3", onSelect: () => {
                                        router.push(result.link);
                                        setOpen(false);
                                    }, children: [(0, jsx_runtime_1.jsx)(badge_1.Badge, { variant: "default", children: result.type }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-2 w-full", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-medium text-base", children: result.title }), result.description && (0, jsx_runtime_1.jsx)("p", { className: "text-sm mt-1 line-clamp-2", children: result.description })] })] }, result.id))) }))] })] })] }));
}
//# sourceMappingURL=SearchModal.js.map