import React from 'react';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
