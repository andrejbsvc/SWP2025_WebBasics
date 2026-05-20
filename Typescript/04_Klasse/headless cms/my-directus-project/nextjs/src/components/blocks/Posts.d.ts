import { Post } from '@/types/directus-schema';
interface PostsProps {
    data: {
        id: string;
        tagline?: string;
        headline?: string;
        posts: Post[];
        limit: number;
    };
}
declare const Posts: ({ data }: PostsProps) => any;
export default Posts;
//# sourceMappingURL=Posts.d.ts.map