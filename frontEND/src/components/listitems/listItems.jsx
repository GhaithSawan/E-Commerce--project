import React, { useContext } from 'react'
import Item from '../populer/component/item';
import './listItems.css'
import { ShopContext } from '../../context/shopContext';
const ListItems = ({ data, category }) => {
  const { all_product } = useContext(ShopContext)
  console.log(category);
  

  return (
    <div className='ListItems my-5 text-center '>
      <span className="showingNum" style={{ color: "#454545", fontSize: "20px" }}><span style={{ fontSize: "22px", color: "#303030" }}>Shawing {data?.length} </span> out of {all_product?.length} product</span>
      <div className="list mt-5">
        {data?.map((e) => {
          if (e?.category == category) {
            return <Item id={e?._id} name={e?.title} image={e?.BasicImage.URL} old_price={e?.old_price} new_price={e?.new_price} />
          }
        })
        }
      </div>
    </div>
  )
}

export default ListItems