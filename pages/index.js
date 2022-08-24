import dynamic from 'next/dynamic';

// API
import { getHomePage } from '../lib/home';
import { getPrimaryMenu, getSubMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const HomePage = dynamic(() => import('../components/Home/HomePage'));

const Home = ({ menuItems: { menuItems }, subMenuItems, footerItems, homePage }) => (
	<Layout
		menuItems={menuItems?.edges}
		subMenuItems={subMenuItems?.menuItems?.edges}
		footerItems={footerItems?.menuItems?.edges}
		seo={homePage?.node?.seo}
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
