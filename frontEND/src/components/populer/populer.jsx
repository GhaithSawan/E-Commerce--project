import React, { useContext } from 'react'
import './populer.css'
import Item from './component/item';
import { ShopContext } from '../../context/shopContext';

export const Populer = () => {
    const { all_product, getallproduct } = useContext(ShopContext)

    return (
        <div className='populer  pt-5'>
            <h1 style={{ textAlign: "center", marginBottom: "10px" }}>POPULAR IN WOMEN</h1>
            <div className="cards">
                {
                    all_product?.map((e) => {
                        if (e?.category == "Women") {
                            return (<Item name={e?.title} image={e?.BasicImage?.URL} old_price={e?.old_price ? e?.old_price : ""} new_price={e?.new_price} id={e?._id} />)
                        }
                    })
                }
            </div>


        </div>
    )
}
