import React from 'react';
import { useSelector } from "react-redux";

import TheContent from '../components/shortened/TheContent';
import ShortenedBox from '../components/shortened/ShortenedBox';


const ShortenedPage = () => {
    const longUrl = useSelector((state) => state.url.longUrl);
    const shortUrl = useSelector((state) => state.url.shortUrl);

    return (
        <div className='shortened container'>
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
        </div>
    );
};


export default ShortenedPage;