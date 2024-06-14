import React, { useContext } from 'react'
import CartTable from '../components/CartTable/CartTable'
import CartTotal from '../components/populer/component/CartTotal/CartTotal'
import PromoCodeBox from '../components/PromoCodebox/PromoCodeBox'
import { ShopContext } from '../context/shopContext'

const Cart = () => {
  let { Cartproducts, UpdateCartproducts } = useContext(ShopContext)

  return (
    <div className='page  pt-5 ' >
      <div className='container'>
        <CartTable UpdateCartproducts={UpdateCartproducts} Cartproducts={Cartproducts} />
        <div className='row'>
          <CartTotal UpdateCartproducts={UpdateCartproducts} Cartproducts={Cartproducts} />
          <PromoCodeBox />
        </div>

      </div>
    </div>
  )
}

export default Cart