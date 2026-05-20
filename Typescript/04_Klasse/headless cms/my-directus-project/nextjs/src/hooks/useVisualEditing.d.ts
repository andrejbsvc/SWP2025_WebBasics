interface ApplyOptions {
    elements?: HTMLElement[] | HTMLElement;
    onSaved?: () => void;
    mode?: 'modal' | 'popover' | 'drawer';
}
export declare function useVisualEditing(): {
    isVisualEditingEnabled: any;
    apply: (options: Pick<ApplyOptions, "elements" | "onSaved" | "mode">) => void;
    setAttr: any;
};
export {};
//# sourceMappingURL=useVisualEditing.d.ts.map