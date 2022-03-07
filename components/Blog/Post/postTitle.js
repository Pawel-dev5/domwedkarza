const PostTitle = ({ children }) => {
  return <h1 dangerouslySetInnerHTML={{ __html: children }} />;
};
export default PostTitle;
