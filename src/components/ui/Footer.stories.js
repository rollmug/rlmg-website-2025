import { Footer } from "./Footer";

export default {
    title: 'UI Elements/Footer',
    component: Footer,
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
    globals: {
        backgrounds: { value: 'light' },
    },
}

export const Default = {
    args: {
        orgName: 'RLMG',
        orgURL: 'https://rlmg.com',
        address: '1234 Elm St. Suite 1234, Anytown, USA 12345',
        phone: '123-456-7890',
        email: 'hello@rlmg.com',
        socialMedia: [
            { name: 'Facebook', url: 'https://www.facebook.com' },
            { name: 'Twitter', url: 'https://www.twitter.com' },
            { name: 'Instagram', url: 'https://www.instagram.com' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com' },
        ],
    }
}