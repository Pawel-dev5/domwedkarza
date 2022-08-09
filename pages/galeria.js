import dynamic from 'next/dynamic';
import { SRLWrapper } from 'simple-react-lightbox';

// API
import { getPrimaryMenu, getSubMenu, getFooter, getGalleryPage } from '../lib/api';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const Gallery = dynamic(() => import('../components/gallery'));

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems, galleryPage }) => {
	return (
		<Layout
			menuItems={menuItems?.edges}
			subMenuItems={subMenuItems?.menuItems?.edges}
			footerItems={footerItems?.menuItems?.edges}
			headerText={galleryPage?.title}
			headerImg={galleryPage?.featuredImage?.node}
			subHeaderText={galleryPage?.galeria?.galleryHeader}
			seo={galleryPage?.seo}
		>
			<SRLWrapper>
				<Gallery content={galleryPage?.content} />
			</SRLWrapper>
		</Layout>
	);
};

export default Index;

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const subMenuItems = (await getSubMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const galleryPage = (await getGalleryPage()) ?? null;

	return {
		props: {
			menuItems,
			subMenuItems,
			footerItems,
			galleryPage,
		},
		revalidate: 300, // In seconds
	};
}
