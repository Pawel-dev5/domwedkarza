// NEXT
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import dynamic from "next/dynamic";
import { SRLWrapper } from "simple-react-lightbox";

// STATE
import {
  getPostAndMorePosts,
  getAllPostsForHome,
  getPrimaryMenu,
  getSubMenu,
  getFooter,
} from "../../lib/api";
import { COMPANY_NAME } from "../../lib/constants";

// COMPONENTS
import Layout from "../../components/Layout/layout";
import { PostTitle } from "../../components/Offer/Post";
const MoreStories = dynamic(() => import("../../components/Offer/MoreStories"));
const HeroPost = dynamic(() => import("../../components/Offer/HeroPost"));

const Post = ({
  post,
  posts,
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
}) => {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      headerText={post?.title}
      headerImg={post?.featuredImage?.node}
      slug={post?.slug}
      menuItems={menuItems?.edges}
      subMenuItems={subMenuItems?.menuItems?.edges}
      footerItems={footerItems?.menuItems?.edges}
    >
      <div>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post?.title} | {COMPANY_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post?.featuredImage?.node?.sourceUrl}
                />
              </Head>

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
  const menuItems = await getPrimaryMenu();
  const subMenuItems = await getSubMenu();
  const footerItems = await getFooter();
  return {
    props: {
      preview,
      post: data?.post,
      posts: data?.posts,
      menuItems,
      subMenuItems,
      footerItems,
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsForHome();

  return {
    paths: allPosts?.edges?.map(({ node }) => `/oferta/${node.slug}`) || [],
    // fallback: true,
    fallback: "blocking",
  };
}
