const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            excerpt
            content
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                }
              }
            }
            tags {
              edges {
                node {
                  name
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
        id
        title
      excerpt
      slug
      date
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

export async function getNavItems(preview) {
  const data = await fetchAPI(
    `
    query NavItems {
      menuItems {
        edges {
          node {
            id
            url
            label
          }
        }
        nodes {
          url
          label
          id
        }
      }
    }
    
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.menuItems;
}
export async function getPrimaryMenu() {
  const data = await fetchAPI(`
  {
    menus(where: {location: PRIMARY}) {
      nodes {
        menuItems {
          edges {
            node {
              id
              path
              label
            }
          }
        }
      }
    }
  }
  `);
  return data?.menus?.nodes[0];
}

export async function getSubMenu() {
  const data = await fetchAPI(`
  {
    menus(where: {location: SOCIAL}) {
      nodes {
        menuItems {
          edges {
            node {
              id
              path
              label
            }
          }
        }
      }
    }
  }
  `);
  return data?.menus?.nodes[0];
}

export async function getFooter() {
  const data = await fetchAPI(`
  {
    menus(where: {location: FOOTER}) {
      nodes {
        menuItems {
          edges {
            node {
              id
              path
              label
            }
          }
        }
      }
    }
  }
  
  `);
  return data?.menus?.nodes[0];
}

export async function getHomePage() {
  const data = await fetchAPI(`
  {
    pages(where: {title: "Strona główna"}) {
      edges {
        node {
          id
          title
          galeriaGlowna {
            zdjecie2 {
              altText
              sourceUrl
              id
            }
            zdjecie3 {
              sourceUrl
              altText
              id
            }
            zdjecie4 {
              sourceUrl
              altText
              id
            }
            zdjecie5 {
              sourceUrl
              altText
              id
            }
            zdjecie1 {
              sourceUrl
              altText
              id
            }
          }
          sekcjaDruga {
            przycisk
            naglowek
          }
          glownaWideo {
            wideo
          }
          sekcjaTrzecia {
            zdjecie1 {
              altText
              id
              sourceUrl
            }
            zdjecie2 {
              altText
              id
              sourceUrl
            }
            zdjecie3 {
              altText
              id
              sourceUrl
            }
            zdjecie4 {
              altText
              id
              sourceUrl
            }
          }
          glownaNaglowek {
            glownaNaglowek
          }
        }
      }
    }
  }
  
  `);
  return data?.pages?.edges[0];
}
