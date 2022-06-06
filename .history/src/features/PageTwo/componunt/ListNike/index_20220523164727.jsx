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
            image: ['./img/11.png','./img/12.png','./img/13.png','./img/14.png']
            // image1: "./img/11.png",
            // image2: "./img/12.png",
            // image3: "./img/13.png",
            // image4: "./img/14.png" 
        },
        {
            id: 2,
            image: ['./img/21.png','./img/22.png']
            // image1: "./img/21.png",
            // image2: "./img/22.png"
        },
        {
            id: 3,
            image: ['./img/31.png','./img/32.png']
            // image1: "./img/31.png",
            // image2: "./img/32.png"
        },
        {
            id: 4,
            image: ['./img/41.png','./img/42.png','./img/43.png']
            // image1: "./img/41.png",
            // image2: "./img/42.png",
            // image3: "./img/43.png"
        },
        {
            id: 5,
            image: ['./img/51.png','./img/52.png','./img/53.png','./img/54.png']
            // image1: "./img/51.png",
            // image2: "./img/52.png",
            // image3: "./img/53.png",
            // image4: "./img/54.png" 
        },
        {
            id: 6,
            image: ['./img/61.png','./img/62.png','./img/63.png','./img/64.png']
            // image1: "./img/61.png",
            // image2: "./img/62.png",
            // image3: "./img/63.png",
            // image4: "./img/64.png" 
        },
    ]
    return (
        <div className='listNike'>
            {array.map((array) =>(
                <Product item={array.image}/>
            ))}
            {/* <Product item={array[0]} key ={'0'}/>
            <Product item={array[1]} key ={'1'}/>
            <Product item={array[2]} key ={'2'}/>
            <Product item={array[3]} key ={'3'}/>
            <Product item={array[4]} key ={'4'}/>
            <Product item={array[5]} key ={'5'}/> */}
        </div>
    );
}

export default ListNike;