import React, { useContext, useState } from 'react'
import './loginform.css'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/shopContext'
import Loader from '../loader/loader'
import axios from 'axios'
import { URLaxios } from '../../../constent'
const Loginform = () => {
  let { User, updateUser } = useContext(ShopContext)
  let navi = useNavigate()
  const [loader, SetLoader] = useState(false)
  const [password, setpassword] = useState("admin")
  const [email, setemail] = useState("admin@example.com")

  function login(e) {
    e.preventDefault();
    SetLoader(true)
    axios.post(`${URLaxios}/UserAuth/Login`, {
      Password: password,
      email,
    }).then((res) => {
      updateUser(res?.data)
      console.log(User);
      SetLoader(false)

      navi("/")
    })

  }
  return (
    <div className='Login m-'>
      <h3>Login</h3>
      {
        loader ? <Loader /> : <>
          <form action="">
            <input value={email} type="text" placeholder='Email' onChange={(e) => setemail(e.target.value)} />
            <input value={password} type="password" placeholder='Password' onChange={(e) => setpassword(e.target.value)} />
            <button type="submit" onClick={(e) => { login(e) }}>Login</button>
          </form>
          <span>Dont have An Account <Link to={"/Signup"}>Signup</Link></span></>
      }

    </div>
  )
}

export default Loginform