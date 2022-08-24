import { fetchAPI } from './fetchAPI';

export async function getAboutUsPage() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDoyMDE=") {
      id
      title
      oNas {
        lista
        naglowekListy
        header1
        header2
        text1
        text2
        text3
        zdjecie1 {
          altText
          sourceUrl
        }
        zdjecie2 {
          altText
          sourceUrl
        }
      }
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
