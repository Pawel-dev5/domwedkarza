import { fetchAPI } from './fetchAPI';

export async function getAktualnosciHeader() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDoyMjE=") {
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
