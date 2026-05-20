interface GalleryItem {
    id: string;
    directus_file: string;
    sort?: number;
}
interface GalleryData {
    id: string;
    tagline?: string;
    headline?: string;
    items?: GalleryItem[];
}
interface GalleryProps {
    data: GalleryData;
}
declare const Gallery: ({ data }: GalleryProps) => any;
export default Gallery;
//# sourceMappingURL=Gallery.d.ts.map