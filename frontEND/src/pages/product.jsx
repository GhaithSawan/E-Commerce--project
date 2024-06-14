import React, { useContext, useEffect, useState } from 'react'
import ProductDisplay from '../components/productDisplay/ProductDisplay'

import Beardcrum from '../components/Beardcrum/Beardcrum';
import ReletedProduct from '../components/ReletedProduct/ReletedProduct';
import { URLaxios } from '../../constent';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from '../context/shopContext';

const Product = () => {
  const { Product,getoneproduct } = useContext(ShopContext);

  let { id } = useParams()

  useEffect(() => {
    getoneproduct(id)
  }, [id])

  return (
    <div className='page'>
      <Beardcrum CurrentProduct={Product} />
      <ProductDisplay CurrentProduct={Product} />
      <ReletedProduct CurrentProduct={Product}/>
    </div>
  )
}

export default Product;
