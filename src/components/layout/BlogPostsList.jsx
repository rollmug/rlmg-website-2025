'use client';

import React, { useContext } from "react";
import { BlogFilterContext } from "@/app/blogFilterContext";
import { AnimatePresence, motion } from "framer-motion";
import { FeaturedPosts } from "../content-blocks/FeaturedPosts";
import { ContentSection } from "./ContentSection";
import { FaCircleExclamation } from "react-icons/fa6";

const formatImageURL = (image, presetKey) => {
    return `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/${image.id}/${image.filename_download}${presetKey ? `?key=${presetKey}` : ''}`;
};

export const BlogPostsList = ({ blogData, categoryName, slug, posts }) => {
    const { filter } = useContext(BlogFilterContext);

    const transition = { duration: .5, ease: [.25, .1, .25, 1] };
    const variants = {
        hidden: { filter: "blur(10px)", transform: "translateY(2rem)", opacity: 0 },
        visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
    };

    let allPosts = [];

    if (posts.length > 0) {
        allPosts = posts.map((post) => {
            return {
                postTitle: post.postTitle,
                postTeaser: post.postTeaser,
                urlSlug: `/${blogData.urlSlug}/${post.urlSlug}`,
                bannerImage: formatImageURL(post.bannerImage),
            };
        });
    }

    return (
        <>
            <AnimatePresence>
                {(filter === slug) && (
                    <motion.div initial={variants.hidden} animate={variants.visible} transition={transition} className="">
                        {posts.length === 0 ? (
                            <ContentSection>
                                <div className={`section-padded mt-12 md:mt-6 lg:mt-2 mb-10 lg:mb-16`}>
                                    <h2>{categoryName}</h2>
                                    <div className="alert mt-8">
                                        <FaCircleExclamation className="w-6 h-6" />
                                        <span>No posts found for {categoryName}. Check back soon!</span>
                                    </div>
                                </div>
                            </ContentSection>
                        ) : (
                            <FeaturedPosts headerText={categoryName} posts={allPosts} className={`mt-12 md:mt-6 lg:mt-2 mb-10 lg:mb-16`} disableAnimations={true} />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};