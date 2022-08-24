import { fetchAPI } from './fetchAPI';

const USER_ID = process.env.USER_ID;
const TAMPLATE_ID = process.env.TAMPLATE_ID;
const SERVICE_ID = process.env.SERVICE_ID;

export async function getContacttHeader() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDoyMTk=") {
      id
      title
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      kontakt {
        adres {
          adres
          fieldGroupName
          nip
          tytul
        }
        sprawdzTez {
          altText
          sourceUrl
        }
        telefon {
          email
          telefon
          telefon2
          tytul
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

export async function getConfig() {
	const config = {
		userId: USER_ID,
		serviceId: SERVICE_ID,
		tamplateId: TAMPLATE_ID,
	};

	return config;
}
