import React from 'react';
import { motion } from 'framer-motion';

import FeaturesBox from '../components/home/FeaturesBox';
import TheContent from '../components/home/TheContent';
import TrackUrlBox from '../components/home/TrackUrlBox';
import UrlBox from '../components/home/UrlBox';


const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration: .3 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
    }
  }

const TheHomePage = () => {
    return (
        <motion.div className='home container'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col-sm-10 mx-auto">
                    <UrlBox />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-10 mx-auto">
                    <TrackUrlBox />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-10 mx-auto">
                    <TheContent />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <FeaturesBox />
                </div>
            </div>
        </motion.div>
    );
};


export default TheHomePage;