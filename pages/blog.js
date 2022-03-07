import { getAllPostsForHome } from "../lib/api";

// COMPONENTS
import { Container } from "../components/elements";
import MoreStories from "../components/Blog/MoreStories";
import HeroPost from "../components/Blog/HeroPost";
import Layout from "../components/Layout/layout";

// STYLES
import { StyledBlogTitle, StyledWrapper } from "../components/StylesGeneral";

const Blog = ({ allPosts: { edges } }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout>
      <Container>
        <StyledWrapper between>
          <StyledBlogTitle>Blog.</StyledBlogTitle>
          <StyledBlogTitle subTitle>
            Przybliżamy zagadnienia rachunkowości i&nbsp;podatków
          </StyledBlogTitle>
        </StyledWrapper>

        {heroPost && <HeroPost {...heroPost} />}
        <hr />
        {morePosts && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();

  return {
    props: { allPosts },
    revalidate: 10, // In seconds
  };
}

export default Blog;
