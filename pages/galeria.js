import {
  getPrimaryMenu,
  getSubMenu,
  getFooter,
  getGalleryPage,
} from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
import Gallery from "../components/gallery";

const Index = ({
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
  galleryPage,
}) => {
  return (
    <Layout
      menuItems={menuItems?.edges}
      subMenuItems={subMenuItems?.menuItems?.edges}
      footerItems={footerItems?.menuItems?.edges}
    >
      <Gallery data={galleryPage?.node?.galeria?.galeria} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const menuItems = await getPrimaryMenu();
  const subMenuItems = await getSubMenu();
  const footerItems = await getFooter();
  const galleryPage = await getGalleryPage();

  return {
    props: {
      menuItems,
      subMenuItems,
      footerItems,
      galleryPage,
    },
    revalidate: 10, // In seconds
  };
}
