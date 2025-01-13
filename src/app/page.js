'use client';
import { Navbar } from "@/components/ui/Navbar";
import { Banner } from "@/components/ui/Banner";

import RLMG from '../stories/assets/rlmg-logo.png';
import testImg from '../stories/assets/test-bg-image.jpg'
const videoLoop = '/videos/WebLoop_opt_241218_1280-optimized.mp4';

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
        <Banner bannerTextPlacement='top' bannerImage={testImg} bannerHeader="Experience is Everything" bannerVideo={videoLoop}  />

        <section className="section-padded py-8 lg:py-2">
          <h2>Who We Are</h2>
          <h3>We Create Text. At Different Sizes.</h3>
          <hr />
          <p>
            We bring to life innovative and imaginative experiences that stir emotions. Shift perceptions. Provoke joy, wonder, debate. We open doors and cast light on who we are as humans, where we’ve been, where we’re going. We bring people together and explore what connects us. We create meaningful moments, and we do it with a sense of purpose every step of the way.
          </p>
          <p>
            <button className="btn btn-primary my-2">Learn More</button>
          </p>
          <div className="my-8">
            <h4>Our Capabilities</h4>
            <ul>
              <li>Strategy & Concept</li>
              <li>Design Development & Prototyping</li>
              <li>Interactive Media</li>
              <li>Film & Linear Media</li>
              <li>Immersive Environments</li>
              <li>Project Management</li>
            </ul>
          </div>
        </section>
      </main>


    </div>
  );
}
