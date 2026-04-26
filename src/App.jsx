import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatSetsUsApart from './components/WhatSetsUsApart';
import Services from './components/Services';
import CommunicationModel from './components/CommunicationModel';
import Process from './components/Process';
import MediaAnalytics from './components/MediaAnalytics';
import FilmWork from './components/FilmWork';
import Portfolio from './components/Portfolio';
import SuccessStories from './components/SuccessStories';
import Clients from './components/Clients';
import Director from './components/Director';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatSetsUsApart />
        <Services />
        <CommunicationModel />
        <Process />
        <MediaAnalytics />
        <FilmWork />
        <Portfolio />
        <SuccessStories />
        <Clients />
        <Director />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
