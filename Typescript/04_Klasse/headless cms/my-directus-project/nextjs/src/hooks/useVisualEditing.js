'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVisualEditing = useVisualEditing;
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const visual_editing_1 = require("@directus/visual-editing");
function useVisualEditing() {
    const [isVisualEditingEnabled, setIsVisualEditingEnabled] = (0, react_1.useState)(false);
    const searchParams = (0, navigation_1.useSearchParams)();
    const pathname = (0, navigation_1.usePathname)();
    const router = (0, navigation_1.useRouter)();
    const enableVisualEditingEnv = process.env.NEXT_PUBLIC_ENABLE_VISUAL_EDITING === 'true';
    const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || '';
    (0, react_1.useEffect)(() => {
        if (typeof window === 'undefined')
            return;
        const param = searchParams.get('visual-editing');
        if (!enableVisualEditingEnv) {
            if (param === 'true') {
                console.warn('Visual editing is not enabled in this environment.');
            }
            return;
        }
        if (param === 'true') {
            localStorage.setItem('visual-editing', 'true');
        }
        else if (param === 'false') {
            localStorage.removeItem('visual-editing');
            const newParams = new URLSearchParams(searchParams.toString());
            newParams.delete('visual-editing');
            const cleanUrl = pathname + (newParams.toString() ? `?${newParams}` : '');
            window.history.replaceState({}, '', cleanUrl);
        }
        const persisted = localStorage.getItem('visual-editing') === 'true';
        setIsVisualEditingEnabled(persisted);
        if (persisted && param !== 'true') {
            const newParams = new URLSearchParams(searchParams.toString());
            newParams.set('visual-editing', 'true');
            const updatedUrl = pathname + (newParams.toString() ? `?${newParams}` : '');
            window.history.replaceState({}, '', updatedUrl);
        }
    }, [searchParams, pathname, enableVisualEditingEnv]);
    const apply = (options) => {
        if (!isVisualEditingEnabled)
            return;
        (0, visual_editing_1.apply)({
            ...options,
            directusUrl,
        });
    };
    return {
        isVisualEditingEnabled,
        apply,
        setAttr: visual_editing_1.setAttr,
    };
}
//# sourceMappingURL=useVisualEditing.js.map