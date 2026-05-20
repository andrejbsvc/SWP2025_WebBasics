'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
const dialog_1 = require("@/components/ui/dialog");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const ShareDialog = ({ postUrl, postTitle }) => {
    const [copied, setCopied] = (0, react_1.useState)(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(postUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const socialLinks = [
        {
            service: 'reddit',
            url: `http://www.reddit.com/submit?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`,
            icon: '/icons/social/reddit.svg',
        },
        {
            service: 'x',
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`,
            icon: '/icons/social/twitter.svg',
        },
        {
            service: 'linkedin',
            url: `https://www.linkedin.com/shareArticle/?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`,
            icon: '/icons/social/linkedin.svg',
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(dialog_1.Dialog, { children: [(0, jsx_runtime_1.jsx)(dialog_1.DialogTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Share, { className: "size-4" }), (0, jsx_runtime_1.jsx)("span", { children: "Share Blog" })] }) }), (0, jsx_runtime_1.jsxs)(dialog_1.DialogContent, { className: "sm:max-w-md", children: [(0, jsx_runtime_1.jsx)(dialog_1.DialogHeader, { children: (0, jsx_runtime_1.jsx)(dialog_1.DialogTitle, { children: "Share this blog post" }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center space-x-4 mb-1", children: socialLinks.map((social) => ((0, jsx_runtime_1.jsx)("a", { href: social.url, target: "_blank", rel: "noopener noreferrer", className: "rounded bg-transparent inline-flex items-center justify-center transition-colors hover:opacity-70", children: (0, jsx_runtime_1.jsx)("img", { src: social.icon, alt: `${social.service} icon`, width: 32, height: 32, className: "size-8  dark:invert" }) }, social.service))) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid flex-1 gap-2", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { htmlFor: "link", className: "sr-only", children: "Link" }), (0, jsx_runtime_1.jsx)(input_1.Input, { id: "link", value: postUrl, readOnly: true })] }), (0, jsx_runtime_1.jsxs)(button_1.Button, { type: "button", size: "sm", className: "px-3", onClick: handleCopy, children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Copy" }), (0, jsx_runtime_1.jsx)(lucide_react_1.Copy, {})] })] }), copied && (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-sm text-green-600", children: "Link copied to clipboard!" }), (0, jsx_runtime_1.jsx)(dialog_1.DialogFooter, { className: "sm:justify-start", children: (0, jsx_runtime_1.jsx)(dialog_1.DialogClose, { asChild: true, children: (0, jsx_runtime_1.jsx)(button_1.Button, { type: "button", variant: "secondary", children: "Close" }) }) })] })] }));
};
exports.default = ShareDialog;
//# sourceMappingURL=ShareDialog.js.map