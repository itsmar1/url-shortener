import React from 'react';
import { motion } from 'framer-motion';

import TheContent from '../components/counter/TheContent';
import ClicksUrlBox from '../components/counter/ClicksUrlBox';


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



const ClickCounter = () => {
    return (
        <motion.div className='click-counter container'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col-10">
                    <TheContent />
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <ClicksUrlBox />
                    <p className='text-note mx-auto'>* Track the total hits of the shortened URL in real time</p>
                </div>
            </div>
        </motion.div>
    );
};



export default ClickCounter;