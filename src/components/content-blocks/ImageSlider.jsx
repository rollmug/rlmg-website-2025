'use client';

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ContentSection } from "../layout/ContentSection"

export const ImageSlider = ({ images, galleryTitle, galleryDescription }) => {
    const transition = { duration: 1, ease: [.25, .1, .25, 1] };
    const variants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0)", opacity: 1 },
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <>
            <ContentSection>
                {(galleryTitle || galleryDescription) && (
                    <section className={`section-padded`}>
                        <div className="max-w-prose mx-auto lg:max-w-screen-md my-10 ">
                            {galleryTitle && <h2>{galleryTitle}</h2>}
                            {galleryDescription && <p dangerouslySetInnerHTML={{ __html: galleryDescription }} />}
                        </div>
                    </section>
                )}

                <div className="carousel carousel-center w-full space-x-4 md:space-x-8 lg:space-x-10 py-4 hidden md:flex">
                    {images.map((image, index) => (
                        <div key={index} className="carousel-item">
                            <motion.div initial={variants.hidden} whileInView={variants.visible} transition={transition} className="relative">
                                <Image src={image.image} width={image.width} height={image.height} alt="" className="w-[calc(100vw*.8)] xl:w-[calc(100vw*.6)]" />
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="carousel carousel-vertical carousel-center w-full space-y-4 py-0 flex md:hidden">
                    {images.map((image, index) => (
                        <div key={index} className="carousel-item">
                            <motion.div initial={variants.hidden} whileInView={variants.visible} transition={transition} className="relative">
                                <Image src={image.image} width={image.width} height={image.height} alt="" className="max-w-full" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </ContentSection>
        </>
    )
}

export const sampleSliderImages = [
    {
        "image": "https://rlmg-website-2025.vercel.app/storybook-imgs/image1.jpg",
        width: 1350, height: 759
    },
    {
        "image": "https://rlmg-website-2025.vercel.app/storybook-imgs/image2.jpg",
        width: 1350, height: 759
    },
    {
        "image": "https://rlmg-website-2025.vercel.app/storybook-imgs/image3.jpg",
        width: 1350, height: 759
    },
    {
        "image": "https://rlmg-website-2025.vercel.app/storybook-imgs/image4.jpg",
        width: 1350, height: 759
    },
    {
        "image": "https://rlmg-website-2025.vercel.app/storybook-imgs/image5.jpg",
        width: 1350, height: 759
    },
    {
        "image": "https://rlmg-website-2025.vercel.app/storybook-imgs/image6.jpg",
        width: 1350, height: 759
    }
];