import { fetchAPI } from './fetchAPI';

export async function getOfferHeader() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDoyMDg=") {
     id
      title
      oNas {
        naglowekListy
        lista
      }
      featuredImage {
        node {
          sourceUrl
          altText
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
      oferta {
        header
        subheader
      }
    }
  }
`);
	return data?.pageBy;
}
