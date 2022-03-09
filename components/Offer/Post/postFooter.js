// COMPONENTS
import { Tags, Categories } from "../../items";
import { Date } from "../../elements";

const PostFooter = ({ tags, categories, date }) => (
  <footer>
    {date && (
      <div>
        Opublikowano <Date dateString={date} />
      </div>
    )}

    {tags && <Tags tags={tags} />}
    {categories && <Categories categories={categories} />}
  </footer>
);

export default PostFooter;
