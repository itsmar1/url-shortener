import React from 'react';


const TheFooter = () => {
    return (
        <div className="footer container-fluid">
            <div className='text-center'>
                <p>&copy; {new Date().getFullYear()} All rights reserved | <span className='text'>Tool to shorten a long link</span></p>
            </div>
        </div>
    );
};


export default TheFooter;