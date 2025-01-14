import { FeaturedImage } from "./FeaturedImage";

export default {
    title: 'UI Elements/Image',
    component: FeaturedImage,
    //tags: ['!autodocs'],
    parameters: {
        layout: 'centered',
    },
    globals: {
        backgrounds: { value: 'light' },
    },
}

export const ImageShadow = {
    args: {
        //img: 'https://rlmg-website-2025.vercel.app/storybook-imgs/featured-image.jpg',
        src: '/storybook-imgs/Biomuseo_Panorama_2_2014.jpg',
        alt: 'Featured Image',
    }
};