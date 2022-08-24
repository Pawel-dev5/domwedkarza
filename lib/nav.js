import { fetchAPI } from './fetchAPI';

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
	return data?.menus?.nodes[0] ?? null;
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
	return data?.menus?.nodes[0] ?? null;
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
	return data?.menus?.nodes[0] ?? null;
}
