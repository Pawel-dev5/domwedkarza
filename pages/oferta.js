import {
  getAllPostsForHome,
  getPrimaryMenu,
  getSubMenu,
  getFooter,
  getOfferHeader,
} from "../lib/api";

// COMPONENTS
import { Container } from "../components/elements";
import MoreStories from "../components/Offer/MoreStories";
import HeroPost from "../components/Offer/HeroPost";
import Layout from "../components/Layout/layout";

// STYLES
import { StyledBlogTitle, StyledWrapper } from "../components/StylesGeneral";

const Blog = ({
  allPosts: { edges },
  menuItems: { menuItems },
  subMenuItems,
  footerItems,
  offerHeader,
}) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout
      menuItems={menuItems?.edges}
      subMenuItems={subMenuItems?.menuItems?.edges}
      footerItems={footerItems?.menuItems?.edges}
      headerImg={offerHeader?.featuredImage?.node}
      headerText={offerHeader?.title}
      subHeaderText={offerHeader?.oferta?.subheader}
    >
      <Container>
        {heroPost && <HeroPost {...heroPost} />}
        <hr />
        {morePosts && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const menuItems = await getPrimaryMenu();
  const subMenuItems = await getSubMenu();
  const footerItems = await getFooter();
  const allPosts = await getAllPostsForHome();
  const offerHeader = await getOfferHeader();

  return {
    props: { allPosts, menuItems, subMenuItems, footerItems, offerHeader },
    revalidate: 10, // In seconds
  };
}

export default Blog;
