export declare function config(options: {
    baseUrl: string;
}): void;
type TransformationOptions = {
    width?: number;
    height?: number;
    crop?: 'fill' | 'fit' | 'scale' | 'thumb' | 'crop' | 'limit';
    aspect_ratio?: string;
    gravity?: 'center' | 'face' | 'faces' | 'north' | 'south' | 'east' | 'west';
    zoom?: number;
    x?: number;
    y?: number;
    format?: 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif' | 'avif';
    quality?: number | 'auto';
    radius?: number | 'max';
    angle?: number;
    effect?: string;
    opacity?: number;
    border?: string;
    background?: string;
    overlay?: string;
    underlay?: string;
    default_image?: string;
    delay?: number;
    color?: string;
    dpr?: number | 'auto';
    flags?: string[];
    transformation?: string;
};
export declare class ImageBuilder {
    private imageUrl;
    private transformations;
    constructor(imageUrl: string);
    resize(width: number, height: number): this;
    crop(type: TransformationOptions['crop']): this;
    format(type: TransformationOptions['format']): this;
    quality(value: TransformationOptions['quality']): this;
    gravity(value: TransformationOptions['gravity']): this;
    angle(value: number): this;
    background(value: string): this;
    effect(value: string): this;
    overlay(value: string): this;
    radius(value: number | 'max'): this;
    flags(value: string[]): this;
    dpr(value: number | 'auto'): this;
    toURL(): string;
}
export declare function image(imageUrl: string): ImageBuilder;
export {};
