import { fetchAPI } from './fetchAPI';

export async function getGalleryPage() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDoxNDM=") {
      id
      title
      content
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      galeria {
        galleryHeader
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
