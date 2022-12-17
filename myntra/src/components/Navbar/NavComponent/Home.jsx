import React from "react";
import styled from "styled-components";

const HomePopup = styled.div`
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
  .home {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 2.4vw;
  }
  .home > div {
    padding-top: 6px;
    margin-left: 10px;
  }
  .home > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 5px 14px 0px 14px;
  }
  h4 {
    color: #ec407a;
    margin-bottom: 6px;
  }
  .home > div > p {
    line-height: 1.2;
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: 200;
  }
  .home > div > p:hover {
    color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Home = () => {
  return (
    <HomePopup>
      <div className="home">
        <div>
          <h4>Bed Linen & Furnishing</h4>
          <p>Bed Runners</p>
          <p>Mattress Protectors</p>
          <p>Bedsheets</p>
          <p>Bedding Sets</p>
          <p>Blankets, Quilts & Dohars</p>
          <p>Pillows & Pillow Covers</p>
          <p>Bed Covers</p>
          <p>Diwan Sets</p>
          <p>Chair Pads & Covers</p>
          <p>Sofa Covers</p>
          <h4>Flooring</h4>
          <p>Floor Runners</p>
          <p>Carpets</p>
          <p>Floor Mats & Dhurries</p>
          <p>Door Mats</p>
        </div>
        <div>
          <h4>Bath</h4>
          <p>Bath Towels</p>
          <p>Hand & Face Towels</p>
          <p>Beach Towels</p>
          <p>Towels Set</p>
          <p>Bath Rugs</p>
          <p>Bath Robes</p>
          <p>Bathroom Accessories</p>
          <p>Shower Curtains</p>

          <h4>Lamps & Lighting</h4>
          <p>Floor Lamps</p>
          <p>Ceiling Lamps</p>
          <p>Table Lamps</p>
          <p>Wall Lamps</p>
          <p>Outdoor Lamps</p>
          <p>String Lights</p>
        </div>
        <div>
          <h4>Home Décor</h4>
          <p>Plants & Planters</p>
          <p>Aromas & Candles</p>
          <p>Clocks</p>
          <p>Mirrors</p>
          <p>Wall Décor</p>
          <p>Festive Decor</p>
          <p>Pooja Essentials</p>
          <p>Wall Shelves</p>
          <p>Fountains</p>
          <p>Showpieces & Vases</p>
          <p>Ottoman</p>
          <h4>Cushions & Cushion Covers</h4>
          <h4>Curtains</h4>
        </div>
        <div>
          <h4>Home Gift Sets</h4>
          <h4>Kitchen & Table</h4>
          <p>Table Runners</p>
          <p>Dinnerware & Serveware</p>
          <p>Cups and Mugs</p>
          <p>Bakeware & Cookware</p>
          <p>Kitchen Storage & Tools</p>
          <p>Bar & Drinkware</p>
          <p>Table Covers & Furnishings</p>
          <h4>Storage</h4>
          <p>Bins</p>
          <p>Hangers</p>
          <p>Organisers</p>
          <p>Hooks & Holders</p>
          <p>Laundry Bags</p>
        </div>
        <div>
          <h4>Brands</h4>
          <p>H&M</p>
          <p>Marks & Spencer</p>
          <p>Home Centre</p>
          <p>Spaces</p>
          <p>D'Decor</p>
          <p>Story@Home</p>
          <p>Pure Home & Living</p>
          <p>Swayam</p>
          <p>Raymond Home</p>
          <p>Maspar</p>
          <p>Trident</p>
          <p>Cortina</p>
          <p>Random</p>
          <p>Elementry</p>
          <p>ROME</p>
          <p>SEJ by Nisha Gupta</p>
        </div>
      </div>
    </HomePopup>
  );
};

export default Home;
