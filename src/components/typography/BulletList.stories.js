import { BulletList } from "./BulletList";

export default {
    title: 'Typography/BulletList',
    component: BulletList,
    tags: ['!autodocs'],
    args: {
        listItems: [
            { text: 'Strategy & Concept' },
            { text: 'Design Development & Prototyping' },
            { text: 'Interactive Media' },
            { text: 'Film & Linear Media' },
            { text: 'Immersive Environments' },
            { text: 'Project Management' },
        ],
        title: 'Our Capabilities',
        textSize: 'normal',
        spacing: 'normal',
    },
    parameters: {
        layout: 'centered',
        paddings: {
            values: [
                { name: 'Small', value: '16px' },
                { name: 'Medium', value: '32px' },
                { name: 'Large', value: '64px' },
            ],
            default: 'Large',
        },
    },
    globals: {
        backgrounds: { value: 'light' },
    },
}

export const Bullets = {
    args: {
        bullets: true,
    }
}

export const Plain = {
    args: {
        bullets: false,
    }
}

export const WithLinks = {
    args: {
        bullets: false,
        title: null,
        spacing: 'loose',
        textSize: 'small',
        listItems: [
            { text: 'Home', url: '/' },
            { text: 'About Us', url: '/' },
            { text: 'Our Work', url: '/' },
            { text: 'Our Team', url: '/' },
            { text: 'Careers', url: '/' },
            { text: 'Contact Us', url: '/' },
        ],
    }
}