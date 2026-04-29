import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import Services from '../components/Services';
import CommunicationModel from '../components/CommunicationModel';
import MediaAnalytics from '../components/MediaAnalytics';
import FilmWork from '../components/FilmWork';
import Portfolio from '../components/Portfolio';
import SuccessStories from '../components/SuccessStories';
import Clients from '../components/Clients';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <WhatSetsUsApart />
      <Services />
      <CommunicationModel />
      <MediaAnalytics />
      <FilmWork />
      <Portfolio />
      <SuccessStories />
      <Clients />
      <CTA />
    </>
  );
};

export default Home;
