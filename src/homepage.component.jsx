import React from 'react';
import './homepage.styles.scss';

const HomePage = ()=>(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className="div menu-item">
                <div className="div content">
                    <h1 className='title'>HATS</h1>
                    <spam className='subtitle'>SHOP NOW</spam>
                </div>
            </div>
            <div className="div menu-item">
                <div className="div content">
                    <h1 className='title'>JACKETS</h1>
                    <spam className='subtitle'>SHOP NOW</spam>
                </div>
            </div>
            <div className="div menu-item">
                <div className="div content">
                    <h1 className='title'>SNEAKERS</h1>
                    <spam className='subtitle'>SHOP NOW</spam>
                </div>
            </div>
            <div className="div menu-item">
                <div className="div content">
                    <h1 className='title'>WOMEN</h1>
                    <spam className='subtitle'>SHOP NOW</spam>
                </div>
            </div>
            <div className="div menu-item">
                <div className="div content">
                    <h1 className='title'>MEN</h1>
                    <spam className='subtitle'>SHOP NOW</spam>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;