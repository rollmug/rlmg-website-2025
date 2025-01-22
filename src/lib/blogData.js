import { getClient } from "./client";
import { gql } from "@apollo/client";
let cacheDelay = parseInt(process.env.CACHE_DELAY); //seconds, ie 120
export const revalidate = (Number.isInteger(cacheDelay) && cacheDelay > 0 ? cacheDelay : 120);

export const getBlogPostsByBlog = async (blogID) => {
    const client = getClient();
    const { data } = await client.query({
        query: blogPostsByBlogQuery,
        variables: {
            filter: {
                blog: {
                    id: {
                        _eq: blogID
                    }
                },
                published: {
                    _eq: true
                },
                postDate: {
                    _lt: "$NOW(-5 hours)"
                }
            },
            sort: ["-postDate"]
        }
    });
    return data.blogPosts;
};

const blogPostsByBlogQuery = gql`query BlogPosts($filter: blogPosts_filter, $sort: [String]) {
  blogPosts(filter: $filter, sort: $sort) {
    id
    postDate
    postTitle
    postSubtitle
    postTeaser
    postExcerpt
    published
    urlSlug
    customData
    categories {
      blogCategories_id {
        id
        categoryName
        slug
      }
    }
    metaData {
      navigationTitle
      metaDescription
      openGraphImage {
        id
        filename_disk
        filename_download
      }
      pageTitle
      socialMediaDescription
    }
    bannerImage {
        id
        filename_disk
        filename_download
    }
  }
}`;