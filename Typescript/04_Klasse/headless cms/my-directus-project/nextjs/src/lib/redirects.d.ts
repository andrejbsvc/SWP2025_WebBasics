import type { Redirect as NextRedirect } from 'next/dist/lib/load-custom-routes';
export interface RedirectError {
    type: 'redirect';
    destination: string;
    status: string;
}
export declare function isRedirectError(error: unknown): error is RedirectError;
export declare function generateRedirects(): Promise<NextRedirect[]>;
//# sourceMappingURL=redirects.d.ts.map