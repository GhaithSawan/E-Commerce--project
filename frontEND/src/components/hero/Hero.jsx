import React from 'react'
import { Button } from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
    return (
        <div className=' h-auto container row m-auto py-3' >
            <div className=" col-md-7 m-auto col-sm-12 ">
                <p className='mb-3' style={{ fontSize: "20px" }}>NEW ARRIVALS ONLY</p>
                <div className="icon_hand">
                    <span style={{ fontSize: "50px", margin: "0", fontWeight: "600" }}>new</span>
                    <img src="assets/hand_icon.png" alt="" style={{ width: "60px" }} />
                </div>
                <p style={{ fontSize: "50px", margin: "0", fontWeight: "600" }}>Collections</p>
                <p style={{ fontSize: "50px", margin: "0", fontWeight: "600" }}>for everyone </p>
                <Button style={{ fontSize: "20px" }} variant="danger">Latest Collections  <FaLongArrowAltRight /></Button>
            </div>
            <div className="right col-md-4 m-auto col-sm-12">
                <img width={"100%"} src="assets/hero_image.png" alt="" />
            </div>
        </div>
    )
}

export default Hero