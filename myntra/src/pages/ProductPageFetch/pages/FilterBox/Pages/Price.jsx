import React from 'react'
import { FilterSinglePage } from './pages/FilterSinglePage'

export const PriceBox = () => {

    const Pricedata = [
        "Rs 987 to Rs 1496",
        "Rs 1496 to Rs 2005",
        "Rs 2005 to Rs 2514",
        "Rs 2514 to Rs 3023"
    ]
  return (
    <FilterSinglePage data={Pricedata} Textdata={"PRICE"} />
  )
}
