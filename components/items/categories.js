const Categories = ({ categories }) => (
  <span>
    {categories.edges.length > 0 ? (
      categories.edges.map((category, index) => (
        <span key={index}>{category.node.name}</span>
      ))
    ) : (
      <span>{categories.edges.node.name}</span>
    )}
  </span>
);

export default Categories;
