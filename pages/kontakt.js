import { getPrimaryMenu, getSubMenu, getFooter } from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
import Kontakt from "../components/kontact";

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems }) => (
  <Layout
    menuItems={menuItems?.edges}
    subMenuItems={subMenuItems?.menuItems?.edges}
    footerItems={footerItems?.menuItems?.edges}
  >
    <Kontakt
      footerItems={footerItems?.menuItems?.edges}
      subMenuItems={subMenuItems?.menuItems?.edges}
    />
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
    revalidate: 10, // In seconds
  };
}

export default Index;
