import dynamic from 'next/dynamic';

// API
import { getPrimaryMenu, getSubMenu, getFooter, getAktualnosciHeader } from '../lib/api';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const FacebookWall = dynamic(() => import('../components/FacabookWall'));

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems, aktualnosciHeader }) => {
	return (
		<Layout
			menuItems={menuItems?.edges}
			subMenuItems={subMenuItems?.menuItems?.edges}
			footerItems={footerItems?.menuItems?.edges}
			headerText={aktualnosciHeader?.title}
			headerImg={aktualnosciHeader?.featuredImage?.node}
			seo={aktualnosciHeader?.seo}
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
		revalidate: 300, // In seconds
	};
}
