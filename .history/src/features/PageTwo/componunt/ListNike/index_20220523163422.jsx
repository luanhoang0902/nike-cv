import React from 'react';
import PropTypes from 'prop-types';

import './style.css'
import Product from './Product';

ListNike.propTypes = {
    
};

function ListNike(props) {
    const array = [
        {
            id: 1,
            image1: "./img/11.png",
            image2: "./img/12.png",
            image3: "./img/13.png",
            image4: "./img/14.png" 
        },
        {
            id: 2,
            image1: "./img/21.png",
            image2: "./img/22.png"
        },
        {
            id: 3,
            image1: "./img/31.png",
            image2: "./img/32.png"
        },
        {
            id: 4,
            image1: "./img/41.png",
            image2: "./img/42.png",
            image3: "./img/43.png"
        },
        {
            id: 5,
            image1: "./img/51.png",
            image2: "./img/52.png",
            image3: "./img/53.png",
            image4: "./img/54.png" 
        },
        {
            id: 6,
            image1: "./img/61.png",
            image2: "./img/62.png",
            image3: "./img/63.png",
            image4: "./img/64.png" 
        },
    ]
    return (
        <div className='listNike'>
            <Product item={array[0]} key ={'0'}/>
            <Product item={array[1]} key ={'1'}/>
            <Product item={array[2]} key ={'2'}/>
            <Product item={array[3]} key ={'3'}/>
            <Product item={array[4]} key ={'4'}/>
            <Product item={array[5]} key ={'5'}/>
        </div>
    );
}

export default ListNike;