import React from 'react';
import MenImage from './../../assets/shopMens.jpg'
import WomenImage from './../../assets/shopWomens.jpg'
import './style.scss'

const Directory = (props) => {
    return (
        <div className="main-directory-container">
            <div className="wrap">
                <div className="item" style={{ backgroundImage: `url(${MenImage})` }}>
                    <a href="#">Shop Men</a>
                </div>
                <div className="item" style={{ backgroundImage: `url(${WomenImage})` }}>
                    <a href="#">Shop Women</a>
                </div>
            </div>
        </div>
    );
}

export default Directory;
