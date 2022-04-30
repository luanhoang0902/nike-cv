import React from 'react';
import PropTypes from 'prop-types';

import './style.css'

ListImage.propTypes = {
    
};

function ListImage(props) {
    return (
        <div className='listImage'>
            <div className = 'listImage-text'>Trending</div>
            <div className='ListImage-image'>
                <div className='ListImage-image__one'>
                    <img src='./img/hai.png'></img>
                    <div className='Image-one'>
                        <p>Essentials for Peak Performance</p>
                        <div>Shop</div>
                    </div>  
                </div>
                <div className='ListImage-image__two'>
                    <img src='./img/ba.png'></img>
                    <div className='Image-two'>
                        <p>Have A Nike Day: Every Day's A Nike Day</p>
                        <div>Shop</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListImage;