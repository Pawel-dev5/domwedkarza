import { getPrimaryMenu, getSubMenu, getFooter } from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems }) => {
  return (
    <Layout
      menuItems={menuItems?.edges}
      subMenuItems={subMenuItems?.menuItems?.edges}
      footerItems={footerItems?.menuItems?.edges}
    >
      <span>Aktualności</span>
    </Layout>
  );
};

export default Index;

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
    revalidate: 10, // In seconds
  };
}
