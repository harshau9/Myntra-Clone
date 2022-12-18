import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { ImagesBox } from "./Pages/FirstSlideBox/ImagesBox";
import { SingleNameBox } from "./Pages/SecondImageBox.jsx/SingleNameBox";
import { ImageProductBox } from "./Pages/SecondImageBox.jsx/ImageProductBox";
import { ImageBoxGrid } from "./Pages/SecondImageBox.jsx/ImageBoxGrid";
import "./Carousel.css";
import Carousel1 from "./Carousel1";

import t1 from "./HomeMidImages/t1.jpg";
import t2 from "./HomeMidImages/t2.jpg";
import t3 from "./HomeMidImages/t3.jpg";
import t4 from "./HomeMidImages/t4.jpg";
import t5 from "./HomeMidImages/t5.jpg";
import t6 from "./HomeMidImages/t6.jpg";
import t7 from "./HomeMidImages/t7.jpg";
import t8 from "./HomeMidImages/t8.jpg";
import t9 from "./HomeMidImages/t9.jpg";
import t10 from "./HomeMidImages/t10.jpg";
import t11 from "./HomeMidImages/t11.jpg";
import t12 from "./HomeMidImages/t12.jpg";
import s1 from "./HomeMidImages/s1.gif";
import s2 from "./HomeMidImages/s2.jpg";

//omgsection images
import omg1 from "./HomeMidImages/omg1.jpg";
import omg2 from "./HomeMidImages/omg2.jpg";
import omg3 from "./HomeMidImages/omg3.jpg";
import omg4 from "./HomeMidImages/omg4.jpg";
import omg5 from "./HomeMidImages/omg5.jpg";
import omg6 from "./HomeMidImages/omg6.jpg";
import omg7 from "./HomeMidImages/omg7.png";
import omg8 from "./HomeMidImages/omg8.jpg";
import omg9 from "./HomeMidImages/omg9.png";
import omg10 from "./HomeMidImages/omg10.png";
//  toplist section images
import tl1 from "./HomeMidImages/tl1.jpg";
import tl2 from "./HomeMidImages/tl2.jpg";
import tl3 from "./HomeMidImages/tl3.jpg";
import tl4 from "./HomeMidImages/tl4.jpg";
import tl5 from "./HomeMidImages/tl5.jpg";
import tl6 from "./HomeMidImages/tl6.jpg";
import tl7 from "./HomeMidImages/tl7.jpg";
import tl8 from "./HomeMidImages/tl8.jpg";
import tl9 from "./HomeMidImages/tl9.jpg";
import tl10 from "./HomeMidImages/tl10.jpg";

import c1 from "./HomeMidImages/c1.jpg";
import c2 from "./HomeMidImages/c2.jpg";
import c3 from "./HomeMidImages/c3.jpg";
import c4 from "./HomeMidImages/c4.jpg";
import c5 from "./HomeMidImages/c5.jpg";
import c6 from "./HomeMidImages/c6.jpg";
import c7 from "./HomeMidImages/c7.jpg";
import c8 from "./HomeMidImages/c8.jpg";
import c9 from "./HomeMidImages/c9.jpg";
import c10 from "./HomeMidImages/c10.jpg";
import c11 from "./HomeMidImages/c11.jpg";
import c12 from "./HomeMidImages/c12.jpg";
import c13 from "./HomeMidImages/c13.jpg";
import c14 from "./HomeMidImages/c14.jpg";
import c15 from "./HomeMidImages/c15.jpg";
import c16 from "./HomeMidImages/c16.jpg";
import c17 from "./HomeMidImages/c17.jpg";
import c18 from "./HomeMidImages/c18.jpg";
import c19 from "./HomeMidImages/c19.jpg";
import c20 from "./HomeMidImages/c20.jpg";
import c21 from "./HomeMidImages/c21.jpg";
import c22 from "./HomeMidImages/c22.jpg";
import c23 from "./HomeMidImages/c23.jpg";
import c24 from "./HomeMidImages/c24.jpg";
import c25 from "./HomeMidImages/c25.jpg";
import c26 from "./HomeMidImages/c26.jpg";
import c27 from "./HomeMidImages/c27.jpg";
import c28 from "./HomeMidImages/c28.jpg";
import c29 from "./HomeMidImages/c29.jpg";
import c30 from "./HomeMidImages/c30.jpg";
import c31 from "./HomeMidImages/c31.png";
import c32 from "./HomeMidImages/c32.jpg";
import c33 from "./HomeMidImages/c33.jpg";
import c34 from "./HomeMidImages/c34.jpg";
import c35 from "./HomeMidImages/c35.jpg";
import c36 from "./HomeMidImages/c36.png";

