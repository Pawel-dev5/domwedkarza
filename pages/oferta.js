import dynamic from 'next/dynamic';

// API
import { getPrimaryMenu, getSubMenu, getFooter } from '../lib/nav';
import { getAllPostsForHome } from '../lib/home';
import { getOfferHeader } from '../lib/offer';

// COMPONENTS
import { Container } from '../components/elements';
const MoreStories = dynamic(() => import('../components/Offer/MoreStories'));
const Layout = dynamic(() => import('../components/Layout/layout'));

const Blog = ({ allPosts: { edges }, menuItems: { menuItems }, subMenuItems, footerItems, offerHeader }) => {
	const morePosts = edges ?? [];

	return (
		<Layout
			menuItems={menuItems?.edges}
			subMenuItems={subMenuItems?.menuItems?.edges}
			footerItems={footerItems?.menuItems?.edges}
			headerImg={offerHeader?.featuredImage?.node}
			headerText={offerHeader?.title}
			subHeaderText={offerHeader?.oferta?.subheader}
			seo={offerHeader?.seo}
		>
			<Container>{morePosts && <MoreStories posts={morePosts} />}</Container>
		</Layout>
	);
};

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const subMenuItems = (await getSubMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const allPosts = (await getAllPostsForHome()) ?? null;
	const offerHeader = (await getOfferHeader()) ?? null;

	return {
		props: { allPosts, menuItems, subMenuItems, footerItems, offerHeader },
		revalidate: 300, // In seconds
	};
}

export default Blog;
