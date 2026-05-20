'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const DirectusImage_1 = __importDefault(require("@/components/shared/DirectusImage"));
const Tagline_1 = __importDefault(require("../ui/Tagline"));
const Headline_1 = __importDefault(require("@/components/ui/Headline"));
const dialog_1 = require("@/components/ui/dialog");
const lucide_react_1 = require("lucide-react");
const visual_editing_1 = require("@directus/visual-editing");
const Gallery = ({ data }) => {
    const { tagline, headline, items, id } = data;
    const [isLightboxOpen, setLightboxOpen] = (0, react_1.useState)(false);
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const sortedItems = items ? [...items].sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0)) : [];
    const isValidIndex = sortedItems.length > 0 && currentIndex >= 0 && currentIndex < sortedItems.length;
    const handleOpenLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : sortedItems.length - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prev) => (prev < sortedItems.length - 1 ? prev + 1 : 0));
    };
    const handleKeyDown = (e) => {
        if (isLightboxOpen) {
            e.stopPropagation();
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    handlePrev();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    handleNext();
                    break;
                case 'Escape':
                    e.preventDefault();
                    setLightboxOpen(false);
                    break;
                default:
                    break;
            }
        }
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen]);
    return ((0, jsx_runtime_1.jsxs)("section", { className: "relative", children: [tagline && ((0, jsx_runtime_1.jsx)(Tagline_1.default, { tagline: tagline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_gallery',
                    item: id,
                    fields: 'tagline',
                    mode: 'popover',
                }) })), headline && ((0, jsx_runtime_1.jsx)(Headline_1.default, { headline: headline, "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_gallery',
                    item: id,
                    fields: 'headline',
                    mode: 'popover',
                }) })), sortedItems.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", "data-directus": (0, visual_editing_1.setAttr)({
                    collection: 'block_gallery',
                    item: id,
                    fields: 'items',
                    mode: 'modal',
                }), children: sortedItems.map((item, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "relative overflow-hidden rounded-lg group hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[300px]", onClick: () => handleOpenLightbox(index), "aria-label": `Gallery item ${item.id}`, children: [item.directus_file ? ((0, jsx_runtime_1.jsx)(DirectusImage_1.default, { uuid: item.directus_file, alt: `Gallery item ${item.id}`, fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw", className: "w-full h-auto object-cover rounded-lg" })) : ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center h-full text-sm text-gray-500", children: "Image not available" })), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ZoomIn, { className: "size-10 text-gray-800" }) })] }, item.id))) })), isLightboxOpen && isValidIndex && ((0, jsx_runtime_1.jsx)(dialog_1.Dialog, { open: isLightboxOpen, onOpenChange: setLightboxOpen, children: (0, jsx_runtime_1.jsxs)(dialog_1.DialogContent, { className: "flex max-w-full max-h-full items-center justify-center p-2 bg-transparent border-none z-50", hideCloseButton: true, children: [(0, jsx_runtime_1.jsx)(dialog_1.DialogTitle, { className: "sr-only", children: "Gallery Image" }), (0, jsx_runtime_1.jsxs)(dialog_1.DialogDescription, { className: "sr-only", children: ["Viewing image ", currentIndex + 1, " of ", sortedItems.length, "."] }), (0, jsx_runtime_1.jsx)("div", { className: "relative flex justify-center items-center w-[90vw] h-[90vh]", children: (0, jsx_runtime_1.jsx)(DirectusImage_1.default, { uuid: sortedItems[currentIndex].directus_file, alt: `Gallery item ${sortedItems[currentIndex].id}`, width: 1200, height: 800, className: "size-full object-contain" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute bottom-4 inset-x-0 flex justify-between items-center px-4", children: [(0, jsx_runtime_1.jsxs)("button", { className: "flex items-center gap-2 text-white bg-black bg-opacity-70 rounded-full px-4 py-2 hover:bg-opacity-90", onClick: handlePrev, "aria-label": "Previous", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ArrowLeft, { className: "size-8" }), (0, jsx_runtime_1.jsx)("span", { children: "Prev" })] }), (0, jsx_runtime_1.jsxs)("button", { className: "flex items-center gap-2 text-white bg-black bg-opacity-70 rounded-full px-4 py-2 hover:bg-opacity-90", onClick: handleNext, "aria-label": "Next", children: [(0, jsx_runtime_1.jsx)("span", { children: "Next" }), (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRight, { className: "size-8" })] })] }), (0, jsx_runtime_1.jsx)(dialog_1.DialogClose, { asChild: true, children: (0, jsx_runtime_1.jsx)("button", { className: "absolute top-4 right-4 text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90", "aria-label": "Close", children: (0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "size-8" }) }) })] }) }))] }));
};
exports.default = Gallery;
//# sourceMappingURL=Gallery.js.map