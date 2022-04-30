import React from "react";
import PropTypes from "prop-types";

import './style.css'

Colour.propTypes = {};

function Colour(props) {
    const array = ['Purple','Black','Red','Orange','Blue','White']

    
  return (
    <div className = "colour-all">
      <div className = "colour-item">
        <div className = "circle" style={{backgroundColor:array[0]}}></div>
        <div>{array[0]}</div>
      </div>
      <div className = "colour-item">
        <div className = "circle" style={{backgroundColor:array[1]}}></div>
        <div>{array[1]}</div>
      </div>
      <div className = "colour-item">
        <div className = "circle" style={{backgroundColor:array[2]}}></div>
        <div>{array[2]}</div>
      </div>
      <div className = "colour-item">
        <div className = "circle" style={{backgroundColor:array[3]}}></div>
        <div>{array[3]}</div>
      </div>
      <div className = "colour-item">
        <div className = "circle" style={{backgroundColor:array[4]}}></div>
        <div>{array[4]}</div>
      </div>
      <div className = "colour-item">
        <div className = "circle" style={{backgroundColor:array[5]}}></div>
        <div>{array[5]}</div>
      </div>
      
    </div>
  );
}

export default Colour;
