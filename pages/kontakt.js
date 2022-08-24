import dynamic from 'next/dynamic';

// API
import { getContacttHeader, getConfig } from '../lib/contact';
import { getPrimaryMenu, getSubMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const Contact = dynamic(() => import('../components/contact'));

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems, contactData, formConfig }) => (
	<Layout
		menuItems={menuItems?.edges}
		subMenuItems={subMenuItems?.menuItems?.edges}
		footerItems={footerItems?.menuItems?.edges}
		headerText={contactData?.title}
		headerImg={contactData?.featuredImage?.node}
		seo={contactData?.seo}
	>
		<Contact
			footerItems={footerItems?.menuItems?.edges}
			subMenuItems={subMenuItems?.menuItems?.edges}
			userId={formConfig?.userId}
			serviceId={formConfig?.serviceId}
			tamplateId={formConfig?.tamplateId}
			{...contactData?.kontakt}
		/>
	</Layout>
);

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const subMenuItems = (await getSubMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const contactData = (await getContacttHeader()) ?? null;
	const formConfig = (await getConfig()) ?? null;

	return {
		props: {
			menuItems,
			subMenuItems,
			footerItems,
			contactData,
			formConfig,
		},
		revalidate: 300, // In seconds
	};
}

export default Index;
