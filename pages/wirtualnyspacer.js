import dynamic from 'next/dynamic';

// API
import { getVirtualWalkHeader } from '../lib/virtualWalk';
import { getPrimaryMenu, getSubMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const VirtualWalk = dynamic(() => import('../components/VirtualWalk'));

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems, virtualWalk }) => {
	return (
		<Layout
			menuItems={menuItems?.edges}
			subMenuItems={subMenuItems?.menuItems?.edges}
			footerItems={footerItems?.menuItems?.edges}
			headerText={virtualWalk?.title}
			headerImg={virtualWalk?.featuredImage?.node}
			seo={virtualWalk?.seo}
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
		revalidate: 300, // In seconds
	};
}
