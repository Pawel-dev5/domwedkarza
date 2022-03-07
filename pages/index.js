import Layout from "../components/Layout/layout";
import { getPrimaryMenu, getSubMenu, getFooter } from "../lib/api";

const Home = ({ menuItems: { menuItems }, subMenuItems, footerItems }) => (
  <Layout
    menuItems={menuItems?.edges}
    subMenuItems={subMenuItems?.menuItems?.edges}
    footerItems={footerItems?.menuItems?.edges}
  >
    <main>
      <span>content</span>
    </main>
  </Layout>
);

export async function getStaticProps() {
  const menuItems = await getPrimaryMenu();
  const subMenuItems = await getSubMenu();
  const footerItems = await getFooter();

  return {
    props: {
      menuItems,
      subMenuItems,
      footerItems,
    },
    // revalidate: 10, // In seconds
  };
}

export default Home;
