import React from 'react'
import './letter.css'
import { Button } from 'react-bootstrap'
const Letter = () => {
    return (
        <div className='Letter container col-9 my-5 p-4 ' >
            <div className="title my-2" style={{ fontSize: "40px", fontWeight: "500" }}>Get Exclusive offers in your Email</div>
            <p style={{ fontSize: "20px" }}>Subscribe To Our Newsletter And Stay Updated</p>
            <div className="form ">
                <input type="text" placeholder='Your Email ' />
                <Button style={{ backgroundColor: "black" }}>Subscribe</Button>
            </div>
        </div>
    )
}

export default Letter