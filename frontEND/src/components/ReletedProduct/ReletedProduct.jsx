import React, { useContext, useEffect } from 'react'
import Item from '../populer/component/item'
import { ShopContext } from '../../context/shopContext'
const ReletedProduct = ({CurrentProduct }) => {
  const { datacategory,getallproductwithPageinationcategory } = useContext(ShopContext);

  useEffect(() => {
    getallproductwithPageinationcategory(CurrentProduct?.category)
  }, [datacategory])
  


  return (
    <div className='ReletedProduct flex-column d-flex align-items-center justify-content-center'>
      <div className="title my-5" style={{ fontSize: "30px", borderBottom: "1px solid " }}>Related Products</div>
      <div className="products  d-flex align-items-center justify-content-center gap-2 flex-wrap">
        {
          datacategory?.map((e) => {
            if(e._id != CurrentProduct?._id){
              return (
                <div onClick={() => window.scrollTo(0, 0)}>
                  <Item name={e.title} image={e.BasicImage.URL} old_price={e.old_price} new_price={e.new_price} id={e._id} />
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default ReletedProduct