'use client';

import React, { useState, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import PropTypes from 'prop-types';
import BackgroundPlayer from 'next-video/background-player';
import { Button } from "./Button";
import DOMPurify from "isomorphic-dompurify";
import { twMerge } from 'tailwind-merge'; // import { clsx } from 'clsx';
import { BlogFilterContext } from "@/app/blogFilterContext";
import Link from "next/link";

export const Banner = ({ bannerTextPlacement, bannerHeader, bannerSubheader, bannerCallToActionLink, bannerCallToActionText, bannerImage, bannerBGVideo, blogButtons, categoryLabel, isBlog = false }) => {

    let justifyContent, bannerGradient, videoClass, classNames = [];
    switch (bannerTextPlacement) {
        case 'top':
            videoClass = 'place-top';
            justifyContent = 'justify-start pt-[10%] sm:pt-[12%] md:pt-[10%] lg:pt-[7%] xl:pt-[5%]';
            // bannerGradient = 'bg-gradient-to-b h-2/3 lg:h-2/3 w-full top-0';
            bannerGradient = 'bg-gradient-to-br h-full lg:h-full w-full top-0';
            break;
        case 'center':
            videoClass = 'place-center';
            justifyContent = 'justify-center';
            bannerGradient = 'bg-gradient-to-r h-full w-2/3 lg:w-2/3 left-0';
            break;
        case 'bottom':
            videoClass = 'place-bottom';
            justifyContent = 'justify-end pt-[10%]';
            bannerGradient = 'bg-gradient-to-t h-2/3 lg:h-2/3 w-full bottom-0';
            break;
        default:
            videoClass = 'place-top';
            justifyContent = 'justify-start pt-[15%] sm:pt-[12%] md:pt-[10%] lg:pt-[7%] xl:pt-[5%]';
            bannerGradient = 'bg-gradient-to-b h-2/3 lg:h-2/3 w-full top-0';
    }

    if (isBlog) {
        classNames = [
            `min-h-[calc(50vh)] pb-14 pt-4 md:pt1 sm:pb-24`, // mobile portrait
            `landscape:min-h-[calc(60vh)] landscape:pb-20`, // mobile landscape
            `landscape:lg:pb-24 landscape:lg:pt-0`, // tablet landscape
            `landscape:xl:pb-24` // desktop
        ];
    } else {
        classNames = [
            `${(bannerImage || bannerBGVideo) ? 'min-h-[calc(70vh)]' : 'min-h-[calc(50vh)]'} pb-14 sm:pb-24`, // mobile portrait
            `landscape:min-h-[calc(80vh)] landscape:pb-20`, // mobile landscape
            `landscape:lg:pb-32`, // tablet landscape
            `landscape:xl:pb-36` // desktop
        ];
    }

    const className = classNames.join(' ');
    const classesOutput = twMerge(`${justifyContent} ${className}`);
    const imgClasses = 'object-cover object-center lg:object-center transition-all ease-in-out duration-1000 opacity-0';

    if (bannerImage && bannerBGVideo) {
        return (
            <>
                <div className={`banner-block relative bg-neutral slanted w-full flex flex-col ${classesOutput}`}>
                    <div className="absolute inset-0 z-0 slanted">
                        <Image src={bannerImage} fill alt="" className={`${imgClasses} md:hidden`} onLoad={(event) => event.target.classList.remove("opacity-0")} />
                        <AnimatePresence>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} className="absolute inset-0 z-0 slanted">
                                <BackgroundPlayer src={bannerBGVideo} className={`bg-video-banner !hidden md:!grid`} />
                            </motion.div>
                        </AnimatePresence>
                        {(bannerHeader || bannerSubheader) && (
                            <div className={`${bannerGradient} from-black to-transparent absolute opacity-70`}></div>
                        )}
                    </div>

                    <OverlayText
                        bannerHeader={bannerHeader}
                        bannerSubheader={bannerSubheader}
                        bannerCallToActionLink={bannerCallToActionLink}
                        bannerCallToActionText={bannerCallToActionText}
                        bannerTextPlacement={bannerTextPlacement} />
                </div>
            </>
        );
    }

    return (
        <>
            <div className={`banner-block relative bg-neutral slanted w-full flex flex-col ${classesOutput}`}>
                {(bannerImage && !bannerBGVideo) && (
                    <div className="absolute inset-0 z-0">
                        <Image src={bannerImage} fill alt="" className={`${imgClasses}`} onLoad={(event) => event.target.classList.remove("opacity-0")} />
                        {(bannerHeader || bannerSubheader) && (
                            <div className={`${bannerGradient} from-black to-transparent absolute opacity-70`}></div>
                        )}
                    </div>
                )}

                <OverlayText
                    bannerHeader={bannerHeader}
                    bannerSubheader={bannerSubheader}
                    bannerCallToActionLink={bannerCallToActionLink}
                    bannerCallToActionText={bannerCallToActionText}
                    bannerTextPlacement={bannerTextPlacement}
                    blogButtons={blogButtons}
                    categoryLabel={categoryLabel} />
            </div>

        </>
    );
}

