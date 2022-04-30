import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx'

import './style.css'

CheckBox.propTypes = {
    
};

function CheckBox({props}) {
    const anh = useRef(null)
    // anh.current.style.transition = 'all 2s ease'
    const handleUp = (event) => {
        let tick = event.target.querySelector('.bx')
        if(tick.classList.contains('bx-chevron-up')){
            tick.classList.remove('bx-chevron-up')
            tick.classList.add('bx-chevron-down')
            anh.current.style.height='50px'
        }else {
            tick.classList.add('bx-chevron-up')
            tick.classList.remove('bx-chevron-down')
            anh.current.style.height='auto'
        } 
    };  
    return (
        <div>
         {props.name&&
                (<div className = "box-item box-2" onClick={handleUp} ref = {anh}>
                <div className = "box-control">{props.name}
                <i class='bx bx-chevron-up' ></i>
                </div>
                {props.item1&&
                (<div className = "box-check">
                    <div></div>
                    <div>{props.item1}</div>
                </div>)}
                {props.item2&&
                (<div className = "box-check">
                    <div></div>
                    <div>{props.item2}</div>
                </div>)}
                {props.item3&&
                (<div className = "box-check">
                    <div></div>
                    <div>{props.item3}</div>
                </div>)}
                {props.item4&&
                (<div className = "box-check">
                    <div></div>
                    <div>{props.item4}</div>
                </div>)}
            </div>)}
        </div>
    );
}

export default CheckBox;