import {
  getPrimaryMenu,
  getSubMenu,
  getFooter,
  getMainGallery,
} from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
import HomePage from "../components/Home/HomePage";

const Home = ({
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
  mainGallery,
}) => (
  <Layout
    menuItems={menuItems?.edges}
    subMenuItems={subMenuItems?.menuItems?.edges}
    footerItems={footerItems?.menuItems?.edges}
  >
    <HomePage mainGallery={mainGallery?.node} />
  </Layout>
);

export async function getStaticProps() {
  const menuItems = await getPrimaryMenu();
  const subMenuItems = await getSubMenu();
  const footerItems = await getFooter();
  const mainGallery = await getMainGallery();

  return {
    props: {
      menuItems,
      subMenuItems,
      footerItems,
      mainGallery,
    },
    // revalidate: 10, // In seconds
  };
}

export default Home;
