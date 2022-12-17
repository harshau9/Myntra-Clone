import React from "react";
import styled from "styled-components";

const KidsPopup = styled.div`
  width: 72%;
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: left;
  padding: 2vh 0 3vh 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #e6dede;
  background-color: #fafafa;
  .kids {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 2.4vw;
  }
  .kids > div {
    padding-top: 6px;
    margin-left: 10px;
  }
  h4 {
    color: #ec407a;
    margin-bottom: 6px;
  }
  .kids > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 5px 14px 0px 14px;
  }

  .kids > div > p {
    line-height: 1.2;
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: 200;
  }
  .kids > div > p:hover {
    color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Kids = () => {
  return (
    <KidsPopup>
      <div className="kids">
        <div>
          <h4>Boys Clothing</h4>
          <p>T-Shirts</p>
          <p>Shirts</p>
          <p>Shorts</p>
          <p>Jeans</p>
          <p>Trousers</p>
          <p>Clothing Sets</p>
          <p>Ethnic Wear</p>
          <p>Track Pants & Pyjamas</p>
          <p>Jacket, Sweater & Sweatshirts</p>
          <p>Party Wear</p>
          <p>Innerwear & Thermals</p>
          <p>Nightwear & Loungewear</p>
          <p>Value Packs</p>
        </div>
        <div>
          <h4>Girls Clothing</h4>
          <p>Dresses</p>
          <p>Tops</p>
          <p>Tshirts</p>
          <p>Clothing Sets</p>
          <p>Lehenga choli</p>
          <p>Kurta Sets</p>
          <p>Party wear</p>
          <p>Dungarees & Jumpsuits</p>
          <p>Skirts & shorts</p>
          <p>Tights & Leggings</p>
          <p>Jeans, Trousers & Capris</p>
          <p>Jacket, Sweater & Sweatshirts</p>
          <p>Innerwear & Thermals</p>
          <p>Nightwear & Loungewear</p>
          <p>Value Packs</p>
        </div>
        <div>
          <h4>Footwear</h4>
          <p>Casual Shoes</p>
          <p>Flipflops</p>
          <p>Sports Shoes</p>
          <p>Flats</p>
          <p>Sandals</p>
          <p>Heels</p>
          <p>School Shoes</p>
          <p>Socks</p>
          <h4>Toys</h4>
          <p>Learning & Development</p>
          <p>Activity Toys</p>
          <p>Soft Toys</p>
          <p>Action Figure / Play set</p>
        </div>
        <div>
          <h4>Infants</h4>
          <p>Bodysuits</p>
          <p>Rompers & Sleepsuits</p>
          <p>Clothing Sets</p>
          <p>Tshirts & Tops</p>
          <p>Dresses</p>
          <p>Bottom wear</p>
          <p>Winter Wear</p>
          <p>Innerwear & Sleepwear</p>
          <p>Infant Care</p>
          <h4>Home & Bath</h4>
          <h4>Personal Care</h4>
        </div>
        <div>
          <h4>Kids Accessories</h4>
          <p>Bags & Backpacks</p>
          <p>Watches</p>
          <p>Jewellery & Kids accessory</p>
          <p>Sunglasses</p>
          <p>Masks & Protective Gears</p>
          <p>Caps & Hats</p>
          <h4>Brands</h4>
          <p>H&M</p>
          <p>Max Kids</p>
          <p>Pantaloons</p>
          <p>United Colors Of Benetton Kids</p>
          <p>YK</p>
          <p>U.S. Polo Assn. Kids</p>
          <p>Mothercare</p>
          <p>HRX</p>
        </div>
      </div>
    </KidsPopup>
  );
};

export default Kids;
