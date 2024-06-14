import React, { useContext, useState } from 'react'
import './signupform.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { URLaxios, token } from '../../../constent';
import { ShopContext } from '../../context/shopContext';
import Loader from '../loader/loader';


const Signupform = () => {
    const [Loading, SetLoading] = useState(false)

    let { User, updateUser } = useContext(ShopContext)
    let navi = useNavigate()
    const [chacked, setchacked] = useState(false)
    const [password, setpassword] = useState()
    const [username, setUsername] = useState()
    const [email, setemail] = useState()

    function signup(e) {
        e.preventDefault();
        SetLoading(true)

        if (chacked) {
            axios.post(`${URLaxios}/UserAuth/Register`, {
                Password: password,
                email,
                Username: username
            }).then((res) => {
                updateUser(res?.data)
                SetLoading(false)
                console.log(User);
                navi("/")
            }).catch((e) => {
                SetLoading(false)
                alert(e?.response?.data?.message)
                console.log(e);
            })
        } else {
            alert("by continue I agree the terms ")
            SetLoading(false)
        }

    }
    return (
        <div className='Signupform'>
            {
                Loading ? <Loader /> : <> <h3>Sign Up</h3>
                    <form action="">
                        <input type="text" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }} />
                        <input type="email" required placeholder='Email' onChange={(e) => { setemail(e.target.value) }} />
                        <input type="password" placeholder='Password' onChange={(e) => { setpassword(e.target.value) }} />
                        <button type="submit" onClick={(e) => { signup(e) }}>SignUp</button>
                    </form>
                    <span>by continue I agree the terms <input type="checkbox" onClick={() => setchacked(true)} /></span>
                    <span>Already have an account ? <Link to={"/login"}>Login</Link></span></>
            }
        </div>
    )
}

export default Signupform