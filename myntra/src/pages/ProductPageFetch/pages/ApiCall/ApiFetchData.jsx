import React from 'react'
import axios from "axios"
 const ApiFetchData = async () => {
    let res = await axios.get('https://myntra-database-lt5b7yjpx-aloki9singh.vercel.app/clothing?category=Mens')
  return res
}

export default ApiFetchData

const Apimintzone = async () => {
  let res = await axios.get('https://cecc3423-7ea7-49a1-b925-93bcf3c9f986.mock.pstmn.io/newmintdata')
  return res
}

export  {Apimintzone}