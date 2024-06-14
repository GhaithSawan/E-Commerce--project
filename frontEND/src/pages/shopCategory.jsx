// pages/shopCategory.js
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import ListItems from '../components/listitems/listItems';

const ShopCategory = ({ banner, category }) => {
  const { datacategory,getallproductwithPageinationcategory } = useContext(ShopContext);

  useEffect(() => {
    getallproductwithPageinationcategory(category)
  }, [category])
  
  return (
    <div className=' page ShopCategory d-flex align-items-center flex-column '>
      <div className="ShopCategory_img">
        <img src={banner} alt="" height={"100%"} width={"100%"} style={{ objectFit: "contain" }} />
      </div>
      <div className="products">
        <ListItems data={datacategory} category={category} />
      </div>
    </div>
  )
}

export default ShopCategory;
