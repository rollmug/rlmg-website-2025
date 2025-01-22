import React from "react";
import { BlogPostsList } from "./BlogPostsList";

const simplifyCategories = (categories) => {
    return categories.map((category) => {
        return {
            id: category.blogCategories_id.id,
            name: category.blogCategories_id.categoryName,
            slug: category.blogCategories_id.slug,
            buttonShortName: category.blogCategories_id.buttonShortName,
        };
    });
};

const getPostsByCategory = (posts, category) => {
    return posts.filter((post) => {
        return post.categories.some((postCategory) => {
            return postCategory.blogCategories_id.slug === category.slug;
        });
    });
};

export const BlogMainPage = ({ blogData, posts }) => {
    const blogCategories = blogData.blogCategories;
    // const categories = simplifyCategories(blogCategories);
    // console.log('categories:', categories);
    // console.log('posts:', posts);

    console.log('blogData:', blogData);

    return (
        <>
            {blogCategories.map((category, index) => {
                const categoryName = category.blogCategories_id.categoryName;
                const slug = category.blogCategories_id.slug;
                const categoryPosts = getPostsByCategory(posts, category.blogCategories_id);
                console.log(`Category "${categoryName}":`, categoryPosts);

                return (
                    <BlogPostsList key={index} blogData={blogData} slug={slug} categoryName={categoryName} posts={categoryPosts} />
                );
            })}
        </>
    );
}