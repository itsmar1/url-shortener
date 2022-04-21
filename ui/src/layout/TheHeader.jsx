import React from 'react';
import { Link } from 'react-router-dom';


const TheHeader = () => {
    return (
        <header className='header my-8'>
            <Link to='/' className='text-decoration-none'>
                <h1 className='text-center'>Short URL</h1>
            </Link>
        </header>
    );
};


export default TheHeader;