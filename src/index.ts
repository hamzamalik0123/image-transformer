let baseUrl = '';

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

export class ImageBuilder {

  private imageUrl: string;
  private transformations: TransformationOptions = {};

  constructor(imageUrl: string) {
    this.imageUrl = imageUrl;
  }

  resize(width: number, height: number): this {
    this.transformations.width = width;
    this.transformations.height = height;
    return this;
  }

  crop(type: TransformationOptions['crop']): this {
    this.transformations.crop = type;
    return this;
  }

  format(type: TransformationOptions['format']): this {
    this.transformations.format = type;
    return this;
  }

  quality(value: TransformationOptions['quality']): this {
    this.transformations.quality = value;
    return this;
  }

  gravity(value: TransformationOptions['gravity']): this {
    this.transformations.gravity = value;
    return this;
  }

  angle(value: number): this {
    this.transformations.angle = value;
    return this;
  }

  background(value: string): this {
    this.transformations.background = value;
    return this;
  }

  effect(value: string): this {
    this.transformations.effect = value;
    return this;
  }

  overlay(value: string): this {
    this.transformations.overlay = value;
    return this;
  }

  radius(value: number | 'max'): this {
    this.transformations.radius = value;
    return this;
  }

  flags(value: string[]): this {
    this.transformations.flags = value;
    return this;
  }

  dpr(value: number | 'auto'): this {
    this.transformations.dpr = value;
    return this;
  }

  toURL(): string {
    const encodedTransform = Buffer.from(JSON.stringify(this.transformations)).toString('base64');
    const encodedImageUrl = encodeURIComponent(this.imageUrl);
    return `${baseUrl}?src=${encodedImageUrl}&transform=${encodedTransform}`;
  }
}

export function image(imageUrl: string): ImageBuilder {
  return new ImageBuilder(imageUrl);
}

export function config(baseUrl: string): void {
  baseUrl = baseUrl;
}
