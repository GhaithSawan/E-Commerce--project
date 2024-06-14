import React from 'react'

const PromoCodeBox = () => {
    return (
        <div className='PromoCodeBox  col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column gap-3 '>
            <span style={{ fontSize: "18px" }}>If you have a promo code bit it here</span>
            <div className='d-flex align-items-center'>
                <input type="text" placeholder='Promo Code' style={{ marginRight: "10px", padding: "12px", fontSize: "15px", backgroundColor: "rgb(241 241 241)", border: "none", width: "80%" }} />
                <button style={{ border: "none", padding: "10px 20px", color: "#fff", backgroundColor: "#f14447", boxShadow: " 0px 0px  2px .2px #f14447", borderRadius: "3px" }}>Submit</button>
            </div>
        </div>
    )
}

export default PromoCodeBox