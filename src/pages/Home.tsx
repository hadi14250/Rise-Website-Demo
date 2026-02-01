import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Solutions from '../components/sections/Solutions';
import Differentiators from '../components/sections/Differentiators';
import Clients from '../components/sections/Clients';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Differentiators />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
