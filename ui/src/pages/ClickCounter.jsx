import React from 'react';


import TheContent from '../components/counter/TheContent';


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
                    {/* <ShortenedBox /> */}
                </div>
            </div>
        </div>
    );
};



export default ClickCounter;