import React from "react";
import { notFound } from 'next/navigation';
import { ContentSection } from "./ContentSection";
import { Banner } from "@/components/ui/Banner";
import { formatImageURL } from "@/lib/webData";
import { TextWithImage } from "../content-blocks/TextWithImage";
import { FeaturedPosts } from "../content-blocks/FeaturedPosts";
import { BannerImageColumnText } from "../content-blocks/BannerImageColumnText";
import { TextOnlyHero } from "../content-blocks/TextOnlyHero";
import { ResponsiveColumns } from "../content-blocks/ResponsiveColumns";
import { Quote } from "../content-blocks/Quote";
import { ColumnText } from "../content-blocks/ColumnText";
import { ColumnImages } from "../content-blocks/ColumnImages";
import Image from "next/image";

import { getBlogPostsByBlog } from "@/lib/blogData";

import { marked } from "marked";
import { stripHtml } from "string-strip-html";
import smartquotes from "smartquotes";
import { BlogMainPage } from "./Blog";

export const ContentBlocks = async ({ data }) => {
    const blocks = data.contentBlocks;
    const pageData = data.pageData;

    const bannerVars = [
        'bannerTextPlacement',
        'bannerHeader',
        'bannerSubheader',
        'bannerCallToActionLink',
        'bannerCallToActionText',
        'bannerImage',
        'bannerBGVideo'
    ];

    if (pageData.pageType === 'page') {
        return (
            <>
                {
                    bannerVars.some((varName) => pageData[varName]) && (
                        <Banner
                            bannerTextPlacement={pageData.bannerTextPlacement}
                            bannerHeader={pageData.bannerHeader}
                            bannerSubheader={pageData.bannerSubheader}
                            bannerCallToActionLink={pageData.bannerCallToActionLink}
                            bannerCallToActionText={pageData.bannerCallToActionText}
                            bannerImage={pageData?.bannerImage?.id ? formatImageURL(pageData.bannerImage) : null}
                            bannerBGVideo={pageData?.bannerBGVideo?.id ? formatImageURL(pageData.bannerBGVideo) : null}
                        />
                    )
                }

                {
                    blocks.map((block, index) => <ContentBlock key={index} block={block} />)
                }
            </>
        );

    } else if (pageData.pageType === 'blog') {
        const blogData = pageData.connectedBlog;
        const posts = await getBlogPostsByBlog(blogData.id);

        const blogButtons = blogData.blogCategories.map((category) => {
            return {
                categoryName: category.blogCategories_id.categoryName,
                buttonShortName: category.blogCategories_id.buttonShortName,
                slug: category.blogCategories_id.slug
            };
        });

        return (
            <>
                <Banner
                    bannerTextPlacement={`center`}
                    bannerHeader={blogData.blogName}
                    bannerSubheader={blogData.blogDescription}
                    blogButtons={blogButtons}
                    isBlog={true}
                />
                
                <BlogMainPage blogData={blogData} posts={posts} />

                {
                    blocks.map((block, index) => <ContentBlock key={index} block={block} />)
                }
            </>
        );
    } else {
        notFound();
    }
};

const ContentBlock = ({ block }) => {
    const collection = block.collection;
    const item = block.item;
    if (!collection || !item) return null;

    let text, posts, textBlocks, mainText, images;

    // console.log('item:', item);

    switch (collection) {
        case 'block_textWithImage':
            text = smartquotes(stripHtml(marked.parse(item.content), {
                ignoreTags: ['p', 'i', 'em', 'b', 'strong', 'ul', 'li']
            }).result);

            return <TextWithImage
                header={item.headerText}
                subheader={item.subheaderText}
                text={text}
                image={item.image.id ? formatImageURL(item.image) : null}
                width={600}
                alt="Test image"
                imagePlacement={item.alignment === 'image_right' ? 'right' : 'left'}
                className={`my-2 mt-6 lg:my-8`}
            />;
            break;

        case 'block_featuredPosts':

            posts = item.posts.map((item) => {
                const post = item.blogPosts_id;
                const urlSlug = `/${post.blog.urlSlug}/${post.urlSlug}`;
                return {
                    bannerImage: post.bannerImage.id ? formatImageURL(post.bannerImage) : null,
                    postTeaser: post.postTeaser,
                    postTitle: post.postTitle,
                    urlSlug: urlSlug
                };
            });

            return <FeaturedPosts
                headerText={item.headerText}
                linkToPage={item.linkToPage.urlSlug ? `/${item.linkToPage.urlSlug}` : null}
                buttonText={item.buttonText}
                posts={posts}
                standout={true}
            />;
            break;

        case 'block_bannerImageWithDetails':

            textBlocks = item.textBlocks.map((block) => {
                const text = smartquotes(stripHtml(marked.parse(block.content), {
                    ignoreTags: ['p', 'i', 'em', 'b', 'strong', 'ul', 'li']
                }).result);
                return { content: text };
            });

            return <BannerImageColumnText
                headerText={item.headerText}
                subheaderText={item.subheaderText}
                textBlocks={textBlocks}
                image={item.image.id ? formatImageURL(item.image) : null}
                buttonText={item.buttonText}
                buttonURL={item.buttonURL}
            />;
            break;

        case 'block_textOnlyHero':
            // headerText, mainText, buttonText, buttonURL, className
            mainText = smartquotes(stripHtml(marked.parse(item.mainText), {
                ignoreTags: ['i', 'em', 'b', 'strong', 'ul', 'li']
            }).result);
            return <TextOnlyHero
                headerText={item.headerText}
                mainText={mainText}
                buttonText={item.buttonText}
                buttonURL={item.buttonURL}
                className=""
            />;
            break;

        case 'block_responsiveColumnText':
            textBlocks = item.textBlocks.map((block) => {
                const text = smartquotes(stripHtml(marked.parse(block.content), {
                    ignoreTags: ['p', 'h2', 'h3', 'i', 'em', 'b', 'strong', 'ul', 'li']
                }).result);
                return { content: text };
            });

            return <ResponsiveColumns
                headerText={item.headerText}
                subheaderText={item.subheaderText}
                textBlocks={textBlocks}
                buttonText={item.buttonText}
                buttonURL={item.buttonURL}
            />;
            break;

        case 'block_quoteBlock':
            return <Quote
                quoteText={item.quoteText}
                sourceAuthor={item.sourceAuthor}
                sourceOrg={item.sourceOrg}
                template={item.template}
            />;
            break;

        case 'block_columnText':
            textBlocks = item.columnText.map((block) => {
                const text = smartquotes(stripHtml(marked.parse(block.content), {
                    ignoreTags: ['p', 'i', 'em', 'b', 'strong', 'ul', 'li']
                }).result);
                return { content: text };
            });
            return <ColumnText
                headerText={item.headerText}
                columnText={textBlocks}
                columnSize={item.columnSize}
                standout={true}
            />;

        case 'block_ColumnImages':
            images = item.columnImages.map((image) => {
                const img = image.directus_files_id;
                return {
                    src: formatImageURL(img),
                    alt: '',
                    width: img.width,
                    height: img.height
                };
            });
            return <ColumnImages
                headerText={item.headerText}
                columnImages={images}
                columnSize={item.columnSize}
                className={item.className}
            />;

        default:
            const formattedJson = JSON.stringify(block, null, 2);
            return (
                <ContentSection>
                    <section className={`section-padded`}>
                        <h3>{block.collection}</h3>
                        <pre className="text-xs">
                            <code>
                                {formattedJson}
                            </code>
                        </pre>
                    </section>
                </ContentSection>
            );
    }
};