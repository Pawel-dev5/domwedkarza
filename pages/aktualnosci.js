import {
  getPrimaryMenu,
  getSubMenu,
  getFooter,
  getAktualnosciHeader,
} from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
import FacebookWall from "../components/FacabookWall";

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
      <FacebookWall content={aktualnosciHeader?.content} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const menuItems = (await getPrimaryMenu()) ?? null;
  const subMenuItems = (await getSubMenu()) ?? null;
  const footerItems = (await getFooter()) ?? null;
  const aktualnosciHeader = (await getAktualnosciHeader()) ?? null;

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
