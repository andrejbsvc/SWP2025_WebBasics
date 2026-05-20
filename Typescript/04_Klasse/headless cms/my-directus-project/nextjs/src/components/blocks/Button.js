"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
const utils_1 = require("@/lib/utils");
const Button = ({ id, label, variant, url, type, page, post, size = 'default', icon, customIcon, iconPosition = 'left', className, onClick, disabled = false, block = false, }) => {
    const icons = {
        arrow: lucide_react_1.ArrowRight,
        plus: lucide_react_1.Plus,
    };
    const Icon = customIcon || (icon ? icons[icon] : null);
    const href = (() => {
        if (type === 'page' && page?.permalink)
            return page.permalink;
        if (type === 'post' && post?.slug)
            return `/blog/${post.slug}`;
        return url || undefined;
    })();
    const buttonClasses = (0, utils_1.cn)((0, button_1.buttonVariants)({ variant: variant, size }), className, disabled && 'opacity-50 cursor-not-allowed', block && 'w-full');
    const content = ((0, jsx_runtime_1.jsxs)("span", { className: "flex items-center space-x-2", children: [icon && iconPosition === 'left' && Icon && (0, jsx_runtime_1.jsx)(Icon, { className: "size-4 shrink-0" }), label && (0, jsx_runtime_1.jsx)("span", { children: label }), icon && iconPosition === 'right' && Icon && (0, jsx_runtime_1.jsx)(Icon, { className: "size-4 shrink-0" })] }));
    if (href) {
        return ((0, jsx_runtime_1.jsx)(button_1.Button, { asChild: true, variant: variant, size: size, className: buttonClasses, disabled: disabled, children: href.startsWith('/') ? ((0, jsx_runtime_1.jsx)(link_1.default, { href: href, children: content })) : ((0, jsx_runtime_1.jsx)("a", { href: href, target: "_blank", rel: "noopener noreferrer", children: content })) }));
    }
    return ((0, jsx_runtime_1.jsx)(button_1.Button, { variant: variant, size: size, className: buttonClasses, onClick: onClick, disabled: disabled, children: content }));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map