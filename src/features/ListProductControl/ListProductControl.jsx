import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./style.css";

ListProductControl.propTypes = {};
const arrays = [
  "./img/11.png",
  "./img/12.png",
  "./img/13.png",
  "./img/14.png",
  "./img/21.png",
  "./img/22.png",
  "./img/31.png",
  "./img/32.png",
  "./img/41.png",
  "./img/42.png",
  "./img/43.png",
  "./img/51.png",
];
function ListProductControl(props) {
  const listControl = useRef();
  const leftControl = useRef();
  const rightControl = useRef();
  const [controler, setControler] = useState(0);

  const handleLeftControl = (e) => {
    if (controler > 0) {
      listControl.current.scrollLeft -= 476;
      leftControl.current.classList.add("border");
    }
    if (controler >= 1) {
      setControler(controler - 1);
    }
  };

  const handleRightControl = (e) => {
    if (controler < 9) {
      listControl.current.scrollLeft += 476;
      rightControl.current.classList.add("border");
    }
    if (controler <= 8) {
      setControler(controler + 1);
    }
  };
  useEffect(() => {
    if (controler > 0) {
      leftControl.current.style.cursor = "pointer";
      leftControl.current.style.backgroundColor = "rgb(216, 216, 216)";
      // leftControl.current.classList.add('next')
    } else {
      leftControl.current.style.cursor = "default";
      leftControl.current.style.backgroundColor = "rgb(244, 244, 244)";
      leftControl.current.classList.remove("border");
    }
    if (controler > 8) {
      rightControl.current.style.cursor = "default";
      rightControl.current.style.backgroundColor = "rgb(244, 244, 244)";
      rightControl.current.classList.remove("border");
    } else {
      rightControl.current.style.cursor = "pointer";
      rightControl.current.style.backgroundColor = "rgb(216, 216, 216)";
    }
  }, [controler]);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!(e.target.getAttribute("remove1") === "luan")) {
        leftControl.current.classList.remove("border");
      }
      if (!(e.target.getAttribute("remove2") === "luan1")) {
        rightControl.current.classList.remove("border");
      }
    });
    // return document.removeEventListener('click')
  }, []);
  return (
    <div className="listProductControl">
      <div className="listProductControl-top">
        <div>You Might Also Like</div>
        <div className="listProductControl-top__control">
          <div onClick={handleLeftControl} ref={leftControl} remove1="luan">
            <i class="bx bx-chevron-left" remove1="luan"></i>
          </div>
          <div onClick={handleRightControl} ref={rightControl} remove2="luan1">
            <i class="bx bx-chevron-right" remove2="luan1"></i>
          </div>
        </div>
      </div>
      <div className="listProductControlAll" ref={listControl}>
        {arrays.map((array, index) => (
          <div className="listProductControl-content" key={index}>
            <img src={array}></img>
            <p>Nike Air Zoom Pegasus 39</p>
            <p>Women's Road Running Shoes</p>
            <span>3,519,000₫</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProductControl;
