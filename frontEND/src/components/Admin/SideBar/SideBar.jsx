import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"
const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className="title">DashBoard <hr /></div>
            <ul>
                <Link to={"/Admin/AddProduct"}>
                    <li>AddProduct</li>
                </Link>
                <Link to={"/Admin/ProductsList"}>
                    <li>ProductsList</li>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar