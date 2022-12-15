import React from 'react'
import axios from "axios"
 const ApiFetchData = async () => {
    let res = await axios.get('https://myntra-database-lt5b7yjpx-aloki9singh.vercel.app/clothing?category=Mens')
  return res
}

export default ApiFetchData

const Apimintzone = async () => {
  let res = await axios.get('https://3d086dc6-4319-4cfe-bd0c-abb1f9423b3a.mock.pstmn.io/mintshop')
  return res
}

export  {Apimintzone}