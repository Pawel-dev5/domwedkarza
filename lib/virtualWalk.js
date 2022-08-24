import { fetchAPI } from './fetchAPI';

export async function getVirtualWalkHeader() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDozMTU=") {
      id
      title
      content
      featuredImage {
        node {
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
`);
	return data?.pageBy;
}
