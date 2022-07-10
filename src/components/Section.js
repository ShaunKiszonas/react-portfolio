export default function Category(props) {
  const { currentCategory } = props;
  return (
    <section className="section">
      <h1 className="section-header">{currentCategory.name}</h1>
      <p className="section-content">{currentCategory.desc}</p>
    </section>
  );
}
