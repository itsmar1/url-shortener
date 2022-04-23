import React from 'react';
import { Link } from 'react-router-dom';


const ShortenedBox = ({ longUrl, shortUrl }) => {
    
    return (
        <div className='shortened-box mx-auto'>
            <div>
                <form>
                    <div className='input-group'>
                        <input type="text" className='form-control' defaultValue={shortUrl} />
                        <div className="input-group-append">
                            <button className='btn btn-primary'>
                                Copy URL
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <p className='mt-4'>Long URL: <span className='text-decoration-none'><a href={`${longUrl}`} target="_blank" rel="noopener noreferrer">{{longUrl}}</a> </span></p> */}
            <p className="mt-4">
                Long URL:{" "}
                    <a href={`"${longUrl}"`} target="_blank" rel="noopener noreferrer"  className='text-decoration-none'>
                        {longUrl}
                    </a>{" "}
            </p>
            <div className='mt-4'>
                <p className='mb-0'>Track <Link to='/click-counter' className='text-decoration-none fw-bold'>the total of clicks</Link> in real-time from your shortened URL.</p>
                <p>Create other <Link to='/' className='text-decoration-none fw-bold'>shortened URL.</Link> </p>
            </div>
        </div>
    );
};


export default ShortenedBox;