import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContentCreator from './components/ContentCreator';
import TechTransition from './components/TechTransition';
import JourneyTimeline from './components/JourneyTimeline';

const App = () => {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Navigation />
      </motion.div>

      <Hero />
      <ContentCreator />
      <TechTransition />
      <JourneyTimeline />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Footer />
      </motion.div>
    </Fragment>
  );
};

export default App;
