import { Post, DirectusUser } from '@/types/directus-schema';
interface BlogPostClientProps {
    post: Post;
    relatedPosts: Post[];
    author?: DirectusUser | null;
    authorName: string;
    postUrl: string;
}
export default function BlogPostClient({ post, relatedPosts, author, authorName, postUrl }: BlogPostClientProps): any;
export {};
//# sourceMappingURL=BlogPostClient.d.ts.map