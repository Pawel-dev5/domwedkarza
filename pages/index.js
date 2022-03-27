import { getPrimaryMenu, getSubMenu, getFooter, getHomePage } from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
import HomePage from "../components/Home/HomePage";

const Home = ({
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
  homePage,
}) => (
  <Layout
    menuItems={menuItems?.edges}
    subMenuItems={subMenuItems?.menuItems?.edges}
    footerItems={footerItems?.menuItems?.edges}
  >
    <HomePage mainData={homePage?.node} />
  </Layout>
);

export async function getStaticProps() {
  const menuItems = (await getPrimaryMenu()) ?? null;
  const subMenuItems = (await getSubMenu()) ?? null;
  const footerItems = (await getFooter()) ?? null;
  const homePage = (await getHomePage()) ?? null;

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
