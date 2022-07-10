import { useState } from 'react';
import Nav from './components/Nav';
import Section from './components/Section';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa
      velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
      perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
      laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
      ipsa velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
      perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
      laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
      ipsa velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
      perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
      laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
      ipsa velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
      perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
      laborum?`,
    },
    {
      name: 'Portfolio',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa
    velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
    perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
    laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
    ipsa velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
    perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
    laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
    ipsa velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
    perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
    laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
    ipsa velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
    perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
    laborum?`,
    },
    {
      name: 'Resume',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa
    velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
    perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
    laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
    ipsa velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
    perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
    laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
    ipsa velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
    perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
    laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
    ipsa velit sunt ad deleniti incidunt nihil ducimus sint repudiandae
    perspiciatis magni quo neque est, rerum saepe! Molestias dolor quas
    laborum?`,
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <Section currentCategory={currentCategory} />
          </>
        ) : (
          <Contact />
        )}
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}
