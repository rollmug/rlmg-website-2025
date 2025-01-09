import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <div className="relative h-96 bg-neutral">
        <div className="max-w-2xl mx-auto py-12 px-12">
          <h1 className="">
            Typography is Everything
          </h1>
        </div>
      </div>
      <article className="_prose py-12 px-12 max-w-2xl mx-auto">
        <h2>Who We Are</h2>
        <h3>We Create Experiences. With Purpose.</h3>
        <hr />
        <p>
          We bring to life innovative and imaginative experiences that stir emotions. Shift perceptions. Provoke joy, wonder, debate. We open doors and cast light on who we are as humans, where we’ve been, where we’re going. We bring people together and explore what connects us. We create meaningful moments, and we do it with a sense of purpose every step of the way.
        </p>
      </article>
    </section>
  );
}
