import React from 'react';

import FeaturesBox from '../components/home/FeaturesBox';
import TheContent from '../components/home/TheContent';
import TrackUrlBox from '../components/home/TrackUrlBox';
import UrlBox from '../components/home/UrlBox';

const TheHomePage = () => {
    return (
        <div className='home container'>
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
        </div>
    );
};


export default TheHomePage;