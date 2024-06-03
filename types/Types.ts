export type MenuItem = {
    name: string;
    link: string;
};

export type ContentItem = {
    type: ContentItemType,
    content: string,
    ImageProperties: ImageProperties | undefined
}

export type ImageProperties = {
    width: number,
    height: number,
    alt: string
}

export enum ContentItemType {
    h2 = "h2",
    h3 = "h3",
    p = "p",
    img = "img"
}