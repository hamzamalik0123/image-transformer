let baseUrl = '';

type TransformationOptions = {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'thumb' | 'crop' | 'limit';
  aspect_ratio?: string;
  gravity?: 'center' | 'face' | 'faces' | 'north' | 'south' | 'east' | 'west';
  blur?: number;
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

  aspectRatio(aspectRatio: string): this {
    this.transformations.aspect_ratio = aspectRatio;
    return this;
  }

  gravity(gravity: TransformationOptions['gravity']): this {
    this.transformations.gravity = gravity;
    return this;
  }

  blur(blur: number): this {
    this.transformations.blur = blur;
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
