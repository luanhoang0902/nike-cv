import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./style.css";
import Header1 from "./component";
import { Link } from "react-router-dom";

Header.propTypes = {};
// Scroll
function Header(props) {
  const scrollTop = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      let croll = scrollTop.current;
      let a = document.querySelector(".header-middle");
      let scroll_y = this.scrollY;
      if (croll > scroll_y && scroll_y > 30) {
        a.classList.add("position-a");
        a.classList.remove("position-b");
      } else if (croll < scroll_y) {
        a.classList.add("position-b");
        a.classList.remove("position-a");
      } else if (scroll_y < 30) {
        a.classList.remove("position-b");
        a.classList.remove("position-a");
      }
      scrollTop.current = scroll_y;
    });

    return () => {
      window.removeEventListener("scroll", function (event) {});
    };
  }, []);
  // Search
  function handleOnclickSearch(props) {
    let a = document.querySelector(".header-middleAll");
    let b = document.querySelector(".header-middle__right-right");
    let c = document.querySelector(".header-middle__center");
    let d = document.querySelector(".header-middle__right-tick");
    let e = document.querySelector(".header-middle__right-left");
    let f = document.querySelector(".header-middle__right");
    let h = document.querySelector(".blur");
    // let h = document.body
    a.classList.add("search");
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.classList.add("searchNew");
    f.style.width = "65vw";
    h.style.display = "block";
    // h.classList.add("haha")
  }
  function handleOnclickSearchStop(props) {
    let a = document.querySelector(".header-middleAll");
    let b = document.querySelector(".header-middle__right-right");
    let c = document.querySelector(".header-middle__center");
    let d = document.querySelector(".header-middle__right-tick");
    let e = document.querySelector(".header-middle__right-left");
    let f = document.querySelector(".header-middle__right");
    let h = document.querySelector(".blur");

    // let h = document.body

    a.classList.remove("search");
    b.style.display = "flex";
    c.style.display = "flex";
    d.style.display = "none";
    e.classList.remove("searchNew");
    f.style.width = "280px";
    h.style.display = "none";

    // h.classList.remove("haha")
  }

  // setInterval List Text
  useEffect(() => {
    let bottomOne = document.querySelector(".header-bottom__one");
    let bottomTwo = document.querySelector(".header-bottom__two");
    let bottomThree = document.querySelector(".header-bottom__three");
  
    const timer = setInterval(handleTiming,4000);
    function handleTiming() {
      if(bottomOne.classList.contains("bottom-slide-active")){
        bottomOne.classList.remove("bottom-slide-active")
        bottomOne.classList.add("bottom-slide-next")
        bottomTwo.classList.add("bottom-slide-active")
      } else if(bottomTwo.classList.contains("bottom-slide-active")){
        bottomTwo.classList.remove("bottom-slide-active")
        bottomTwo.classList.add("bottom-slide-next")
        bottomThree.classList.add("bottom-slide-active")
      } else if(bottomThree.classList.contains("bottom-slide-active")){
        bottomThree.classList.remove("bottom-slide-active")
        bottomOne.classList.remove("bottom-slide-next")
        bottomTwo.classList.remove("bottom-slide-next")
        bottomOne.classList.add("bottom-slide-active")
      }
    }
    return () => {
      clearInterval(timer)
    }
  },[])
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top__left">
          <i class="bx bx-football"></i>
        </div>
        <div className="header-top__right">
          <div className = "header-top__right-hello">
            <p><Link to="/Help">Help</Link></p>
            <div className = "hello">
              <b>Help</b>
              <p>Order Status</p>
              <p>Dispatch and Delivery</p>
              <p>Returns</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>Terms of Sale</p>
              <p>Terms of Use</p>
              <p>Send Us Feedback</p>
            </div>
          </div>
          <div className = "header-top__right-item">Join Us</div>
          <div className = "header-top__right-item"><Link to="/login" style = {{direction: 'none'}}>Sign In</Link></div>
        </div>
      </div>
      <div className="header-middleAll">
        <div className="header-middle">
          <div className="header-middle__left">
            <Link to="/" ><i class="bx bx-bowl-rice"></i></Link>
          </div>
          <div className="header-middle__center">
            <div className="header-middle__center__active">
              Men
              <div className="men">
                <div className="men__one">
                  <div>
                    Một
                    <ul>
                      <li>A</li>
                      <li>B</li>
                      <li>C</li>
                      <li>D</li>
                    </ul>
                  </div>
                  <div>
                    Hai
                    <ul>
                      <li>a</li>
                      <li>b</li>
                      <li>c</li>
                      <li>d</li>
                    </ul>
                  </div>
                  <div>
                    Ba
                    <ul>
                      <li>E</li>
                      <li>F</li>
                      <li>G</li>
                      <li>H</li>
                    </ul>
                  </div>
                  <div>
                    Bốn
                    <ul>
                      <li>e</li>
                      <li>f</li>
                      <li>g</li>
                      <li>h</li>
                    </ul>
                  </div>
                  <div>
                    Năm
                    <ul>
                      <li>Hoàng</li>
                      <li>Văn</li>
                      <li>Luân</li>
                      <li>1997</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-middle__center__active">
              Women
              <div className="women">
                <div className="women__two">
                  <div>
                    Một1
                    <ul>
                      <li>Aa</li>
                      <li>Ba</li>
                      <li>Ca</li>
                      <li>Da</li>
                    </ul>
                  </div>
                  <div>
                    Hai1
                    <ul>
                      <li>aa</li>
                      <li>ba</li>
                      <li>ca</li>
                      <li>da</li>
                    </ul>
                  </div>
                  <div>
                    Ba1
                    <ul>
                      <li>Ea</li>
                      <li>Fa</li>
                      <li>Ga</li>
                      <li>Ha</li>
                    </ul>
                  </div>
                  <div>
                    Bốn1
                    <ul>
                      <li>ea</li>
                      <li>fa</li>
                      <li>ga</li>
                      <li>ha</li>
                    </ul>
                  </div>
                  <div>
                    Năm1
                    <ul>
                      <li>Hoànga</li>
                      <li>Văna</li>
                      <li>Luâna</li>
                      <li>1997a</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-middle__center__active">
              Kids
              <div className="kids">
                <div className="kids__three">
                  <div>Một2</div>
                  <div>Hai2</div>
                  <div>Ba2</div>
                  <div>Bốn2</div>
                  <div>Năm2</div>
                </div>
              </div>
            </div>
            <div className="header-middle__center__active">
              Customise
              <div className="customise">
                <div className="customise__four">
                  <div>Một3</div>
                  <div>Hai3</div>
                  <div>Ba3</div>
                  <div>Bốn3</div>
                  <div>Năm3</div>
                </div>
              </div>
            </div>
            <div className="header-middle__center__active">
              Sale
              <div className="sale">
                <div className="sale__five">
                  <div>Một4</div>
                  <div>Hai4</div>
                  <div>Ba4</div>
                  <div>Bốn4</div>
                  <div>Năm4</div>
                </div>
              </div>
            </div>
            <div className="header-middle__center__active">
              SNKRS
              <div className="snkrs">
                <div className="snkrs__six">
                  <div>Một5</div>
                  <div>Hai5</div>
                  <div>Ba5</div>
                  <div>Bốn5</div>
                  <div>Năm5</div>
                </div>
              </div>
            </div>
            <div className="anh"></div>
          </div>
          <div className="header-middle__right">
            <div
              className="header-middle__right-left"
              onClick={handleOnclickSearch}
            >
              <i class="bx bx-search"></i>
              <div>Search</div>
            </div>
            <div className="header-middle__right-right">
              <div>
                <i class="bx bx-heart"></i>
              </div>
              <div>
                <Link to="/Bag"><i class="bx bx-briefcase"></i></Link>
              </div>
            </div>
            <div
              className="header-middle__right-tick"
              onClick={handleOnclickSearchStop}
            >
              <i class="bx bx-x"></i>
            </div>
          </div>
        </div>
        <div className="blur" onClick={handleOnclickSearchStop}></div>
        {/* <div className = 'textSearch'>
          <div>Popular Search Terms</div>
          <div>Air Force 1</div>
          <div>Jordan</div> 
          <div>Air Max</div>
          <div>Blazer</div>
        </div> */}
        <div className="header-middle__center-hover"></div>
      </div>
      <div className="header-bottom">
        <div className="header-bottomAll">
          <div className="header-bottom__one bottom-slide-active">
            <div>Hello Nike App</div>
            <p>
              Download the app to access everything Nike. Get Your Great
            </p>
          </div>
          <div className="header-bottom__two ">
            <div>Save Up to 40%</div>
            <p>Shop All Our New Markdowns</p>
          </div>
          <div className="header-bottom__three">
            <div>Free Delivery</div>
            <p>Applies to orders of 5.000.000₫ or more. View details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
