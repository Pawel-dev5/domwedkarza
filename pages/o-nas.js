import dynamic from 'next/dynamic';

// API
import { getPrimaryMenu, getSubMenu, getFooter, getAboutUsPage } from '../lib/api';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const AboutUs = dynamic(() => import('../components/aboutUs'));

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems, aboutUsData }) => {
	return (
		<Layout
			menuItems={menuItems?.edges}
			subMenuItems={subMenuItems?.menuItems?.edges}
			footerItems={footerItems?.menuItems?.edges}
			headerImg={aboutUsData?.featuredImage?.node}
			headerText={aboutUsData?.title}
			seo={aboutUsData?.seo}
		>
			<AboutUs aboutUsData={aboutUsData} />
		</Layout>
	);
};

export default Index;

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const subMenuItems = (await getSubMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const aboutUsData = (await getAboutUsPage()) ?? null;

	return {
		props: {
			menuItems,
			subMenuItems,
			footerItems,
			aboutUsData,
		},
		revalidate: 300, // In seconds
	};
}
