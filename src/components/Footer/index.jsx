import React from "react";
import PropTypes from "prop-types";

import "./style.css";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top__left">
          <div className="footer-top__contentone">
            <b>FIND A STORE</b>
            <br /><br/>
            <b>BECOME A MEMBER</b>
            <br /><br/>
            <b>SIGN UP FOR EMAIL</b>
            <br /><br/>
            <b>SEND US FEEDBACK</b>
          </div>
          <div className="footer-top__contenttwo">
            <b>GET HELP</b>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>Payment Options</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-top__contentthree">
            <b>ABOUT NIKE</b>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>
        </div>
        <div className="footer-top__right">
          <div>
            <i class="bx bxl-twitter"></i>
          </div>
          <div>
            <i class="bx bxl-facebook"></i>
          </div>
          <div>
            <i class="bx bxl-youtube"></i>
          </div>
          <div>
            <i class="bx bxl-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__left">
          <div>
            <i class="bx bx-map">Vietnam</i>
          </div>
          <div>© 2022 Nike, Inc. All Rights Reserved</div>
        </div>
        <div className="footer-bottom__right">
          <div className = "guidesAll">Guides
          <div className = "guides">
            <div className ="guides__item">
              <div>Nike Adapt</div>
              <div>Nike Air Max</div>
              <div>Nike Flyleather</div>
              <div>Nike Pegasus</div>
              <div>Nike Zoom Fly</div>
            </div>
            <div className ="guides__item">
              <div>Nike Air</div>
              <div>Nike FlyEase</div>
              <div>Nike Free</div>
              <div>Nike React</div>
              <div>Nike ZoomX</div>
            </div>
            <div className ="guides__item">
              <div>Nike Air Force 1</div>
              <div>Nike Flyknit</div>
              <div>Nike Joyride</div>
              <div>Nike Vaporfly</div>
            </div>
          </div>
          </div>
          <div>Terms of Sale</div>
          <div>Terms of Use</div>
          <div>Nike Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
