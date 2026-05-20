import { PropsWithChildren } from 'react';
type SemanticElement = 'div' | 'section' | 'main' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'form';
interface ContainerProps extends PropsWithChildren {
    className?: string;
    as?: SemanticElement;
    role?: string;
}
declare const Container: ({ children, className, as: Component, role }: ContainerProps) => any;
export default Container;
//# sourceMappingURL=container.d.ts.map