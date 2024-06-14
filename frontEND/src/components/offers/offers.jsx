import React from 'react'
import './offers.css'
import { Button } from 'react-bootstrap'
const Offers = () => {
    return (
        <div className=' Offers m-auto row col-9 my-5 ' >
            <div className="left col-md-6 col-sm-12">
                <p style={{ fontSize: "3rem", margin: "0", fontWeight: "600" }} >Exclusive</p>
                <p style={{ fontSize: "3rem", margin: "0", fontWeight: "600" }}>Offers for you </p>
                <p style={{ fontSize: "2rem", margin: "0" }}>Only On Best Sellers Product</p>
                <Button style={{ fontSize: "20px", margin: "10px" }} variant="danger">Check Now</Button>
            </div>
            <div className="right col-md-6  col-sm-12" >
                <img style={{ width: "100%" }} src="assets/exclusive_image.png" alt="" />
            </div>
        </div>
    )
}

export default Offers