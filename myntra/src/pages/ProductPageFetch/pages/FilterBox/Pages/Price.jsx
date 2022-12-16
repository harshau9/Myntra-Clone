import React from 'react'
import { FilterSinglePage } from './pages/FilterSinglePage'

export const PriceBox = ({cheakBox}) => {

    const Pricedata = [
         {name:"Rs 987 to Rs 1496",value:'987,1496'},
        {name:"Rs 1496 to Rs 2005",value:'1496,2005'},
        {name:"Rs 2005 to Rs 2514",value:'2005,2514'},
        {name: "Rs 2514 to Rs 3023", value:'2514,3023'}
    ]
  return (
    <FilterSinglePage  data={Pricedata} Textdata={"PRICE"} cheakBox={cheakBox}/>
  )
}
