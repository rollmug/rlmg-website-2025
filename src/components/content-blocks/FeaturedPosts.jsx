import React from "react";
import PropTypes from 'prop-types';
import { Button } from "../ui/Button";
import { ContentSection } from "../layout/ContentSection";
import Image from "next/image";

export const FeaturedPosts = ({ headerText, linkToPage, buttonText, posts, className, standout = false }) => {
    const imgClasses = 'object-cover object-left lg:object-center transition-all ease-in-out duration-1000 opacity-0';
    return (
        <>
            <ContentSection standout={standout}>
                <div className={`section-padded ${className}`}>
                    <div className="flex flex-row flex-wrap justify-start gap-0">
                        <h2 className="my-0 lg:w-1/2 order-1">{headerText}</h2>
                        <div className={`order-3 lg:order-2 lg:w-1/2 text-right`}>
                            <Button label={buttonText} url={linkToPage} className={``} />
                        </div>
                        <div className="my-8 order-2 lg:order-3 basis-full grid lg:grid-cols-2 grid-flow-row auto-rows-max gap-6">
                            {posts.map((post, index) => (
                                <div key={index} className="flex flex-col lg:gap-2">
                                    <div className={`aspect-video ${standout ? 'bg-neutral-content' : 'bg-base-200'} flex justify-center items-center mb-2 lg:mb-4 w-full max-w-full`}>
                                        {post.bannerImage ? (
                                            <Image src={post.bannerImage} fill alt="" className={`${imgClasses}`} onLoad={(event) => event.target.classList.remove("opacity-0")} />
                                        ) : 'Image goes here'}

                                    </div>
                                    <h3 className="my-0 ">{post.postTitle}</h3>
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