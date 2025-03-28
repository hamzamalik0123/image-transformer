"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBuilder = void 0;
exports.config = config;
exports.image = image;
let baseUrl = '';
function config(options) {
    baseUrl = options.baseUrl || '';
}
class ImageBuilder {
    constructor(imageUrl) {
        this.transformations = {};
        this.imageUrl = imageUrl;
    }
    resize(width, height) {
        this.transformations.width = width;
        this.transformations.height = height;
        return this;
    }
    crop(type) {
        this.transformations.crop = type;
        return this;
    }
    format(type) {
        this.transformations.format = type;
        return this;
    }
    quality(value) {
        this.transformations.quality = value;
        return this;
    }
    gravity(value) {
        this.transformations.gravity = value;
        return this;
    }
    angle(value) {
        this.transformations.angle = value;
        return this;
    }
    background(value) {
        this.transformations.background = value;
        return this;
    }
    effect(value) {
        this.transformations.effect = value;
        return this;
    }
    overlay(value) {
        this.transformations.overlay = value;
        return this;
    }
    radius(value) {
        this.transformations.radius = value;
        return this;
    }
    flags(value) {
        this.transformations.flags = value;
        return this;
    }
    dpr(value) {
        this.transformations.dpr = value;
        return this;
    }
    toURL() {
        const encodedTransform = Buffer.from(JSON.stringify(this.transformations)).toString('base64');
        const encodedImageUrl = encodeURIComponent(this.imageUrl);
        return `${baseUrl}?src=${encodedImageUrl}&transform=${encodedTransform}`;
    }
}
exports.ImageBuilder = ImageBuilder;
function image(imageUrl) {
    return new ImageBuilder(imageUrl);
}
