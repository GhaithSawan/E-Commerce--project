import React, { useEffect, useState } from 'react'
import "./CartTotal.css"
const CartTotal = ({ Cartproducts, UpdateCartproducts }) => {

    let subtotal = 0
    let Shipping = 0
    let Total = 0

    Cartproducts.map((e) => {
        subtotal = subtotal + (e?.new_price * e?.Quantity)
    })

    return (
        <div className='CartTotal col-md-6 col-sm-12'>
            <div className="title">Cart Total</div>
            <div className="CartInfo w-100">
                <div className="subtotal cartTotalChild">
                    <span>Subtotal</span>
                    <span>{subtotal}$</span>
                </div>
                <div className="Shipping cartTotalChild">
                    <span>Shipping</span>
                    <span>{Shipping}</span>
                </div>
                <div className="Total cartTotalChild">
                    <span style={{ color: "black" }}>Total</span>
                    <span style={{ color: "black" }}>{Shipping + subtotal} $</span>
                </div>
            </div>
            <button>Procced To Check</button>
        </div>
    )
}

export default CartTotal