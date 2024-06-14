import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className='mt-5 col-10 container'>
            <div className="info_footer">
                <div className="title">
                    <img src="/assets/logo.png" alt="" />
                    <span style={{ fontSize: "40px", fontWeight: "500" }}>Shopper</span>
                </div>
                <ul>
                    <li>Company</li>
                    <li>Product</li>
                    <li>Offices</li>
                    <li>AboutUs</li>
                    <li>Contact</li>
                </ul>
                <div className="logos">
                    <a href="https://api.whatsapp.com/send?phone=15551234567">
                        <img src="/assets/whatsapp_icon.png" alt="" style={{ cursor: "pointer" }} />
                    </a>
                    <a href="">
                        <img src="/assets/instagram_icon.png" alt="" style={{ cursor: "pointer" }} />

                    </a>
                </div>
            </div>
            <div className="Copyright w-100 text-center">
                CopyRight @ 2024
            </div>

        </div>
    )
}

export default Footer