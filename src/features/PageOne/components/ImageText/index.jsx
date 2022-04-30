    import React from 'react';
import PropTypes from 'prop-types';

import './style.css'
import { Link } from 'react-router-dom';

ImageText.propTypes = {
    
};

function ImageText(props) {
    return (
        <div className='imageText'>
            <div className='imageText-img'>
                <Link to='/nike1'><img src='./img/mot.png'></img></Link>
            </div>
            <div className='imageText-text'>
                <div>Member Access: Nike Air Zoom Pegasus 39</div>
                <div><b>IN PEG WE TRUST</b></div>
                <div>Introducing the new Nike Air Zoom Pegasus 39, featuring the comfort and consistency from the shoe runners know and love, plus our latest innovations designed to take your next run to bold new heights.</div>
                <div><div className='imageText-text_box'>Shop</div></div>
            </div>
        </div>
    );
}

export default ImageText;