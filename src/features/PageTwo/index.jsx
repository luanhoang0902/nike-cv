import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import './style.css'
import ProductList from "./pages/ProductList";

PageTwo.propTypes = {};

function PageTwo(props) {
    const scrollTop = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      let croll = scrollTop.current;
      let a = document.querySelector(".pageTwo-top");
      let scroll_y = this.scrollY;
      if (croll < scroll_y && scroll_y > 178) {
        a.classList.add("position-c");
        a.classList.remove("position-d");
      } else if (croll > scroll_y) {
        a.classList.remove("position-c");
        a.classList.add("position-d");
      } else if (scroll_y < 110) {
        a.classList.remove("position-d");
        a.classList.remove("position-c");
      }
      scrollTop.current = scroll_y;
    });

    return () => {
      window.removeEventListener("scroll", function (event) {});
    };
  }, []);
    return (
    <div className="pageTwo" style={{padding: '0 50px'}}>
        <p>Running/Shoes</p>
      <div className="pageTwo-top">
          <div style={{fontSize:'24px'}}>Running Shoes(122)</div>
          <div className="pageTwo-top__right">
              <div>Hide Filters
                <i class='bx bx-candles'></i>
              </div>
              <div>Sort By
                 <i class='bx bx-chevron-down'></i>
              </div>
          </div>
      </div>
      <div className="pageTwo-content" style={{display: 'flex',width:'100%'}}>
        <ProductList />
      </div>
    </div>
  );
}

export default PageTwo;
