import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./style.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

Product.propTypes = {};

function Product({ item }) {
    const anh = useRef(null)
  const handleImage = (event) => {
    anh.current.src= event.target.src;
  };
  return (
    <>
      <div className="product">
          <div className="product-img">
            <Link to="/PageProduct"><img  src={item.image1} ref = {anh} ></img></Link>
          </div>
          <div className="product-list">
            {item.map(ite => ( <img src={item.image1} onMouseOver={handleImage} />))}
      </div>
      {/* {item.image1 && (
        <div className="product">
          <div className="product-img">
            <Link to="/PageProduct"><img  src={item.image1} ref = {anh} ></img></Link>
          </div>
          <div className="product-list">
            {item.image1 && (
              <img src={item.image1} onMouseOver={handleImage} />
            )}
            {item.image2 && (
              <img src={item.image2} onMouseOver={handleImage} />
            )}
            {item.image3 && (
              <img src={item.image3} onMouseOver={handleImage} />
            )}
            {item.image4 && (
              <img src={item.image4} onMouseOver={handleImage} />
            )}
            {item.image5 && (
              <img src={item.image5} onMouseOver={handleImage} />
            )}
          </div> */}
          <div className="product-information">
            <div>Promo Exclusion</div>
            <p>Nike Ari Zoom Pegasus 39</p>
            <p>Women's Road Running Shoes</p>
            <p>5 Colurs</p>
            <br />
            <span>3,519,000₫</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
