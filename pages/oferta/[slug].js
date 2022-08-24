import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import dynamic from 'next/dynamic';

// LIGHTBOX
import { SRLWrapper } from 'simple-react-lightbox';

// STATE
import { getAllPostsForHome } from '../../lib/home';
import { getPrimaryMenu, getSubMenu, getFooter } from '../../lib/nav';
import { getPostAndMorePosts } from '../../lib/offerSlug';

// COMPONENTS
const Layout = dynamic(() => import('../../components/Layout/layout'));
const MoreStories = dynamic(() => import('../../components/Offer/MoreStories'));
const HeroPost = dynamic(() => import('../../components/Offer/HeroPost'));

const Post = ({ post, posts, menuItems: { menuItems }, subMenuItems, footerItems }) => {
	const router = useRouter();
	const morePosts = posts?.edges;

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	const newSeo = {
		...post?.seo,
		shareimage: {
			altText: post?.seo?.shareimage?.altText !== '' ? post?.seo?.shareimage?.altText : post?.title,
			sourceUrl: post?.seo?.shareimage?.sourceUrl ?? post?.featuredImage?.node?.sourceUrl,
		},
	};

	return (
		<Layout
			headerText={post?.title}
			headerImg={post?.featuredImage?.node}
			slug={post?.slug}
			menuItems={menuItems?.edges}
			subMenuItems={subMenuItems?.menuItems?.edges}
			footerItems={footerItems?.menuItems?.edges}
			seo={newSeo}
		>
			<div>
				{router.isFallback ? (
					<h2>Loading…</h2>
				) : (
					<>
						<article>
							<SRLWrapper>
								<HeroPost {...post} />
							</SRLWrapper>
						</article>

						<hr />
						{morePosts?.length > 0 && <MoreStories posts={morePosts} />}
					</>
				)}
			</div>
		</Layout>
	);
};

export default Post;

export async function getStaticProps({ params, preview = false, previewData }) {
	const data = await getPostAndMorePosts(params.slug, preview, previewData);
	const menuItems = (await getPrimaryMenu()) ?? null;
	const subMenuItems = (await getSubMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	return {
		props: {
			preview,
			post: data?.post,
			posts: data?.posts,
			menuItems,
			subMenuItems,
			footerItems,
		},
		revalidate: 300, // In seconds
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsForHome();

	return {
		paths: allPosts?.edges?.map(({ node }) => `/oferta/${node.slug}`) || [],
		// fallback: true,
		fallback: 'blocking',
	};
}
