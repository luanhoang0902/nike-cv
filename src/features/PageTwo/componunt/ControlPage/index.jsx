import React from 'react';
import PropTypes from 'prop-types';

import './style.css'
import CheckBox from './CheckBox';
import Colour from './Colour';

ControlPage.propTypes = {
    
};

function ControlPage(props) {
    const array = [
        {
            id: 1,
            // name: 'Hoàng',
            // item1: 'Văn',
            // item2: 'Luân',
            // item3: '1997'
        },
        {
            id: 2,
            name: 'Gender',
            item1: 'Men',
            item2: 'Women',
            item3: 'Unisex'
        },
        {
            id: 3,
            name: 'Kids',
            item1: 'Boys',
            item2: 'Girls',
        },
        {
            id: 4,
            name: 'Technology',
            item1: 'Nike FlyEase',
            item2: 'Nike FlyMesh',
            item3: 'Nike Flymesh',
            item4: 'Nike Flyknit'
        },
        {
            id: 5,
            name: 'Brand',
            item1: 'Nike Sportswear',
            item2: 'Nike By You',
        },
        {
            id: 6,
            name: 'Ari Max',
            item1: 'Vapor Max',
        },
        {
            id: 7,
            name: 'Colour',
        },

    ];
    return (
        <div className = "control-page">
            <div className = "box-item">
                <div>Road</div>
                <div>Trail</div>
                <div>Track</div>
            </div>
            <CheckBox props = {array[0]}/>
            <CheckBox props = {array[1]}/>
            <CheckBox props = {array[2]}/>
            <CheckBox props = {array[6]}>
            </CheckBox>
            <Colour/>
                {/* <div>
                    <div></div>
                    <div>Purple</div>
                </div>
                <div>
                    <div></div>
                    <div>Black</div>
                </div>
                <div>
                    <div></div>
                    <div>Red</div>
                </div>
                <div>
                    <div></div>
                    <div>Orange</div>
                </div>
                <div>
                    <div></div>
                    <div>Blue</div>
                </div>
                <div>
                    <div></div>
                    <div>White</div>
                </div> */}
            
            <CheckBox props = {array[3]}/>
            <CheckBox props = {array[3]}/>
            <CheckBox props = {array[3]}/>
            <CheckBox props = {array[3]}/>
            <CheckBox props = {array[3]}/>
            <CheckBox props = {array[4]}/>
            <CheckBox props = {array[5]}/>
        </div>
    );
}

export default ControlPage;