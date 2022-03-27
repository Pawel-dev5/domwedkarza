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
  kontaktHeader,
  formConfig,
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
      userId={formConfig?.userId}
      serviceId={formConfig?.serviceId}
      tamplateId={formConfig?.tamplateId}
    />
  </Layout>
);

export async function getStaticProps() {
  const menuItems = (await getPrimaryMenu()) ?? null;
  const subMenuItems = (await getSubMenu()) ?? null;
  const footerItems = (await getFooter()) ?? null;
  const kontaktHeader = (await getKontaktHeader()) ?? null;
  const formConfig = (await getConfig()) ?? null;

  return {
    props: {
      menuItems,
      subMenuItems,
      footerItems,
      kontaktHeader,
      formConfig,
    },
    revalidate: 10, // In seconds
  };
}

export default Index;
