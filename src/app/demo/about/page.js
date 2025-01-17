'use client';
import { Navbar } from "@/components/ui/Navbar";
import { Banner } from "@/components/ui/Banner";
import RLMG from '../stories/assets/rlmg-logo.png';
import { Footer } from "@/components/ui/Footer";

export default function About() {
return (
    <div className="">
      <Navbar img={RLMG} orgName="RLMG" listItems={[
        { text: "About Us", url: "/" },
        { text: "Our Work", url: "/" },
        { text: "Our Team", url: "/" },
        { text: "Careers", url: "/" },
        { text: "Contact", url: "/" },
      ]} fixed />

      </div>
    )
}

/**
 * const footerArgs = {
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
 */