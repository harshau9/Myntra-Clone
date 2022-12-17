import React from "react";
import styled from "styled-components";

const WomenPopup = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: left;
  padding: 2vh 0 3vh 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #e6dede;
  background-color: #fafafa;
  .women {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1.8vw;
  }
  .women > div {
    padding-top: 6px;
    margin-left: 10px;
  }
  .women > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 5px 14px 0px 14px;
  }
  h4 {
    color: #ec407a;
    margin-bottom: 6px;
  }
  .women > div > p {
    line-height: 1.2;
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: 200;
  }
  .women > div > p:hover {
    color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Women = () => {
  return (
    <>
      <WomenPopup>
        <div className="women">
          <div>
            <h4>Indian & Fusion Wear</h4>
            <p>Kurtas & Suits</p>
            <p>Kurtis, Tunics & Tops</p>
            <p>Sarees</p>
            <p>Ethnic Wear</p>
            <p>Leggings, Salwars & Churidars</p>
            <p>Skirts & Palazzos</p>
            <p>Dress Materials</p>
            <p>Lehenga Cholis</p>
            <p>Dupattas & Shawls</p>
            <p>Jackets</p>
            <h4>Belts, Scarves & More</h4>
            <h4>Watches & Wearables</h4>
          </div>
          <div>
            <h4>Western Wear</h4>
            <p>Dresses</p>
            <p>Tops</p>
            <p>Tshirts</p>
            <p>Jeans</p>
            <p>Trousers & Capris</p>
            <p>Shorts & Skirts</p>
            <p>Co-ords</p>
            <p>Playsuits</p>
            <p>Jumpsuits</p>
            <p>Shrugs</p>
            <p>Sweaters & Sweatshirts</p>
            <p>Jackets & Coats</p>
            <p>Blazers & Waistcoats</p>
            <h4>Plus Size</h4>
          </div>
          <div>
            <h4>Maternity</h4>
            <h4>Sunglasses & Frames</h4>
            <h4>Footwear</h4>
            <p>Flats</p>
            <p>Casual Shoes</p>
            <p>Heels</p>
            <p>Boots</p>
            <p>Sports Shoes</p>
            <h4>Sports & Active Wear</h4>
            <p>Clothing</p>
            <p>Footwear</p>
            <p>Sports Accessories</p>
            <p>Sports Equipment</p>
          </div>
          <div>
            <h4>Lingerie & Sleepwear</h4>
            <p>Bra</p>
            <p>Briefs</p>
            <p>Shapewear</p>
            <p>Sleepwear & Loungewear</p>
            <p>Swimwear</p>
            <p>Camisoles & Thermals</p>
            <h4>Beauty & Personal Care</h4>
            <p>Makeup</p>
            <p>Skincare</p>
            <p>Premium Beauty</p>
            <p>Lipsticks</p>
            <p>Fragrances</p>
          </div>
          <div>
            <h4>Gadgets</h4>
            <p>Smart Wearables</p>
            <p>Fitness Gadgets</p>
            <p>Headphones</p>
            <p>Speakers</p>
            <h4>Jewellery</h4>
            <p>Fashion Jewellery</p>
            <p>Fine Jewellery</p>
            <p>Earrings</p>
            <h4>Backpacks</h4>
            <h4>Handbags, Bags & Wallets</h4>
            <h4>Luggages & Trolleys</h4>
          </div>
        </div>
      </WomenPopup>
    </>
  );
};

export default Women;
