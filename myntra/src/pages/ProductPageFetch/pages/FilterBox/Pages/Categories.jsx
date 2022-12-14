import React from "react";
import { FilterSinglePage } from "./pages/FilterSinglePage";

export const CategoriesBox = () => {
  const catogories = ["FLip FLops", "Sandals", "Casual Shoes"];

  return (
    <FilterSinglePage data={catogories} Textdata={"CATEGORIES"} />
  );
};
