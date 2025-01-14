'use client';
import { Navbar } from "@/components/ui/Navbar";
import { Banner } from "@/components/ui/Banner";

import RLMG from '../stories/assets/rlmg-logo.png';
import testImg from '../stories/assets/test-bg-image.jpg'
import { Footer } from "@/components/ui/Footer";
import { TextWithImage } from "@/components/content-blocks/TextWithImage";
import { TextOnlyHero } from "@/components/content-blocks/TextOnlyHero";
const videoLoop = '/videos/WebLoop_opt_241218_1280-optimized.mp4';
const featureImg = '/storybook-imgs/Biomuseo_Panorama_2_2014.jpg';
const testImg3 = '/storybook-imgs/Our-Approach.jpg';

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

export default function Home() {
  return (
    <div className="">
      <Navbar img={RLMG} orgName="RLMG" listItems={[
        { text: "About Us", url: "/" },
        { text: "Our Work", url: "/" },
        { text: "Our Team", url: "/" },
        { text: "Careers", url: "/" },
        { text: "Contact", url: "/" },
      ]} fixed />

      <main className="py-14 lg:py-20">
        <Banner bannerTextPlacement='top' bannerImage={testImg} bannerHeader="Experience is Everything" bannerVideo={videoLoop} />

        <TextWithImage
          header="Who We Are"
          subheader="We Create Text. At Different Sizes."
          text="We bring to life innovative and imaginative experiences that stir emotions. Shift perceptions.
                Provoke joy, wonder, debate. We open doors and cast light on who we are as humans, where we’ve been, where we’re going.
                We bring people together and explore what connects us. We create meaningful moments, and we do it with a sense of purpose every step of the way."
          image={featureImg}
          width={600}
          alt="Test image"
          imagePlacement="right"
          className={`my-2 mt-6 lg:my-8`}
        />

        <TextWithImage
          header="Our Approach"
          subheader="Measure Once. Cut Twice."
          text="We are led by the principles of design-thinking. It informs every facet of our approach, from UX to graphic design to storytelling and technology. In support of that guiding principle is good old-fashioned teamwork, internally across our disciplines and with clients and partners. We listen carefully, we respect diverse perspectives, and, above all, we have fun."
          image={testImg3}
          width={600}
          alt="Test image"
          imagePlacement="left"
          className={`my-2 lg:mb-8 lg:mt-12`}
        />

        <TextOnlyHero
          headerText="Pizza on Wednesdays"
          mainText="We are always looking for talented individuals to join our team. If you are passionate about creating meaningful experiences, <strong>we would love to hear from you.</strong>"
          buttonText="View Toppings"
          buttonURL="/careers"
          className="mt-8 lg:mt-16 border border-transparent"
        />

        <Footer {...footerArgs} className={`mt-6`} />
      </main>
    </div>
  );
}
