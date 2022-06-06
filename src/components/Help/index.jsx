import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./style.css";

Help.propTypes = {};

function Help(props) {
  const textSpan = useRef();
  const textSpan1 = useRef();

  const handleInput = (e) => {
    textSpan.current.style.bottom = "-10px";
    textSpan.current.classList.add("span-style");
  };
  const handleInput1 = (e) => {
    textSpan.current.style.bottom = "-35px";
    textSpan.current.classList.remove("span-style");
  };

  return (
    <div className="help">
      <div className="help-top">
        <p>GET HELP</p>
        <span ref={textSpan}>What can we help you with?</span>
        <input type="text" onFocus={handleInput} onBlur={handleInput1} />
        <i class="bx bx-search"></i>
      </div>
      <div className = "help-content">
        <div className="help-content__one">
          <h5>QUICK ASSISTS</h5>
          <p>
            Answers to our most frequently asked questions are just one click
            away.
          </p>
        </div>
        <div className="help-content__two">
          <div className="help-content__two-item" >
            <div>DISPATCH & DELIVERY</div>
            <div>
              How do I get free delivery on Nike orders?
              <br />
              What are Nike's delivery options?
              <br />
              Can my Nike order be dispatched internationally?
            </div>
          </div >
          <div className="help-content__two-item">
            <div>RETURNS</div>
            <div>
              How do I return my Nike order? What is Nike's returns policy?
              Where is my refund?
            </div>
          </div>
          <div className="help-content__two-item">
            <div>NIKE MEMBERSHIP</div>
            <div>
              What is Nike Membership?
              <br />
              How do I become a Nike Member?
              <br />
              How do I get the most out of NRC and NTC?
            </div>
          </div>
          <div className="help-content__two-item">
            <div>ORDERS</div>
            <div>
              Where is my Nike order?
              <br />
              Can I change or cancel my Nike order?
              <br />
              What payment options can I use on Nike orders?
            </div>
          </div>
          <div className="help-content__two-item">
            <div>PRODUCT INFO</div>
            <div>
              How do I get Nike’s newest sneaker releases?
              <br />
              How do I find the right size and fit?
              <br />
              What is Nike By You's personalisation policy? Do Nike shoes have a
              warranty?
            </div>
          </div>
          <div className="help-content__two-item">
            <div>CORPORATE</div>
            <div>
              Where can I get more info about Nike, Inc.?
              <br />
              Where is the Nike store closest to me?
            </div>
          </div>
        </div>
        <div className="help-content__three">
          <h5>CONTACT US</h5>
        </div>
        <div className="help-content__four">
          <div>
            <div><i class='bx bxs-phone-call'></i></div>
            PRODUCTS & ORDERS
            <br />
            12280903 (Viettel)
            <br />
            12032487 (VTI)
            <br />
            24 hours a day
            <br />7 days a week
          </div>
          <div>
            <div><i class='bx bxs-message-dots'></i></div>
            PRODUCTS & ORDERS
            <br />
            Chat with us
            <br />
            24 hours a day
            <br />7 days a week
          </div>
          <div>
            <div><i class='bx bxs-edit-location'></i></div>
            STORE LOCATOR
            <br />
            Find Nike retail stores near you
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
