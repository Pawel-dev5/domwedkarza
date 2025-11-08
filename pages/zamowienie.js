import dynamic from 'next/dynamic';

// API
import { getPrimaryMenu, getSubMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const Order = dynamic(() => import('../components/Order'));

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems }) => {
	return (
		<>
			<Layout
				menuItems={menuItems?.edges}
				subMenuItems={subMenuItems?.menuItems?.edges}
				footerItems={footerItems?.menuItems?.edges}
				headerText="Zamówienie"
				headerImg={null}
				seo={{ metatitle: 'Zamówienie', metadescription: 'Zamówienie', shareimage: null }}
			>
				<Order />
			</Layout>
		</>
	);
};

export default Index;

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const subMenuItems = (await getSubMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;

	return {
		props: {
			menuItems,
			subMenuItems,
			footerItems,
		},

		revalidate: 300, // In seconds
	};
}
