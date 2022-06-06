import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./style.css";

Bag.propTypes = {};

function Bag(props) {
    const tickI = useRef()

  return (
    <div className="bag">
      <div className="bag-left">
        <div className="bag-left__top" ref = {tickI}>
          <div>
            FREE DELIVERY
            <br />
            Applies to orders of 5.000.000₫ or more. View details.
          </div>
          <i class="bx bx-x" onClick = {()=> tickI.current.style.display='none'}></i>
        </div>
        <div className="bag-left__center">
          <b>Bag</b>
          <p>There are no items in your bag.</p>
        </div>
        <div className="bag-left__bottom">
          <b>Favourites</b>
          <p>Want to view your favourites? Join us or Sign in</p>
        </div>
      </div>
      <div className="bag-right">
        <div className="bag-right__top">
          <p style={{fontSize: 25}}>Summary</p>
          <div>
            <p>Subtotal</p>
            <span>0₫</span>
          </div>
          <div>
            <p>Subtotal</p>
            <span>0₫</span>
          </div>
        </div>
        <div className="bag-right__center">
          <p>Total</p>
          <span>0₫</span>
        </div>
        <div className="bag-right__bottom">
          <div>Guest Checkout</div>
          <div>Member Checkout</div>
        </div>
      </div>
    </div>
  );
}

export default Bag;
