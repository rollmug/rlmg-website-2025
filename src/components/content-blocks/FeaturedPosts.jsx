import React from "react";
import PropTypes from 'prop-types';
import { Button } from "../ui/Button";
import { ContentSection } from "../layout/ContentSection";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const FeaturedPosts = ({ headerText, linkToPage, buttonText, posts, className, standout = false }) => {
    const transition = { duration: 1, ease: [.25, .1, .25, 1], delay: .25 };
    const variants = {
        hidden: { filter: "blur(10px)", transform: "translateY(2rem)", opacity: 0 },
        visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
    };
    return (
        <>
            <ContentSection standout={standout}>
                <div className={`section-padded ${className}`}>
                    <div className="flex flex-row flex-wrap justify-start gap-0">
                        <h2 className="my-0 lg:w-1/2 order-1 text-lgr md:text-xl lg:text-2xl">{headerText ? headerText : 'Featured Posts'}</h2>
                        <div className={`order-3 lg:order-2 lg:w-1/2 text-right`}>
                            {(buttonText && linkToPage) && <Button label={buttonText} url={linkToPage} className={``} />}
                        </div>
                        <div className="my-5 lg:my-8 order-2 lg:order-3 basis-full grid lg:grid-cols-2 grid-flow-row auto-rows-max gap-6">
                            {posts.map((post, index) => (
                                <div key={index} className="flex flex-col lg:gap-2">
                                    <div className={`aspect-video flex justify-center items-center mb-2 lg:mb-4 w-full max-w-full`}>
                                        {post.bannerImage ? (
                                            <AnimatePresence>
                                                <motion.div initial={variants.hidden} whileInView={variants.visible} transition={transition} className="relative w-full h-full">
                                                    <Link href={post.urlSlug}>
                                                        <Image src={post.bannerImage} fill alt="" className={`object-cover`} />
                                                    </Link>
                                                </motion.div>
                                            </AnimatePresence>
                                        ) : 'Image goes here'}

                                    </div>
                                    <Link href={post.urlSlug}><h3 className="my-0 ">{post.postTitle}</h3></Link>
                                    <p className="my-0 text-sm lg:text-base">{post.postTeaser}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentSection>
        </>
    );
}

FeaturedPosts.propTypes = {
    headerText: PropTypes.string,
    linkToPage: PropTypes.string,
    buttonText: PropTypes.string,
    posts: PropTypes.array,
    className: PropTypes.string,
}

FeaturedPosts.defaultProps = {
    headerText: 'Featured Projects',
    linkToPage: '/',
    buttonText: 'See All Projects',
    posts: [
        {
            postTitle: 'Post Title',
            postTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat.',
            urlSlug: '/',
            bannerImage: '',
        },
        {
            postTitle: 'Post Title',
            postTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat.',
            urlSlug: '/',
            bannerImage: '',
        },
    ],
}