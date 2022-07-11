import { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

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
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      />
      <main>
        {aboutSelected ? <About /> : <></>}
        {portfolioSelected ? <Portfolio /> : <></>}
        {resumeSelected ? <Resume /> : <></>}
        {contactSelected ? <Contact /> : <></>}
        <Footer />
      </main>
    </>
  );
}
