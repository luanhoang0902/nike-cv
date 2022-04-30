import React from 'react';
import PropTypes from 'prop-types';

import './style.css'

TextBot.propTypes = {
    
};

function TextBot(props) {
    return (
        <div className='textBot'>
            <div className='textBot-all'>
                <div className='textBot__columnone a'>
                    <div>Icons</div>
                    <br/>
                    <div>
                    <div>Air Force 1</div>
                    <div>Huarache</div>
                    <div>Air Max 90</div>
                    <div>Air Max 95</div>
                    <div>Air Max 97</div>
                    <div>Air Max 270</div>
                    <div>Air Max 720</div>
                    <div>All Air Max</div>
                    </div>
                </div>
                <div className='textBot__columntwo a'>
                    <div>Shoes</div>
                    <br/>
                    <div>
                    <div>All Shoes</div>
                    <div>Custom Shoes</div>
                    <div>Jordan Shoes</div>
                    <div>Running Shoes</div>
                    <div>Basketball Shoes</div>
                    <div>Football Shoes</div>
                    <div>Gym & Training Shoes</div>
                    <div>Lifestyle Shoes</div>
                    </div>
                </div>
                <div className='textBot__columnthree a'>
                    <div>Clothing</div>
                    <br/>
                    <div>
                    <div>All Clothing</div>
                    <div>Modest Wear</div>
                    <div>Hoodies & Pullovers</div>
                    <div>Shirts & Tops</div>
                    <div>Jackets</div>
                    <div>Compression & Nike Pro</div>
                    <div>Trousers & Leggings</div>
                    <div>Shorts</div>
                    </div>
                </div>
                <div className='textBot__columnfour a'>
                    <div>Kids'</div>
                    <br/>   
                    <div>
                    <div>Infant & Toddler Shoes</div>
                    <div>Kids' Shoes</div>
                    <div>Kids' Jordan Shoes</div>
                    <div>Kids' Basketball Shoes</div>
                    <div>Kids' Running Shoes</div>
                    <div>Kids' Clothing</div>
                    <div>Kids' Backpacks</div>
                    <div>Kids' Socks</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextBot;