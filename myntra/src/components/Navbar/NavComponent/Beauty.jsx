import React from "react";
import styled from "styled-components";

const BeautyPopup = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: left;
  padding: 2vh 0 3vh 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #e6dede;
  background-color: #fafafa;
  .beauty {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 2.4vw;
  }
  .beauty > div {
    padding-top: 6px;
    margin-left: 10px;
  }
  .beauty > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 5px 14px 0px 14px;
  }
  h4 {
    color: #ec407a;
    margin-bottom: 6px;
  }
  .beauty > div > p {
    line-height: 1.2;
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: 200;
  }
  .beauty > div > p:hover {
    color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Beauty = () => {
  return (
    <BeautyPopup>
      <div className="beauty">
        <div>
          <h4>Makeup</h4>
          <p>Lipstick</p>
          <p>Lip Gloss</p>
          <p>Lip Liner</p>
          <p>Mascara</p>
          <p>Eyeliner</p>
          <p>Kajal</p>
          <p>Eyeshadow</p>
          <p>Foundation</p>
          <p>Primer</p>
          <p>Concealer</p>
          <p>Compact</p>
          <p>Nail Polish</p>
        </div>
        <div>
          <h4>Skincare, Bath & Body</h4>
          <p>Face Moisturiser</p>
          <p>Cleanser</p>
          <p>Masks & Peel</p>
          <p>Sunscreen</p>
          <p>Serum</p>
          <p>Face Wash</p>
          <p>Eye Cream</p>
          <p>Lip Balm</p>
          <p>Body Lotion</p>
          <p>Body Wash</p>
          <p>Body Scrub</p>
          <p>Hand Cream</p>

          <h4>Baby Care</h4>

          <h4>Masks</h4>
        </div>
        <div>
          <h4>Haircare</h4>
          <p>Shampoo</p>
          <p>Conditioner</p>
          <p>Hair Cream</p>
          <p>Hair Oil</p>
          <p>Hair Gel</p>
          <p>Hair Color</p>
          <p>Hair Serum</p>
          <p>Hair Accessory</p>
          <h4>Fragrances</h4>
          <p>Perfume</p>
          <p>Deodorant</p>
          <p>Body Mist</p>
        </div>
        <div>
          <h4>Appliances</h4>
          <p>Hair Straightener</p>
          <p>Hair Dryer</p>
          <p>Epilator</p>
          <h4>Men's Grooming</h4>
          <p>Trimmers</p>
          <p>Beard Oil</p>
          <p>Hair Wax</p>
          <h4>Beauty Gift & Makeup Set</h4>
          <p>Beauty Gift</p>
          <p>Makeup Kit</p>
          <h4>Premium Beauty</h4>
          <h4>Wellness & Hygiene</h4>
        </div>
        <div>
          <h4>Top Brands</h4>
          <p>Lakme</p>
          <p>Maybelline</p>
          <p>LOreal</p>
          <p>Philips</p>
          <p>Bath & Body Works</p>
          <p>THE BODY SHOP</p>
          <p>Biotique</p>
          <p>Mamaearth</p>
          <p>MCaffeine</p>
          <p>Nivea</p>
          <p>Lotus Herbals</p>
          <p>LOreal Professionnel</p>
          <p>KAMA AYURVEDA</p>
          <p>M.A.C</p>
          <p>Forest Essentials</p>
        </div>
      </div>
    </BeautyPopup>
  );
};

export default Beauty;
