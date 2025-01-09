import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative pt-6 pb-24 lg:pb-48 bg-neutral slanted">
        <div className="max-w-2xl mx-auto p-6 lg:p-10">
          <h1 className="">
            Typography is Everything
          </h1>
        </div>
      </div>
      <section className="p-6 pt-2 lg:p-10 lg:pt-2 max-w-2xl mx-auto ">
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


    </div>
  );
}
