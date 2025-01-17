'use client';
import { PageLayout } from "@/components/layout/PageLayout";
import { Banner } from "@/components/ui/Banner";
import RLMG from '../../../stories/assets/rlmg-logo.png';

const navItems = [
    { text: "About Us", url: "/" },
    { text: "Our Work", url: "/" },
    { text: "Our Team", url: "/" },
    { text: "Careers", url: "/" },
    { text: "Contact", url: "/" },
];

const footerArgs = {
    logoImg: RLMG,
    orgName: 'RLMG',
    address: '70 Coolidge Hill Road, Watertown, MA 02472',
    email: 'hello@rlmg.com',
    listItems: [
        { text: 'Home', url: '/' },
        { text: 'About Us', url: '/' },
        { text: 'Our Work', url: '/' },
        { text: 'Our Team', url: '/' },
        { text: 'Careers', url: '/' },
        { text: 'Contact Us', url: '/' },
        { text: "Blog", url: "/" },
    ],
    socialLinks: [
        {
            platform: 'linkedin',
            displayText: 'LinkedIn',
            url: 'https://www.linkedin.com/company/richard-lewis-media-group',
        },
        {
            platform: 'facebook',
            displayText: 'Facebook',
            url: 'https://www.facebook.com/pages/Richard-Lewis-Media-Group/176549829058538',
        },
        {
            platform: 'instagram',
            displayText: 'Instagram',
            url: 'https://www.instagram.com/rlmg_media/',
        },
        {
            platform: 'twitter',
            displayText: 'Twitter',
            url: 'https://twitter.com/rlmgmedia',
        }
    ],
}

const pageLayoutParams = {
    orgName: 'RLMG',
    logoImg: RLMG,
    navItems: navItems,
    footerArgs: footerArgs
};

const bannerArgs = {
    image: '/storybook-imgs/Hero_Image.jpg',
    headerText: 'Header Text',
    subheaderText: 'Subheader Text',
    buttonText: 'Learn About Our Process',
    buttonURL: '/',
    textBlocks: [
        { content: '<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.</p>' },
        {
            content: '<ul><li>Item 1 is longer</li><li>Item 2</li><li>Item 3</li></ul>'
        },
        {
            content: '<ul><li>Item 1 is longer too</li><li>Item 2</li><li>Item 3</li></ul>'
        },
    ]
}

export default function About() {
    return (
        <PageLayout {...pageLayoutParams}>
            {/* <Banner bannerTextPlacement='top' bannerImage={testImg} bannerHeader="Experience is Everything" bannerVideo={videoLoop} /> */}
        </PageLayout>
    )
}
