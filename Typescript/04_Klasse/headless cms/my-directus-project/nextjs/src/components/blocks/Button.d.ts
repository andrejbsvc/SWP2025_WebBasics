import { LucideIcon } from 'lucide-react';
export interface ButtonProps {
    id: string;
    label?: string | null;
    variant?: string | null;
    url?: string | null;
    type?: 'page' | 'post' | 'url' | 'submit' | null;
    page?: {
        permalink: string | null;
    };
    post?: {
        slug: string | null;
    };
    size?: 'default' | 'sm' | 'lg' | 'icon';
    icon?: 'arrow' | 'plus';
    customIcon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    block?: boolean;
}
declare const Button: ({ id, label, variant, url, type, page, post, size, icon, customIcon, iconPosition, className, onClick, disabled, block, }: ButtonProps) => any;
export default Button;
//# sourceMappingURL=Button.d.ts.map