import dynamic from "next/dynamic";

// API
import {
  getPrimaryMenu,
  getSubMenu,
  getFooter,
  getKontaktHeader,
  getConfig,
} from "../lib/api";

// COMPONENTS
import Layout from "../components/Layout/layout";
const Kontakt = dynamic(() => import("../components/kontact"));

const Index = ({
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
  kontaktData,
  formConfig,
}) => (
  <Layout
    menuItems={menuItems?.edges}
    subMenuItems={subMenuItems?.menuItems?.edges}
    footerItems={footerItems?.menuItems?.edges}
    headerText={kontaktData?.title}
    headerImg={kontaktData?.featuredImage?.node}
  >
    <Kontakt
      footerItems={footerItems?.menuItems?.edges}
      subMenuItems={subMenuItems?.menuItems?.edges}
      userId={formConfig?.userId}
      serviceId={formConfig?.serviceId}
      tamplateId={formConfig?.tamplateId}
      {...kontaktData?.kontakt}
    />
  </Layout>
);

export async function getStaticProps() {
  const menuItems = (await getPrimaryMenu()) ?? null;
  const subMenuItems = (await getSubMenu()) ?? null;
  const footerItems = (await getFooter()) ?? null;
  const kontaktData = (await getKontaktHeader()) ?? null;
  const formConfig = (await getConfig()) ?? null;

  return {
    props: {
      menuItems,
      subMenuItems,
      footerItems,
      kontaktData,
      formConfig,
    },
    revalidate: 10, // In seconds
  };
}

export default Index;
