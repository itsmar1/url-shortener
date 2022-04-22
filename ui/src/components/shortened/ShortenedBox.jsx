import React from 'react';
import { Link } from 'react-router-dom';


const ShortenedBox = () => {
    return (
        <div className='shortened-box mx-auto'>
            <div>
                <form>
                    <div className='input-group'>
                        <input type="text" className='form-control' />
                        <div className="input-group-append">
                            <button className='btn btn-primary'>
                                Copy URL
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <p className='mt-4'>Long URL: </p>
            <div className='mt-4'>
                <p className='mb-0'>Track <Link to='/' className='text-decoration-none fw-bold'>the total of clicks</Link> in real-time from your shortened URL.</p>
                <p>Create other <Link to='/' className='text-decoration-none fw-bold'>shortened URL.</Link> </p>
            </div>
        </div>
    );
};


export default ShortenedBox;