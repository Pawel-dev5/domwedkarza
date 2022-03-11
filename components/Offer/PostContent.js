import HeroPost from "../Offer/HeroPost";

const PostContent = ({ post }) => <>{post && <HeroPost {...post} />}</>;

export default PostContent;
