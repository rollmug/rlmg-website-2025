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
import { BlogPostBanner } from "../ui/BlogBanner";
import { RichText } from "../content-blocks/RichText";

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
    } else if (pageData.pageType === 'blogPost') {
        return (
            <>
                <BlogPostBanner postData={pageData} />

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
        case 'block_textOnly':
            const blockData = parseRichTextData(item);

            // const js = JSON.stringify(blockData, null, 2);
            return (
                <RichText content={blockData} />
            );

            break;
        case 'block_textWithImage':
            text = smartquotes(stripHtml(marked.parse(item.content), {
                ignoreTags: ['p', 'i', 'em', 'b', 'strong', 'ul', 'li']
            }).result);

            return <TextWithImage
                header={item.headerText
                }
                subheader={item.subheaderText}
                text={text}
                image={item.image.id ? formatImageURL(item.image) : null}
                width={600}
                alt="Test image"
                imagePlacement={item.alignment === 'image_right' ? 'right' : 'left'}
                className={`my-2 mt-6 lg:my-8`
                }
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

const parseRichTextData = (data) => {
    const blocks = data.text.blocks;
    const text = blocks.map((block) => {
        return {
            id: block.id,
            type: block.type,
            data: block.data
        };
    });

    return text;
};

const sampleData = {
    "item": {
        "__typename": "block_textOnly",
        "id": "bf48f0d2-2000-4aa4-9185-66e8974e839e",
        "text": {
            "time": 1737656152540,
            "blocks": [
                {
                    "id": "cujRuVKryY",
                    "data": {
                        "text": "Carnegie",
                        "level": 2
                    },
                    "type": "header"
                },
                {
                    "id": "EkS0xF2mO-",
                    "data": {
                        "text": "Carnegie Science Center’s 7500 sf permanent gallery, Mars: The Next Giant Leap, sends visitors on a 300-million-mile journey to discover how space exploration and the latest thinking about how to sustain life on another planet can improve our lives on Earth today. Seven highly-integrated and interactive media experiences reveal the visions, challenges, and solutions of a Martian society, highlighting what it takes to create an equitable future no matter what planet we live on."
                    },
                    "type": "paragraph"
                }
            ],
            "version": "2.29.1"
        }
    }
}