export const HomeMid = () => {
  const ImagesFirstCol = [t1, t5, t9];
  const ImagesSecCol = [t2, t6, t10];
  const ImagesThirdCol = [t3, t7, t11];
  const ImagesForthCol = [t4, t8, t12];

  //   Omg deal Page Here Images

  const OmgDealPageImage = [
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/ae1ec65c-4640-4177-8531-c9d76bc380911669141574035-Crocs_-_Footwear_Min_40_Off.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/9fa02568-c753-42b2-9ec1-5acadbb4882f1669141575394-Skechers_Sports_and_Casual_Shoes_Upto_40_Off.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/0a27d2d0-dfda-4650-b2cf-9e9a308992ef1669141573670-Adidas_Sports_and_Casual_Shoes_Min_50_OFF.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/3/48f92ec4-7fda-45cd-8d13-d5c89bbcfcc41670043265628-3.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/4fd26e46-e935-4e82-b351-048d259dc7ac1670305299746-unnamed---2022-12-06T111133.557.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/791b4834-d420-4613-9ee0-7179570a7c9c1669141575917-Wildcraft-_Skybags_and_more_Backpacks_and_Trolleys_Starting_499_1299.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/820d5366-d36b-40fb-a9af-a850931d1f9f1669141575135-Premium_Men_Suits_and_Blazer_by_Louis_Philippe-_Blackberrys_-_More.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/3/41501763-bbb4-43a8-95c7-8c72f4046a5c1670043300970-image_jpeg271683719.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/31ec9256-31a0-4f0d-b344-47ba062291d01669141574185-FM-JJ_Min_60_off.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/321c0bbd-5498-4725-a2ee-6513014759fc1669141574303-Highlander-_Locomotive_Min_60.png",
  ];

  const OmgDealPageImage2 = [
    omg1,
    omg2,
    omg3,
    omg4,
    omg5,
    omg6,
    omg7,
    omg8,
    omg9,
    omg10,
  ];
  const SuperShavingZoneImg =
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/246a6b35-8899-43ba-9f97-2ea0ac5a88ba1670406285563-Super-Savings-Zone.jpg";
  const SuperShavingZone = [
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/78006e87-07ac-4227-919f-97ae6efd89721669126107846-Budget-Buys_Kurtas-_-Kurta-Sets.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/79714091-588c-4cb5-81a1-f703873e41f81669126108310-Budget-Buys_Trimmers-_-Epilators.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/4f6f54a0-13d0-46d1-89ab-f2fd38881d091669126108350-Budget-Buys_T-Shirts.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/19bf2972-f2b8-4cf5-8fc1-f34b3504c5bf1669126107582-Budget-Buys_Casual-Shirts.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/0d6914af-97f7-4e5d-b701-c02319d6a4971669126107792-Budget-Buys_Jeans-1.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/7bc252d1-21f5-470c-9cad-6b836e83cda21669126108134-Budget-Buys_Sport-Shoes.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/ef3d63e1-822e-439b-a3f8-60116ebb72351669126107591-Budget-Buys_Casual-Shoes.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/92590d99-c48b-417d-a883-f25a8e299a501669126108146-Budget-Buys_Suits-_-Blazers.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/3c32f151-b6cd-4d94-ac59-e36922b0c34e1669126107714-Budget-Buys_Formal-Shoes.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/0967cf9c-7d60-4b5d-a5f2-754022c2ff751669126108157-Budget-Buys_Sunglasses.jpg",
  ];
  const SuperShavingZone2 = [
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/0d424e46-f1ab-4a07-a1d3-2022c1c504341669126107909-Budget-Buys_Makeup-Essentials.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/21c605d4-10bd-4f8b-90ff-d4d0b9ffe9381669126108049-Budget-Buys_Shampoos-_-Conditioners.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/2b90cd24-0974-4ae0-ab87-a221af5a34301669126107653-Budget-Buys_Flats-_-Heels.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/5126b4a0-e422-453f-8d86-0529168bbc101669126107812-Budget-Buys_Kids-Wear.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/d1842a56-6e30-4fc4-8151-5de17b0a53d81669126108419-Budget-Buys_Women_s-Activewear.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/d4fa83e5-45e1-4bae-987e-e207a59df3171669126107621-Budget-Buys_Dresses.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/065a4493-d0f1-43ee-b227-eda280d271a51669126107986-Budget-Buys_Nightwear.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/03a59be8-870b-46eb-ac88-afa9f222cf831669126107859-Budget-Buys_Kurtas.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/48ca5042-412c-4ee5-a987-0f5a52d854bc1669126107785-Budget-Buys_Jeans.jpg",
    "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/155ac6a3-e1fc-4eea-a576-cb7ffaa5ee451669126108365-Budget-Buys_T-Shirts-1.jpg",
  ];

  const TopListStyleBox =
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/28cff5a2-9d32-42f6-b160-64617ea62e211670406647314-Top-Listed-Styles.jpg";

  const TopListStyle2 = [tl1, tl2, tl3, tl4, tl5, tl6, tl7, tl8, tl9, tl10];
  const TopListStyle = [
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/7cfd0226-2432-4b44-8e54-e5ebd971a4e71669282235068-Quick-Links_Kurtas.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/a5237de7-461d-4b3b-9b87-5966ee32d2231669282235059-Quick-Links_Kurta-Sets.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/1b5333c3-221b-4c18-8237-32c5099df3f11669282235187-Quick-Links_Tops-_-Tunics.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/ad2a26c0-42be-44f4-a96c-06d12b1503761669282235098-Quick-Links_Sarees.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/38321884-157c-4e31-972c-c0b026fa8c8b1669282234973-Quick-Links_Dresses.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/b8a88e48-283a-4e6f-a103-9f731576f3991669282235247-Quick-Links_women-Jeans.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/39eb221b-be96-4b8c-8011-dc1001bf44651669282235257-Quicklinks_-Jewellery.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/53305c45-1afe-4ed0-8f36-839f8c8f93041669282235267-Quicklinks_Active-wear.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/0933071b-61e5-415c-bce5-35a759d481651669282235177-Quick-Links_Thermals.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/24/2ab9b180-ab97-4dc1-bbbf-b90a9333e37e1669282235144-Quick-Links_Sweaters.jpg",
  ];

  const NeverSeenBestOfferImg =
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/418510b5-16fc-4853-9323-1785df1a38ce1670406564990-Never-Seen-Before-Offers.jpg";
  const NeverSeenBestOffer = [
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/dad0a3ea-cfd7-496c-8396-a2b62c6eb5491669128364179-NEW_BALANCE.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/9ea32ee1-c2d9-4567-a114-49023ab871121670305246536-image_jpeg240129674.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/682ed82b-415e-4e02-806f-71d0e15f4d2a1670305267685-image_png1974730271.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/213de7f1-a12c-4545-90bf-eb2da5ed5be61669128364043-GANT.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/44e2cbe1-64a7-4084-b9ca-118a7ce8672e1669128364091-Koton.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/0f575d53-fc61-44d9-b66b-33feb313bfd81670305340733-image_jpeg_2055234102.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/4e67fbfc-8378-46e2-92c1-54eea5c54c071669128364144-Marks_and_Spencers.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/a6253d81-acea-441b-a322-0e78b5a572631669128364235-Under_Armour.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/ce294e2d-4858-40a5-b1d9-3f4ee2eeaf861669128364204-Scuderia_Ferarri_.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/4d5d9709-1009-4dc3-bb1c-e8ccb0ff55a81670305379623-image_jpeg_471024500.jpg",
  ];
  const NeverSeenBestOffer2 = [
    "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/9eafe17b-08b6-4deb-a9d4-71d669df0a171669128364245-URBANIC.png",
    "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/ae80119a-e9ed-4dc3-aab6-76023ff6d0861669128364171-NA-KD.png",
    "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/5266cae2-c776-4191-b5b3-e233278a52fc1669128364026-FOREVER_NEW.png",
    "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/ddbd5fba-da5f-4bdf-8ebc-2012c832ccd41669128364119-MANGO.png",
    "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/af96cb36-e63a-4f16-a9a5-ae1fe5869cf51669128363986-8_SECONDS.jpg",
    "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/a8a9c06e-aa3a-4713-a407-5b4b3ad25ce41669128364255-Zalora.png",
    "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/145efd9d-25b8-4b2f-8449-8ee160fdbba41669128364081-JC_collection.png",
    "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/981d5c34-3b2e-4f29-83f0-54ba71661b0c1669128364063-GUESS_-copy-_.jpg",
    "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/e1e5025c-6e03-4748-8da3-a43b2836d3ab1670305319476-_18965747722F1f7d2fe7_fab2_4d54_b725_723ec650bfd5-2Fimage_jpeg_747326334.jpg",
  ];

  const ShopByCatogaryImg =
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/3a8ff13b-934d-4ad3-b73f-bb64660dd82a1670406141566-SALE-Sectional-Header_1-Line-----7.jpg";
  const ShopByCatogary = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
    c21,
    c22,
    c23,
    c24,
    c25,

    c26,

    c27,
    c28,
    c29,
    c30,
    c31,
    c32,
    c33,
    c34,
    c35,
    c36,
  ];

  const LastData = [
    "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/68359821-6fc5-44ba-9349-cb61582e85041670399588996-MP_Shop-By-Category_14.jpg",
    "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/a1dddc1c-a9ed-4e9c-9df3-38fd7cb126f91670399589007-MP_Shop-By-Category_15.jpg",
  ];
  return (
    <Box pt={"80px"}>
      <Carousel1 />
      {/* <Box m="auto" className="slideshow"></Box> */}

      {/* <Flex>
        <ImagesBox  data={ImagesFirstCol} />
        <ImagesBox  data={ImagesSecCol} />
        <ImagesBox  data={ImagesThirdCol} />
        <ImagesBox  data={ImagesForthCol} />
        <Box></Box>
      </Flex> */}

      {/* Lowest Price Ever  */}
      <Box>
        <SingleNameBox data={s1} />
      </Box>
      <Box>
        <SingleNameBox data={s2} />
      </Box>

      <Box>
        <ImageProductBox data={OmgDealPageImage} />
      </Box>
      <Box>
        <ImageProductBox data={OmgDealPageImage2} />
      </Box>

      {/* Super Shaving Zone */}

      <Box>
        <SingleNameBox data={SuperShavingZoneImg} />
      </Box>
      <Box>
        <ImageProductBox data={SuperShavingZone} />
      </Box>
      <Box>
        <ImageProductBox data={SuperShavingZone2} />
      </Box>

      {/* Top List Style */}

      <Box>
        <SingleNameBox data={TopListStyleBox} />
      </Box>
      <Box>
        <ImageProductBox data={TopListStyle2} />
      </Box>
      <Box>
        <ImageProductBox data={TopListStyle} />
      </Box>

      {/* Never Seen Best Offer Img */}

      <Box>
        <SingleNameBox data={NeverSeenBestOfferImg} />
      </Box>
      <Box>
        <ImageProductBox data={NeverSeenBestOffer} />
      </Box>
      <Box>
        <ImageProductBox data={NeverSeenBestOffer2} />
      </Box>

      {/* Never Seen Best Offer */}

      <Box>
        <SingleNameBox data={ShopByCatogaryImg} />
      </Box>
      <Box>
        <ImageBoxGrid data={ShopByCatogary} />
        <Flex>
          {LastData.map((Src) => (
            <Box>
              <Image src={Src} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
