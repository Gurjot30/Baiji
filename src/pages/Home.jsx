import React from 'react';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import AboutUs from '../components/AboutUs';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import Services from '../components/Services';
import CommunicationModel from '../components/CommunicationModel';
import MediaAnalytics from '../components/MediaAnalytics';
import FilmWork from '../components/FilmWork';
import Portfolio from '../components/Portfolio';
import SuccessStories from '../components/SuccessStories';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <AboutUs />
      <WhatSetsUsApart />
      <Services />
      <CommunicationModel />
      <MediaAnalytics />
      <FilmWork />
      <Portfolio />
      <SuccessStories />
      <Testimonials />
      <Clients />
      <CTA />
    </>
  );
};

export default Home;
