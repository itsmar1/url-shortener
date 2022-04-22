import React from 'react';

import { AiOutlineLike } from 'react-icons/ai';
import { HiOutlineLink } from 'react-icons/hi';
import { SiFsecure } from 'react-icons/si';
import { MdOutlineQueryStats, MdOutlineBackHand, MdOutlineDevices } from 'react-icons/md';


const FeaturesBox = () => {
    return (
        <div className='features-box container-fluid'>
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className='text-center'>
                        <div>
                            <AiOutlineLike className='features-icon' />
                        </div>
                        <h3>Easy</h3>
                        <p>ShortURL is easy and fast, enter the long link to get your shortened link</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className='text-center'>
                        <div>
                            <HiOutlineLink className='features-icon' />
                        </div>
                        <h3>Shortened</h3>
                        <p>Use any link, no matter what size, ShortURL always shortens</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className='text-center'>
                        <div>
                            <SiFsecure className='features-icon' />
                        </div>
                        <h3>Secure</h3>
                        <p>It is fast and secure, our service have HTTPS protocol and data encryption</p>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-6 col-lg-4">
                    <div className='text-center'>
                        <div>
                            <MdOutlineQueryStats className='features-icon' />
                        </div>
                        <h3>Statistics</h3>
                        <p>Check the amount of clicks that your shortened url received</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className='text-center'>
                        <div>
                            <MdOutlineBackHand className='features-icon' />
                        </div>
                        <h3>Reliable</h3>
                        <p>All links that try to disseminate spam, viruses and malware are deleted</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className='text-center'>
                        <div>
                            <MdOutlineDevices className='features-icon' />
                        </div>
                        <h3>Devices</h3>
                        <p>Compatible with smartphones, tablets and desktop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FeaturesBox;