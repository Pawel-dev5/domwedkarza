// NEXT
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

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
import PostContent from "../../components/Offer/PostContent";
import MoreStories from "../../components/Offer/MoreStories";

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
              <PostContent post={post} />
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
