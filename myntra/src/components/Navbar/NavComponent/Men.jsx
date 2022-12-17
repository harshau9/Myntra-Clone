import React from "react";
import styled from "styled-components";

const MenPopup = styled.div`
  width: 77%;
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: left;
  padding: 2vh 0 3vh 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #e6dede;
  background-color: #fafafa;
  .men {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 2.4vw;
  }
  .men > div {
    padding-top:6px;
    margin-left: 10px;
  }
  .men > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 5px 14px 0px 14px;
  }
  h4 {
    color: #ec407a;
    margin-bottom:6px;
  }
  .men > div > p {
    line-height: 1.2;
    margin-bottom:3px;
    font-size: 14px;
    font-weight: 200;
  }
  .men > div > p:hover {
    color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Men = () => {
  return (
    <MenPopup>
      <div className="men">
        <div>
          <h4>Topwear</h4>
          <p>T-Shirts</p>
          <p>Casual Shirts</p>
          <p>Formal Shirts</p>
          <p>Sweat Shirts</p>
          <p>Sweaters</p>
          <p>Jackets</p>
          <p>Blazers & Coats</p>
          <p>Suits</p>
          <p>Rain Jackets</p>

          <h4>Indian & Festive Wear</h4>
          <p>Kurtas & Kurts Sets</p>
          <p>Sherwanis</p>
          <p>Nehru Jackets</p>
          <p>Dhotis</p>
        </div>
        <div>
          <h4>Bottomwear</h4>
          <p>Jeans</p>
          <p>Casual Trousers</p>
          <p>Formal Trousers</p>
          <p>Shorts</p>
          <p>Track Pants & Joggers</p>

          <h4>Innerwear & Sleepwear</h4>
          <p>Briefs & Trunks</p>
          <p>Boxers</p>
          <p>Vests</p>
          <p>Sleepwear & Loungewear</p>
          <p>Thermals</p>
          <h4>Plus Size</h4>
        </div>
        <div>
          <h4>Footwear</h4>
          <p>Casual Shoes</p>
          <p>Sports Shoes</p>
          <p>Formal Shoes</p>
          <p>Sneakers</p>
          <p>Sandals & Floaters</p>
          <p>Flip Flops</p>
          <p>Socks</p>
          <h4>Personal Care & Grooming</h4>
          <h4>Sunglasses & Frames</h4>
          <h4>Watches</h4>
        </div>
        <div>
          <h4>Sports & Active Wear</h4>
          <p>Sports Shoes</p>
          <p>Sports Sandals</p>
          <p>Active T-Shirts</p>
          <p>Track Pants & Shorts</p>
          <p>Tracksuits</p>
          <p>Jackets & Sweatshirts</p>
          <p>Sports Accessories</p>
          <p>Swimwear</p>

          <h4>Gadgets</h4>
          <p>Smart Wearables</p>
          <p>Fitness Gadgets</p>
          <p>Headphones</p>
          <p>Speakers</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <h4>Fashion Accessories</h4>
          <p>Wallets</p>
          <p>Belts</p>
          <p>Perfumes & Body Mists</p>
          <p>Trimmers</p>
          <p>Deodorants</p>
          <p>Ties, Cufflinks & Pocket Squares</p>
          <p>Accessory Gift Sets</p>
          <p>Caps & Hats</p>
          <p>Mufflers, Scarves & Gloves</p>
          <p>Phone Cases</p>
          <p>Rings & Wristwear</p>
          <p>Helmets</p>
          <h4>Bags & Backpacks</h4>
          <h4>Luggages & Trollyes</h4>
        </div>
      </div>
    </MenPopup>
  );
};

export default Men;
