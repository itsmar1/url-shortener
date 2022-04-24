import React from 'react';
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';

import TheContent from '../components/shortened/TheContent';
import ShortenedBox from '../components/shortened/ShortenedBox';


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


const ShortenedPage = () => {
    const longUrl = useSelector((state) => state.url.longUrl);
    const shortUrl = useSelector((state) => state.url.shortUrl);

    return (
        <motion.div className='shortened container'
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
                    <ShortenedBox longUrl={longUrl} shortUrl={shortUrl} />
                </div>
            </div>
        </motion.div>
    );
};


export default ShortenedPage;