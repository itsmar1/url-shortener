import React from 'react';


import TheContent from '../components/counter/TheContent';
import ClicksUrlBox from '../components/counter/ClicksUrlBox';


const ClickCounter = () => {
    return (
        <div className='click-counter container'>
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
        </div>
    );
};



export default ClickCounter;