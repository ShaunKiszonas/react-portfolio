import { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Project from './components/Project';
import Footer from './components/Footer';

export default function App() {
  const [categories] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' },
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
        <About />
        <Footer />
      </main>
    </>
  );
}
