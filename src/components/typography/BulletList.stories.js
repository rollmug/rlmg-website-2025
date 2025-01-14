import { BulletList } from "./BulletList";

export default {
    title: 'Typography/BulletList',
    component: BulletList,
    tags: ['!autodocs'],
    args: {
        listItems: [
            'Strategy & Concept',
            'Design Development & Prototyping',
            'Interactive Media',
            'Film & Linear Media',
            'Immersive Environments',
            'Project Management',
        ],
        title: 'Our Capabilities'
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

export const Normal = (args) => <BulletList {...args} />;