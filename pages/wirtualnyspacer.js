import dynamic from "next/dynamic";

import {
  getPrimaryMenu,
  getSubMenu,
  getFooter,
  getVirtualWalkHeader,
} from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
const VirtualWalk = dynamic(() => import("../components/VirtualWalk"));

const Index = ({
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
  virtualWalk,
}) => {
  return (
    <Layout
      menuItems={menuItems?.edges}
      subMenuItems={subMenuItems?.menuItems?.edges}
      footerItems={footerItems?.menuItems?.edges}
      headerText={virtualWalk?.title}
      headerImg={virtualWalk?.featuredImage?.node}
    >
      <VirtualWalk iframe={virtualWalk?.content} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const menuItems = (await getPrimaryMenu()) ?? null;
  const subMenuItems = (await getSubMenu()) ?? null;
  const footerItems = (await getFooter()) ?? null;
  const virtualWalk = (await getVirtualWalkHeader()) ?? null;

  return {
    props: {
      menuItems,
      subMenuItems,
      footerItems,
      virtualWalk,
    },
    revalidate: 10, // In seconds
  };
}
