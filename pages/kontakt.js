import {
  getPrimaryMenu,
  getSubMenu,
  getFooter,
  getKontaktHeader,
} from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
import Kontakt from "../components/kontact";

const Index = ({
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
  kontaktHeader,
}) => (
  <Layout
    menuItems={menuItems?.edges}
    subMenuItems={subMenuItems?.menuItems?.edges}
    footerItems={footerItems?.menuItems?.edges}
    headerText={kontaktHeader?.title}
    headerImg={kontaktHeader?.featuredImage?.node}
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
  const kontaktHeader = await getKontaktHeader();

  return {
    props: {
      menuItems,
      subMenuItems,
      footerItems,
      kontaktHeader,
    },
    revalidate: 10, // In seconds
  };
}

export default Index;
