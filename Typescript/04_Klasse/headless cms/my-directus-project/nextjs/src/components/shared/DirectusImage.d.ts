import { ImageProps } from 'next/image';
export interface DirectusImageProps extends Omit<ImageProps, 'src'> {
    uuid: string;
}
declare const DirectusImage: ({ uuid, alt, width, height, ...rest }: DirectusImageProps) => any;
export default DirectusImage;
//# sourceMappingURL=DirectusImage.d.ts.map