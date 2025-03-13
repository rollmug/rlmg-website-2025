'use client';

import React from "react";
import { twMerge } from 'tailwind-merge'; // import { clsx } from 'clsx';
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import BackgroundPlayer from 'next-video/background-player';
import Link from "next/link";
import encodeUrl from "encodeurl";

const formatImageURL = (image, presetKey) => {
    return `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/${image.id}/${encodeURIComponent(image.filename_download)}${presetKey ? `?key=${presetKey}` : ''}`;
};

export const BlogPostBanner = ({ postData }) => {
    const bannerImage = postData.bannerImage ? formatImageURL(postData.bannerImage) : null;
    const bannerBGVideo = postData.bannerBGVideo ? formatImageURL(postData.bannerBGVideo) : null;

    // if (!postData || !postData.postTitle || !postData.postSubtitle) return null;
    if (!postData || !postData.postTitle) return null;

    if (bannerImage && bannerBGVideo) {
        return (
            <>
                <BannerInfoHeader postData={postData} />
                <div className="w-full h-[360px] md:h-[480px] lg:h-[640px] xl:h-[800px] bg-neutral -mt-12 lg:-mt-20 xl:-mt-24 relative">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} className="absolute md:hidden inset-0 z-0">
                        <Image
                            src={bannerImage}
                            alt={postData.postTitle}
                            fill
                            className={`object-cover object-end `}
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} className="absolute inset-0 z-0 bg-neutral hidden md:block">
                        <BackgroundPlayer src={bannerBGVideo} className={`!hidden md:!grid overflow-hidden`} />
                        {/* poster={bannerImage} do we need this given that we have one above? */}
                    </motion.div>
                </div>
            </>
        );
    }

    return (
        <>
            <BannerInfoHeader postData={postData} />
            <div className="w-full h-[360px] md:h-[480px] lg:h-[640px] xl:h-[800px] bg-neutral -mt-12 lg:-mt-20 xl:-mt-24 relative">
                {(bannerImage) && (
                    <AnimatePresence>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} className="absolute inset-0 z-0">
                            <Image
                                src={bannerImage}
                                alt={postData.postTitle}
                                fill
                                className={`object-cover object-end `}
                            />
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </>
    );
};

