import React from "react";
import Filter from "./Filter";
import {useContext } from "react";
import { DataCardContext } from "./Context";

const Products = () => {
  const { dataCard,updateValue } = useContext(DataCardContext)
 console.log(dataCard);
  return<>
   <Filter/>
   </>  
};

export default Products;
