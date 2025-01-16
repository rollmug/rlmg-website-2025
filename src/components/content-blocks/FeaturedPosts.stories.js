import { FeaturedPosts } from "./FeaturedPosts";

export default {
    title: 'Content Blocks/Featured Posts',
    component: FeaturedPosts,
    //tags: ['!autodocs'],
    parameters: {
        layout: 'fullscreen',
        paddings: {
            values: [
                { name: 'None', value: '0' },
            ],
            default: 'None',
        },
    },
    args: {
        headerText: 'Featured Projects',
        linkToPage: '/',
        buttonText: 'See All Projects',
        posts: [
            {
                postTitle: 'Post Title',
                postTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat.',
                urlSlug: '/',
                bannerImage: '',
            },
            {
                postTitle: 'Post Title',
                postTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat.',
                urlSlug: '/',
                bannerImage: '',
            },
        ],
    },
    globals: {
        backgrounds: { value: 'light' },
    },
}

export const Default = {
    args: {
        standout: false
    }
}

export const WithBackground = {
    args: {
        standout: true
    }
}