import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { ImagesBox } from "./Pages/FirstSlideBox/ImagesBox";
import { SingleNameBox } from "./Pages/SecondImageBox.jsx/SingleNameBox";
import { ImageProductBox } from "./Pages/SecondImageBox.jsx/ImageProductBox";
import { ImageBoxGrid } from "./Pages/SecondImageBox.jsx/ImageBoxGrid";
export const Mens = () => {

  const ImagesFirstCol = [
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/59b21fdd-7b4c-432f-83c0-e4d21110a9d41670400389365-Main-Banner_Desktop_02.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/a4e166ea-b571-4a7f-8326-700274ff08971670400389406-Main-Banner_Desktop_06.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/dfc9923a-e365-4ce6-9156-ab72f8a745a81670400389441-Main-Banner_Desktop_10.jpg",
  ]

  const ImagesSecCol = [
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/db05b423-c9df-4303-8d32-88bf42d781e41670400389376-Main-Banner_Desktop_03.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/076a8a10-0149-4350-8ac0-016a0a103f901670400389415-Main-Banner_Desktop_07.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/8ccff01e-c237-4a38-b226-aa374ac40f921670400389449-Main-Banner_Desktop_11.jpg",
  ];
  const ImagesThirdCol = [
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/d2252c3f-fc8a-434c-b9b0-55351bc32a401670400389386-Main-Banner_Desktop_04.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/6f5f7579-650a-4a39-a23b-50bf42c8d3d81670400389423-Main-Banner_Desktop_08.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/e0c07b14-4f38-4f1d-9e97-0721d0c1c46a1670400389458-Main-Banner_Desktop_12.jpg",
  ];
  const ImagesForthCol = [
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/bbb1324b-08d7-495a-973b-833d391ff4dd1670400389395-Main-Banner_Desktop_05.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/20d7dfec-906b-4c5e-8e9d-7e41b95c046a1670400389431-Main-Banner_Desktop_09.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/ad5aee0f-72f7-455c-9a70-30b37036cc6b1670400389466-Main-Banner_Desktop_13.jpg",
  ];



//   Omg deal Page Here Images
  const LowestBox = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/8/c31bd037-958b-40fa-bdaf-3f0fc1c71ce21670497018730-Crazy-deals-DK.jpg"
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
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/321c0bbd-5498-4725-a2ee-6513014759fc1669141574303-Highlander-_Locomotive_Min_60.png"

  ]


  const SuperShavingZoneImg = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/246a6b35-8899-43ba-9f97-2ea0ac5a88ba1670406285563-Super-Savings-Zone.jpg"
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
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/0967cf9c-7d60-4b5d-a5f2-754022c2ff751669126108157-Budget-Buys_Sunglasses.jpg"
  ]

  const TopListStyleBox = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/28cff5a2-9d32-42f6-b160-64617ea62e211670406647314-Top-Listed-Styles.jpg"
  const TopListStyle = [
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/3e3ffcbe-27ca-4a43-9db9-1d45b2ee187e1670308324900-Quicklins_Sweatshirts--1-.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/70fd7a94-01e5-4b36-bea1-e39697adb77e1670308324893-Quicklins_Sweaters--1-.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/ca2523be-05d0-4e14-afdb-04a90c7f3f4e1670308393459-Quicklins_Shirts--1-.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/be42c25b-0c88-4ef0-b7f8-fab50423da001670308393453-Quicklins_Jeans--1-.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/78a9c9ce-8bce-45f9-a455-34687e4a2aa01670308454153-Quicklins_T-Shirts.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/0370715a-ea49-4222-b42c-d034d13ed0211670308454162-Quicklins_Trousers--1-.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/543cf32b-d7ca-46c4-a482-ff6933eeb0821670308496739-Quicklins_Jackets--1-.jpg"
  ]


  const NeverSeenBestOfferImg = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/418510b5-16fc-4853-9323-1785df1a38ce1670406564990-Never-Seen-Before-Offers.jpg"
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
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/6/4d5d9709-1009-4dc3-bb1c-e8ccb0ff55a81670305379623-image_jpeg_471024500.jpg"
  ]


  const ShopByCatogaryImg = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/3a8ff13b-934d-4ad3-b73f-bb64660dd82a1670406141566-SALE-Sectional-Header_1-Line-----7.jpg"
  const ShopByCatogary = [
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/b6dade75-acf4-44ae-8acc-a408deb276251670399588884-MP_Shop-By-Category_02.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/ffddaeb7-8c1f-459a-82d5-0df2123c6b5f1670399588895-MP_Shop-By-Category_03.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/2d98b409-4245-47f4-9f50-7ded6f523e231670399588903-MP_Shop-By-Category_04.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/15672341-4d1f-4250-814a-48bd1ffd69751670399588911-MP_Shop-By-Category_05.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/bf362eb3-86af-40cf-b3a9-e37e656626501670399588919-MP_Shop-By-Category_06.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/4b64d843-8378-4519-995f-4dc062cf42f21670399588929-MP_Shop-By-Category_07.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/fc5cb864-42a9-40be-b0a6-2a28c106a6b91670399588940-MP_Shop-By-Category_08.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/61b05453-12a3-4734-b816-053cc064b88f1670399588948-MP_Shop-By-Category_09.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/3f0fef08-c255-4854-958c-7a45262b2b061670399588958-MP_Shop-By-Category_10.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/b1b344bb-174f-4174-845d-582fbaa10ee21670399588967-MP_Shop-By-Category_11.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/9be2c454-948b-4bd4-a9df-cf9dbbfe51621670399588977-MP_Shop-By-Category_12.jpg",
     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/53c117d1-768c-49aa-9cfe-fe3f0e4e12041670399588988-MP_Shop-By-Category_13.jpg",
    
  ]

  const LastData = [
    "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/68359821-6fc5-44ba-9349-cb61582e85041670399588996-MP_Shop-By-Category_14.jpg",
    "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/a1dddc1c-a9ed-4e9c-9df3-38fd7cb126f91670399589007-MP_Shop-By-Category_15.jpg",
  ]
  return (
    <Box>
        <Flex>
        <ImagesBox data={ImagesFirstCol}/>
        <ImagesBox data={ImagesSecCol} />
        <ImagesBox data={ImagesThirdCol} />
        <ImagesBox data={ImagesForthCol} />
      <Box>
      </Box>
      </Flex>

      {/* Lowest Price Ever  */}
      <Box>
           <SingleNameBox data={LowestBox}/>
      </Box>

      <Box>
         <ImageProductBox data={OmgDealPageImage} />
      </Box>

      {/* Super Shaving Zone */}

     
      <Box>
         <SingleNameBox data={SuperShavingZoneImg}/>
      </Box>
      <Box>
      <ImageProductBox data={SuperShavingZone} />
      </Box>

      {/* Top List Style */}
            
      <Box>
      <SingleNameBox data={TopListStyleBox}/>
      </Box>
      <Box>
      <ImageProductBox data={TopListStyle} />
      </Box>

      {/* Never Seen Best Offer Img */}

      <Box>
      <SingleNameBox data={NeverSeenBestOfferImg}/>
      </Box>
      <Box>
      <ImageProductBox data={NeverSeenBestOffer} />
      </Box>


      {/* Never Seen Best Offer */}

      <Box>
      <SingleNameBox data={ShopByCatogaryImg}/>
      </Box>
      <Box>
        <ImageBoxGrid data={ShopByCatogary} />
        <Flex>
          {LastData.map((Src)=><Box><Image src={Src} /></Box>)}

          </Flex>
      </Box>

    </Box>
  );
};
