import dynamic from "next/dynamic";

// API
import {
  getPrimaryMenu,
  getSubMenu,
  getFooter,
  getGalleryPage,
} from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
const Gallery = dynamic(() => import("../components/gallery"));

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
      headerText={galleryPage?.title}
      headerImg={galleryPage?.featuredImage?.node}
      subHeaderText={galleryPage?.galeria?.galeria?.galleryText}
    >
      <Gallery data={galleryPage?.galeria?.galeria} />
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