const OverlayText = ({ bannerHeader, bannerSubheader, bannerCallToActionLink, bannerCallToActionText, bannerTextPlacement, blogButtons, categoryLabel }) => {
    let cleanSubheader;
    if (bannerSubheader) {
        cleanSubheader = DOMPurify.sanitize(bannerSubheader);
    }

    if (blogButtons && Array.isArray(blogButtons) && blogButtons.length > 0) {
        return (
            <div className={`section-padded z-[2] ${bannerTextPlacement === 'bottom' ? 'lg:mb-4 xl:mb-6' : ''}`}>
                {bannerHeader && <h1 className={`${bannerSubheader ? 'smaller' : ''} md:max-w-screen-sm lg:max-w-screen-md lg:-translate-x-1`}>{bannerHeader}</h1>}
                {bannerSubheader && <p className="text-white leading-normal font-bold lg:text-lg md:max-w-screen-sm lg:max-w-screen-md" >{bannerSubheader}</p>}
                <BlogButtons blogButtons={blogButtons} categoryLabel={categoryLabel} />
            </div>
        );
    }

    return (<div className={`section-padded z-[2] ${bannerTextPlacement === 'bottom' ? 'lg:mb-4 xl:mb-6' : ''}`}>
        {bannerHeader && <h1 className={`${bannerSubheader ? 'smaller' : ''} md:max-w-screen-sm lg:max-w-screen-md lg:-translate-x-1`}>{bannerHeader}</h1>}
        {bannerSubheader && <p className="text-white leading-normal font-bold lg:text-lg md:max-w-screen-sm lg:max-w-screen-md" >{bannerSubheader}</p>}
        {(bannerCallToActionLink && bannerCallToActionText) && <Button label={bannerCallToActionText} />}
    </div>)
};

const BlogButtons = ({ blogButtons, categoryLabel }) => {
    const { filter, setFilter } = useContext(BlogFilterContext);

    useEffect(() => {
        setFilter(blogButtons[0].slug);
    }, []);

    const handleClick = (event, slug) => {
        event.preventDefault();
        setFilter(slug);
    };

    return (
        <div>
            {/* <span className="text-primary">{filter}</span> */}
            <div className="flex flex-row flex-wrap justify-start gap-2 md:gap-4 pt-1 md:pt-4">
                {blogButtons.map((button, index) => {
                    return <Link key={index} onClick={(event) => { handleClick(event, button.slug) }} slug={button.slug} href="/blog/c/[category]" as={`/blog/c/${button.slug}`}>
                        <Button label={button.categoryName} shortLabel={button.buttonShortName} type="filter" active={filter === button.slug} />
                    </Link>
                })}
            </div>
        </div>
    )
}

Banner.propTypes = {
    bannerTextPlacement: PropTypes.oneOf(['top', 'center', 'bottom']),
    bannerHeader: PropTypes.string,
    bannerSubheader: PropTypes.string,
    bannerCallToActionLink: PropTypes.string,
    bannerCallToActionText: PropTypes.string,
    bannerImage: PropTypes.string,
};

Banner.defaultProps = {
    bannerTextPlacement: 'center',
    bannerHeader: 'Banner Header',
    bannerSubheader: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
}