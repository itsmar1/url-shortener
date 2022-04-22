import React from 'react';

import TheContent from '../components/shortened/TheContent';
import ShortenedBox from '../components/shortened/ShortenedBox';


const ShortenedPage = () => {
    return (
        <div className='shortened container'>
            <div className="row">
                <div className="col-10">
                    <TheContent />
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <ShortenedBox />
                </div>
            </div>
        </div>
    );
};


export default ShortenedPage;