import {
  getPrimaryMenu,
  getSubMenu,
  getFooter,
  getAktualnosciHeader,
} from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";

const Index = ({
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
  aktualnosciHeader,
}) => {
  return (
    <Layout
      menuItems={menuItems?.edges}
      subMenuItems={subMenuItems?.menuItems?.edges}
      footerItems={footerItems?.menuItems?.edges}
      headerText={aktualnosciHeader?.title}
      headerImg={aktualnosciHeader?.featuredImage?.node}
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
  const aktualnosciHeader = await getAktualnosciHeader();

  return {
    props: {
      menuItems,
      subMenuItems,
      footerItems,
      aktualnosciHeader,
    },
    revalidate: 10, // In seconds
  };
}