const BannerInfoHeader = ({ postData }) => {
    let customData, classNames, justifyContent = 'justify-center';
    const blogSlug = postData.blog.urlSlug;

    if (postData.customData && postData.customData.length > 0) {
        customData = formatCustomData(postData.customData);
    }

    classNames = [
        `min-h-[calc(50vh)] pb-14 pt-14 sm:_pb-24`,
        `landscape:lg:pb-24`,
    ];

    const className = classNames.join(' ');
    const classesOutput = twMerge(`${justifyContent} ${className}`);

    return (
        <div className={`z-[2] banner-block relative bg-neutral slanted-less w-full flex flex-col ${classesOutput}`}>
            <div className={`section-padded z-[2]`}>
                <section className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div>
                        <h2 className="mt-0 text-lg/6 md:text-xl">{postData.postTitle}</h2>
                        {postData.postSubtitle && (
                            <p className="mt-0 text-base-100 leading-normal font-bold text-base/6 lg:text-lg md:max-w-screen-sm lg:max-w-screen-md">
                                {postData.postSubtitle}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col flex-wrap gap-y-1 gap-x-2 md:gap-x-5 max-h-[400px] md:max-h-[450px] lg:max-h-[300px] max-w-full overflow-hidden ">
                        {customData && <CustomDataBlock customData={customData} blogSlug={blogSlug} />}
                    </div>
                </section>
            </div>
        </div>
    );
};

const CustomDataBlock = ({ customData, blogSlug }) => {
    // border border-white border-opacity-10
    return (
        <>
            {customData.map((data, index) => {
                return (
                    <div key={index} className="">
                        <h4 className="text-base-100 font-extrabold text-[13px]/3 md:text-[15px]/3 text-nowrap">{data.dataLabel}</h4>
                        <ul className="list-none !ml-0">
                            {data.dataContent.map((content, index) => {
                                const linkable = data?.linkable || false;
                                // if (linkable) {
                                //     const label = makeUrlSafe(data.dataLabel);
                                //     const val = makeUrlSafe(content);
                                //     const url = encodeUrl(`/${blogSlug}/t/${label}/${val}`);
                                //     return (
                                //         <li key={index} className="text-base-100 pb-1 text-[13px]/3 md:text-sm/5 max-w-[18ch] xl:max-w-[22ch]">
                                //             <Link href={url} className="underline mb-1 md:mb-0 inline-block">
                                //                 {content}
                                //             </Link>
                                //         </li>
                                //     );
                                // }
                                return (
                                    <li key={index} className="text-base-100 text-[13px]/4 md:text-sm/5 pb-1 max-w-[16ch] xl:max-w-[22ch]">
                                        {content}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </>
    );
};

const formatCustomData = (customData) => {
    let formattedData = [];
    customData.forEach((data) => {
        const dataItem = {
            dataLabel: data.dataLabel,
            dataContent: formatDataContent(data.dataContent),
            linkable: data?.linkable || false
        };
        formattedData.push(dataItem);
    });
    return formattedData;
};

const formatDataContent = (dataContent) => {
    let formattedData = [];
    dataContent.forEach((data) => {
        formattedData.push(data.contentOption);
    });
    return formattedData;
};

function makeUrlSafe(string) {
    return string
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9-/ ]/g, '') // Remove special characters except slashes
        .replace(/\//g, '-') // Replace slashes with hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with a single one
}

export const testData = {
    "id": "4",
    "postDate": "2025-01-23T07:12:00",
    "postTitle": "Carnegie Science Center",
    "postSubtitle": "Mars: The Next Giant Leap",
    "postTeaser": "Short teaser line of text here to tease the project/give a bit more info.",
    "postExcerpt": "Carnegie Science Center’s 7500 sf permanent gallery, Mars: The Next Giant Leap, sends visitors on a 300-million-mile journey to discover how space exploration and the latest thinking about how to sustain life on another planet can improve our lives on Earth today.",
    "published": true,
    "urlSlug": "carnegie",
    "metaData": {
        "metaDescription": "Mars: The Next Giant Leap sends visitors on a 300-million-mile journey to discover space exploration.",
        "navigationTitle": "Carnegie",
        "openGraphImage": null,
        "pageTitle": "Carnegie Science Center",
        "socialMediaDescription": "Mars: The Next Giant Leap sends visitors on a 300-million-mile journey to discover space exploration."
    },
    "blog": {
        "id": "037a336d-0870-4fff-b0ea-67c9631c4f21",
        "blogName": "Our Work",
        "urlSlug": "work"
    },
    "categories": [
        {
            "blogCategories_id": {
                "id": "1",
                "slug": "featured",
                "categoryName": "Featured Projects",
                "buttonShortName": "Featured",
                "description": null
            }
        },
        {
            "blogCategories_id": {
                "id": "2",
                "slug": "museum",
                "categoryName": "Museum",
                "buttonShortName": null,
                "description": null
            }
        },
        {
            "blogCategories_id": {
                "id": "5",
                "slug": "experiential",
                "categoryName": "Experiential",
                "buttonShortName": null,
                "description": null
            }
        }
    ],
    "customData": [
        {
            "linkable": false,
            "dataLabel": "Location",
            "dataContent": [
                {
                    "contentOption": "Pittsburg, PA"
                }
            ]
        },
        {
            "linkable": false,
            "dataLabel": "Year Completed",
            "dataContent": [
                {
                    "contentOption": "2023"
                }
            ]
        },
        {
            "linkable": false,
            "dataLabel": "Partners",
            "dataContent": [
                {
                    "contentOption": "Luci Creative"
                },
                {
                    "contentOption": "Electrosonic"
                },
                {
                    "contentOption": "Ravenswood Studio"
                }
            ]
        },
        {
            "linkable": true,
            "dataLabel": "Services",
            "dataContent": [
                {
                    "contentOption": "Concept Development"
                },
                {
                    "contentOption": "User Interface Design"
                },
                {
                    "contentOption": "Software Development"
                },
                {
                    "contentOption": "Graphic/Visual Design"
                },
                {
                    "contentOption": "Illustration"
                },
                {
                    "contentOption": "Animation"
                },
                {
                    "contentOption": "CMS Development"
                }
            ]
        },
        {
            "linkable": true,
            "dataLabel": "Project Type",
            "dataContent": [
                {
                    "contentOption": "Museum"
                }
            ]
        },
        {
            "linkable": false,
            "dataLabel": "Awards",
            "dataContent": [
                {
                    "contentOption": "ASTC’s Roy L. Shafer Edge Award for Visitor Experience"
                }
            ]
        }
    ],
    "bannerImage": {
        "id": "359dc863-02f8-4e49-9efc-7b44ade4e736",
        "filename_download": "carnegie.jpg",
        "filename_disk": "359dc863-02f8-4e49-9efc-7b44ade4e736.jpg"
    },
    "bannerBGVideo": {
        "id": "3dbe074a-68bf-491f-901a-9613d730ac56",
        "filename_download": "Carnegie-clip-slow-opt-FINAL-opt.mp4",
        "filename_disk": "3dbe074a-68bf-491f-901a-9613d730ac56.mp4"
    }
}
