import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { ImagesBox } from "./Pages/FirstSlideBox/ImagesBox";
import { SingleNameBox } from "./Pages/SecondImageBox.jsx/SingleNameBox";
import { ImageProductBox } from "./Pages/SecondImageBox.jsx/ImageProductBox";
import { ImageBoxGrid } from "./Pages/SecondImageBox.jsx/ImageBoxGrid";
import Footer from "../../components/Footer/Footer";
import MainNavbar from "../../components/Navbar/MainNavbar";
import Carousel1 from "./Carousel1";
import { useNavigate } from "react-router-dom";


export const Womens = () => {
  const navigate = useNavigate();

  const ImagesFirstCol = [
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/02440f40-732e-4baa-96fd-5f16d468c9d81670407321595-Main-Banner_Desktop_02.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/072c3fc9-7deb-48c5-94d5-eabcac695fa71670407321628-Main-Banner_Desktop_06.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/09f74611-c424-4757-806b-2a385e3491911670407321659-Main-Banner_Desktop_10.jpg",
  ];

  const ImagesSecCol = [
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/437b0bbb-6e26-42af-883c-cea7007617011670407321605-Main-Banner_Desktop_03.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/76e822e3-7be8-4799-aba0-3504b4c06a681670407321637-Main-Banner_Desktop_07.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/d27a0c6a-6db1-4704-b953-e89c7832d2f71670407321666-Main-Banner_Desktop_11.jpg",
  ];
  const ImagesThirdCol = [
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/fe21541c-32d7-4597-a05b-5b8a0500d89c1670407321613-Main-Banner_Desktop_04.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/fc539a41-c96b-439c-a16f-1f1faf75ee071670407321644-Main-Banner_Desktop_08.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/afb813e7-3f5e-4707-b71c-9d22d48e7f911670407321674-Main-Banner_Desktop_12.jpg",
  ];
  const ImagesForthCol = [
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/81a5c3be-7447-4bbe-8202-c738699b1b091670407321620-Main-Banner_Desktop_05.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/7912c723-6297-40fa-8224-d1a05b62324f1670407321652-Main-Banner_Desktop_09.jpg",
    "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/0c8ae8ac-aa89-4ad7-b9cc-2b2fa5fe7ec51670407321681-Main-Banner_Desktop_13.jpg",
  ];

  //   Omg deal Page Here Images
  const LowestBox =
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/8/c31bd037-958b-40fa-bdaf-3f0fc1c71ce21670497018730-Crazy-deals-DK.jpg";
  const OmgDealPageImage = [
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/3/7a7f6f83-de0b-4d76-bdfc-d7f56b85c4801670043229997-_18965747722Ff8babbb1_9a61_4822_8f74_d7436fb96355-2Fimage_jpeg1343319905.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/aeba0601-f249-4ce5-80cc-bc36ec95c0241669141575954-Winterwear_essentials_at_Min_40_1.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/f2a8e0df-3f91-42b5-a068-ad5b1ccb75cc1669141574897-Myntra_Unique_Brands_-_Min_65_off_from_Anouk-_Sangria_-_more_.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/0ff90943-1d80-473d-94a8-3232657add5d1669141574100-Ethnic_winterwear_min_50_off__Anouk-Biba_-_more.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/9cd458af-02f8-40fd-8836-f6624a08c7221669141575655-Top_Curated_Ethnic_Wear_from_Aurelia-_Global_Desi_-_more_-_60-80_off.png",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/4e52f3e4-43fc-49b8-a3bd-df4a525f391c1669141574494-Kurtas_-_W_-Varanga_-_more_min_60_off.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/d27024a3-ba74-4fa6-a8a6-fcee0c7891f81669141574463-Kurta_Sets_-_Libas-_BIBA_-_more_min_60_off.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/6643bf00-991d-4386-a187-1faed2b45cb61669141575699-Traditional_sarees_from_Vastranand_-_Mitera_-_more_70.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/6a82d463-2453-4d28-a94a-479892c180a31669141575508-Styles_only_on_Myntra_under_1299_-2999-_Inddus_-Vishudh_-_more__.jpg",
    "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/22/00bb80ad-f773-4809-ad3b-45f756acda7d1669141574478-Kurtas_-_sets_from_Biba-_Varanga__-_more_at_Min_65_off.jpg",
  ];

  const SuperShavingZoneImg =
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/246a6b35-8899-43ba-9f97-2ea0ac5a88ba1670406285563-Super-Savings-Zone.jpg";
  const SuperShavingZone = [
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
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/1d62f1a6-3fae-4bba-862f-74c35dfdf6051670408523534-WP_Shop-By-Category_02.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/d2765ecc-11a8-4255-b2f1-e3c522031d4e1670408523543-WP_Shop-By-Category_03.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/0165b511-3de7-4238-b07d-d3c0ef6920e31670408523553-WP_Shop-By-Category_04.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/55ac4aae-3f00-44c8-b08d-74b86edea19c1670408523566-WP_Shop-By-Category_05.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/e19238e0-73bc-469a-95f4-244c6e9f23741670408523576-WP_Shop-By-Category_06.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/cccfd4d2-0cae-4edc-8710-7ecbbc4d34161670408523583-WP_Shop-By-Category_07.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/d571b2d5-7c20-44a6-bc14-4355e4528a0f1670408523590-WP_Shop-By-Category_08.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/144339b3-c2e2-48a7-92bf-4a3f2a4e82ba1670408523596-WP_Shop-By-Category_09.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/ff6127c8-2fed-4037-b62a-9d3f5152379a1670408523602-WP_Shop-By-Category_10.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/538db1bf-fad3-4486-b840-d8e9b6c933f31670408523609-WP_Shop-By-Category_11.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/088b3dc1-9e16-4767-a9ab-8b316e0a181a1670408523615-WP_Shop-By-Category_12.jpg",
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/30e11dc2-40e3-402a-a3b4-a6dc0dc88d841670408523626-WP_Shop-By-Category_13.jpg",
  ];

  const LastData = [
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/1f1b6c59-1bc1-44ca-ba27-9c2ab68c294a1670408523637-WP_Shop-By-Category_14.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/8b928fb6-a365-4313-a46b-4729fc1fdebd1670408523649-WP_Shop-By-Category_15.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/974ffa63-e3a1-4c70-9332-1027664539da1670408523660-WP_Shop-By-Category_16.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/744468d4-464d-4909-bab4-654d69949b551670408523669-WP_Shop-By-Category_17.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/aac226fe-2c17-429d-90b7-be32eb4ac93a1670408523678-WP_Shop-By-Category_18.jpg",
  ];

  return (
    <>
    <MainNavbar/>
    <Box pt={"80px"}>
    <Carousel1  />
      <Flex>
        <ImagesBox data={ImagesFirstCol} />
        <ImagesBox data={ImagesSecCol} />
        <ImagesBox data={ImagesThirdCol} />
        <ImagesBox data={ImagesForthCol} />
        <Box></Box>
      </Flex>

      {/* Lowest Price Ever  */}
      <Box onClick={()=>navigate('/ProductPage')}>
        <SingleNameBox  data={LowestBox} />
      </Box>

      <Box>
        <ImageProductBox data={OmgDealPageImage} />
      </Box>

      {/* Super Shaving Zone */}

      <Box>
        <SingleNameBox data={SuperShavingZoneImg} />
      </Box>
      <Box>
        <ImageProductBox data={SuperShavingZone} />
      </Box>

      {/* Top List Style */}

      <Box>
        <SingleNameBox data={TopListStyleBox} />
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

      <Footer />
    </Box>
    </>
  );
};
