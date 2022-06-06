import React from "react";
import PropTypes from "prop-types";

import "./style.css";
import ListProductControl from "../ListProductControl/ListProductControl";

PageProduct.propTypes = {};
const arrays = [
  "./1.png",
  "./2.png",
  "./3.png",
  "./4.png",
  "./5.png",
  "./6.png",
  "./7.png",
  "./8.png",
];
const arrays1 = [
  "./img/11.png",
  "./img/12.png",
  "./img/13.png",
  "./img/14.png",
];
function PageProduct(props) {
  return (
    <>
      <div className="page-product">
        <div className="page-product__img">
          {arrays.map((array, index) => (
            <img key={index} src={array} />
          ))}
        </div>
        <div className="page-product__information">
          <b>Nike Air Zoom Pegasus 39</b>
          <p>Women's Road Running Shoes</p>
          <span>3,519,000₫</span>
          <div className="page-product__information-img">
            {arrays1.map((array, index) => (
              <div key={index}>
                <img  src={array} />
              </div>
            ))}
          </div>
          <div className="page-product__information-size">
            <span>Select Size</span>
            <span>Size Guide</span>
          </div>
          <div className="page-product__information-EU">
            <div>EU 35.5</div>
            <div>EU 36</div>
            <div>EU 36.5</div>
            <div>EU 37</div>
            <div>EU 37.5</div>
            <div>EU 38</div>
            <div>EU 38.5</div>
            <div>EU 39</div>
            <div>EU 39.5</div>
          </div>
          <div className="page-product__information-Bag">Add to Bag</div>
          <div className="page-product__information-Favorite">Favourite</div>
          <p className="page-product__information-text1">
            This product is excluded from site promotions and discounts.
          </p>
          <ul style={{ paddingBottom: 20 }}>
            Running is your daily ritual, with every step taking you closer to
            your personal goal. Let the Nike Air Zoom Pegasus 39 help you ascend
            to new heights—whether you're training or jogging—with its intuitive
            design. More lightweight up top than the Pegasus 38 and ideal to
            wear in any season, it has a supportive sensation to help keep your
            feet contained, while underfoot cushioning and double Zoom Air units
            (1 more than the Peg 38) give you an extra pop to your step. Your
            trusted workhorse with wings is back. Time to fly.
            <li style={{ paddingTop: 30 }}>
              Colour Shown: Iris Whisper/Summit White/Light Madder Root/Madder
              Root
            </li>
            <li>Style: DH4072-501</li>
          </ul>
          <u>View Product Details</u>
          <div className="page-product__information-star luan">
            <div>Free Delivery and Returns</div>
            <i class="bx bx-chevron-up"></i>
          </div>
          <div className="page-product__information-star">
            <div>Reviews (0)</div>
            <i class="bx bx-chevron-up"></i>
          </div>
        </div>
      </div>
      <div className="page-product-bottom">
          <img src="./9.png"></img>
          <div>
              <b>Kid Tested, Grown-up Approved</b>
              <p>Grown-ups know and trust the Air Zoom Pegasus 39 and now kids can run and play all day too, thanks to the secure fit combined with the super-soft cushioning they need to get from one end of the playground to the other.</p>
          </div>
          <img src="./10.png"></img>
          <div>
              <b>Ready, Set, Zoom!</b>
              <p>The lightweight, engineered mesh helps keep feet cool as cucumbers during play, while the Zoom Air unit in the front of the shoe adds a springy bounce to every step, making kids feel like they are walking on air.</p>
          </div>
          <img src="./11.png"></img>
          <div>
              <b>Built to Last</b>
              <p>Whether kids are pounding the pavement or conquering climbing frames, the Pegasus 39 is built to last with a rubber sole and Waffle-inspired traction to help grip surfaces. Plus, an added coating on the toe tip provides extra durability.</p>
          </div>
      </div>
      <ListProductControl/>
    </>
  );
}

export default PageProduct;
