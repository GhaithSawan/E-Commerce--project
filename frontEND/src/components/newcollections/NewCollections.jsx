import React, { useContext, useEffect } from 'react'
import new_collections from '../../../public/assets/new_collections'
import Item from '../populer/component/item'
import { ShopContext } from '../../context/shopContext';

const NewCollections = () => {

  const { PagenatData , getallproductwithPageination} = useContext(ShopContext)
  useEffect(() => {
    getallproductwithPageination(1)
  }, [])
  

  return (
    <div>
          <div className=' NewCollections pt-5'>
            <h1 style={{textAlign:"center",marginBottom:"10px"}}>New Collections </h1>
            <div className="cards">
            {
                PagenatData?.map((e) => {
                  return (<Item name={e?.title} image={e?.BasicImage?.URL} old_price={e?.old_price ? e?.old_price : ""} new_price={e?.new_price} id={e?._id} />)
                })
            }
            </div>
        </div>
    </div>
  )
}

export default NewCollections