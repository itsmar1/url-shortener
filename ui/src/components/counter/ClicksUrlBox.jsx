import React from 'react';


const ClicksUrlBox = () => {
    return (
        <div className='clicks-box mx-auto'>
            <div>
                <form>
                    <div className='input-group'>
                        <input type="text" className='form-control' />
                        <div className="input-group-append">
                            <button className='btn btn-primary'>
                                Track Clicks
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default ClicksUrlBox;