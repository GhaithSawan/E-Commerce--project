import React, { useContext, useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { ShopContext } from '../../context/shopContext';

const Navbar = () => {
    let navi = useNavigate()

    let { User ,updateUser} = useContext(ShopContext)
    const [menu, setmenu] = useState("Shop")
    function logout(e) {
        e.preventDefault();
        updateUser(null)
        navi("/Login")
    }

    return (
        <div className="navbar container ">
            <div className="logo">
                <img src="/assets/logo.png" alt="" />
                <span>Shopper</span>
            </div>
            <ul className="list">
                <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                    <li onClick={() => setmenu("Shop")}>Shop  {menu == "Shop" ? <hr /> : ""}</li>
                </Link>
                <Link to={"/men"} style={{ textDecoration: "none", color: "black" }}>
                    <li onClick={() => setmenu("Men")}>Mens {menu == "Men" ? <hr /> : ""}</li>

                </Link>
                <Link to={"/women"} style={{ textDecoration: "none", color: "black" }}>
                    <li onClick={() => setmenu("Women")}>Womens {menu == "Women" ? <hr /> : ""}</li>

                </Link>
                <Link to={"/kids"} style={{ textDecoration: "none", color: "black" }}>
                    <li onClick={() => setmenu("Kids")}>Kids {menu == "Kids" ? <hr /> : ""}</li>
                </Link>
                {
                    User?.IsAdmin ?
                        <Link to={"/Admin"} style={{ textDecoration: "none", color: "black" }}>
                            <li onClick={() => setmenu("Admin_Dashboard")}>Admin Dashboard{menu == "Admin_Dashboard" ? <hr /> : ""}</li>
                        </Link> : ""
                }

            </ul>
            <div className="right">
                {
                    User ?
                        <div className="logOut">
                            <Link to={"/Login"} style={{ textDecoration: "none", color: "black" }}>
                                <button style={{ border: "none", borderRadius: "20px", padding: "10px 30px" }} onClick={(e)=>logout(e)}>LogOut</button>
                            </Link>
                        </div>
                        :

                        <div className="login">
                            <Link to={"/Signup"} style={{ textDecoration: "none", color: "black" }}>
                                <button style={{ border: "none", borderRadius: "20px", padding: "10px 30px" }}>Signup</button>
                            </Link>
                        </div>

                }

                <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
                    <div className="cart" style={{ cursor: "pointer" }}>
                        <img src="/assets/cart_icon.png" alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar