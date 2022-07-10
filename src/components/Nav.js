import { useEffect } from 'react';

export default function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;
  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <header className="header">
      <h1>
        <a href="/">Shaun Kiszonas</a>
      </h1>
      <ul className="nav">
        {categories.map((category) => (
          <li
            className={`list ${
              currentCategory.name === category.name &&
              !contactSelected &&
              'navActive'
            }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
            >
              {category.name}
            </span>
          </li>
        ))}
        <li className={`list ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
        </li>
      </ul>
    </header>
  );
}
