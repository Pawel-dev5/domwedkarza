import { fetchAPI } from './fetchAPI';
export async function getPostAndMorePosts(slug, preview, previewData) {
	const postPreview = preview && previewData?.post;
	// The slug may be the id of an unpublished post
	const isId = Number.isInteger(Number(slug));
	const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
	const isDraft = isSamePost && postPreview?.status === 'draft';
	const isRevision = isSamePost && postPreview?.status === 'publish';
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
      author {
        node {
          ...AuthorFields
        }
      }
      sliderOffer {
        zdjecie1 {
          altText
          sourceUrl
        }
        zdjecie2 {
          altText
          sourceUrl
        }
        zdjecie3 {
          altText
          sourceUrl
        }
      }
      offerMenu {
        title
        menu {
          zdjecie1 {
            altText
            sourceUrl
          }
          zdjecie2 {
            altText
            sourceUrl
          }
        }
        pdf {
          altText
          sourceUrl
        }
      }
      seo {
        metadescription
        metatitle
        shareimage {
          altText
          sourceUrl
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
              sliderOffer {
                zdjecie1 {
                  altText
                  sourceUrl
                }
                zdjecie2 {
                  altText
                  sourceUrl
                }
                zdjecie3 {
                  altText
                  sourceUrl
                }
              }
              offerMenu {
                title
                menu {
                  zdjecie1 {
                    altText
                    sourceUrl
                  }
                  zdjecie2 {
                    altText
                    sourceUrl
                  }
                }
                pdf {
                  altText
                  sourceUrl
                }
              }
              seo {
                metadescription
                metatitle
                shareimage {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
        `
				: ''
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
				idType: isDraft ? 'DATABASE_ID' : 'SLUG',
			},
		},
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
