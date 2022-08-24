import dynamic from 'next/dynamic';

// API
import { getPrimaryMenu, getSubMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
import { Custom404 as Page } from '../components/custom404';

const Custom404 = ({ menuItems: { menuItems }, subMenuItems, footerItems }) => {
	return (
		<Layout
			menuItems={menuItems?.edges}
			subMenuItems={subMenuItems?.menuItems?.edges}
			footerItems={footerItems?.menuItems?.edges}
		>
			<Page />
		</Layout>
	);
};

export default Custom404;

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
		//   revalidate: 10, // In seconds
	};
}
