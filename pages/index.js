import { getPrimaryMenu, getSubMenu, getFooter, getHomePage } from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
import HomePage from "../components/Home/HomePage";

const Home = ({
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
  homePage,
  setAsideMenu,
  asideMenu,
}) => (
  <Layout
    setAsideMenu={setAsideMenu}
    asideMenu={asideMenu}
    menuItems={menuItems?.edges}
    subMenuItems={subMenuItems?.menuItems?.edges}
    footerItems={footerItems?.menuItems?.edges}
  >
    <HomePage mainData={homePage?.node} />
  </Layout>
);

export async function getStaticProps() {
  const menuItems = await getPrimaryMenu();
  const subMenuItems = await getSubMenu();
  const footerItems = await getFooter();
  const homePage = await getHomePage();

  return {
    props: {
      menuItems,
      subMenuItems,
      footerItems,
      homePage,
    },
    revalidate: 10, // In seconds
  };
}

export default Home;
