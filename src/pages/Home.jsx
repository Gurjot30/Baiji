import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import Process from '../components/Process';
import Services from '../components/Services';
import CommunicationModel from '../components/CommunicationModel';
import MediaAnalytics from '../components/MediaAnalytics';
import FilmWork from '../components/FilmWork';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhatSetsUsApart />
      <Process />
      <Services />
      <CommunicationModel />
      <MediaAnalytics />
      <FilmWork />
      <Portfolio />
      <Testimonials />
      <Clients />
    </>
  );
};

export default Home;
