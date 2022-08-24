import { fetchAPI } from './fetchAPI';

export async function getHomePage() {
	const data = await fetchAPI(`
  {
    pages(where: {title: "Strona główna"}) {
      edges {
        node {
          id
          title
          galeriaglownastronaglowna {
            galeriaglownastronaglownaZdjecie1 {
              altText
              sourceUrl
              id
            }
            galeriaglownastronaglownaZdjecie2 {
              sourceUrl
              altText
              id
            }
            galeriaglownastronaglownaZdjecie3 {
              sourceUrl
              altText
              id
            }
            galeriaglownastronaglownaZdjecie4 {
              sourceUrl
              altText
              id
            }
            galeriaglownastronaglownaZdjecie5 {
              sourceUrl
              altText
              id
            }
          }
          sekcjaDruga {
            przycisk {
              text
              url
            }
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
            glownaNaglowek2
          }
          features {
            features {
              feature1 {
                feature1Header
                feature1Text
                icon {
                  id
                  altText
                  sourceUrl
                }
              }
              feature2 {
                feature1Header
                feature1Text
                icon {
                  id
                  altText
                  sourceUrl
                }
              }
              feature3 {
                feature1Header
                feature1Text
                icon {
                  id
                  altText
                  sourceUrl
                }
              }
              feature4 {
                feature1Header
                feature1Text
                icon {
                  id
                  altText
                  sourceUrl
                }
              }
            }
            featuresHeading
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
  }
   `);
	return data?.pages?.edges[0];
}

export async function getAllPostsForHome(preview) {
	const data = await fetchAPI(
		`
    query AllPosts {
      posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
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
    }
  `,
		{
			variables: {
				onlyEnabled: !preview,
				preview,
			},
		},
	);

	return data?.posts;
}
