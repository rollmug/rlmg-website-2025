import { ColumnImages } from "./ColumnImages";

export default {
    title: 'Content Blocks/Column Images',
    component: ColumnImages,
    tags: ['!autodocs'],
    argTypes: {
        headerText: { control: 'text' },
        columnImages: { control: 'array' },
        columnSize: { control: 'number' },
        className: { control: 'text' },
    },
    parameters: {
        layout: 'fullscreen',
        paddings: {
            values: [
                { name: 'None', value: '0px' },
            ],
            default: 'None',
        },
    },
    globals: {
        backgrounds: { value: 'light' },
    },
};

export const Default = {
    args: {
        headerText: 'Awards',
        columnSize: 4,
        columnImages: [
            { src: 'https://placehold.co/400x300', alt: 'Placeholder Image 1' },
            { src: 'https://placehold.co/300x100', alt: 'Placeholder Image 2' },
            { src: 'https://placehold.co/600x400', alt: 'Placeholder Image 3' },
            { src: 'https://placehold.co/500x100', alt: 'Placeholder Image 4' },
        ]
    }
};