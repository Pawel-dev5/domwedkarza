import dynamic from 'next/dynamic';

// API
import { getPrimaryMenu, getSubMenu, getFooter, getHomePage } from '../lib/api';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const HomePage = dynamic(() => import('../components/Home/HomePage'));

const Home = ({ menuItems: { menuItems }, subMenuItems, footerItems, homePage }) => (
	<Layout
		menuItems={menuItems?.edges}
		subMenuItems={subMenuItems?.menuItems?.edges}
		footerItems={footerItems?.menuItems?.edges}
	>
		<HomePage mainData={homePage?.node} />
	</Layout>
);

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const subMenuItems = (await getSubMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const homePage = (await getHomePage()) ?? null;

	return {
		props: {
			menuItems,
			subMenuItems,
			footerItems,
			homePage,
		},
		revalidate: 300, // In seconds
	};
}

export default Home;
