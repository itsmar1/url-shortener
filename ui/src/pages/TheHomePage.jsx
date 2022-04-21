import React from 'react';
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
        </div>
    );
};


export default TheHomePage;