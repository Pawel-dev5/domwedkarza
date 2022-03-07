import Layout from "../components/Layout/layout";
import { getPrimaryMenu, getSubMenu } from "../lib/api";

const Home = ({ menuItems: { menuItems }, subMenuItems }) => (
  <Layout
    menuItems={menuItems?.edges}
    subMenuItems={subMenuItems?.menuItems?.edges}
  >
    <main>
      <span>content</span>
    </main>
  </Layout>
);

export async function getStaticProps() {
  const menuItems = await getPrimaryMenu();
  const subMenuItems = await getSubMenu();

  return {
    props: {
      menuItems,
      subMenuItems,
    },
    // revalidate: 10, // In seconds
  };
}

export default Home;
