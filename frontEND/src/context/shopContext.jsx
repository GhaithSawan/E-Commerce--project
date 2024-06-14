import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
import { URLaxios } from '../../constent';
export const ShopContext = createContext(null);


const ShopContextProvider = ({ children }) => {
  const [User, setUser] = useState(null)
  const [all_product, setall_product] = useState()
  const [PagenatData, setPagenatData] = useState()
  const [datacategory, setdatacategory] = useState()
  const [Product, setProduct] = useState()

  useEffect(() => {
    getallproduct()
  }, [])

  function getallproduct() {
    axios(`${URLaxios}/ProductRouts/GetAllProducts`).then((res) => {

      setall_product(res.data)
    })
  }


  function getallproductwithPageination(PageNumber) {
    axios(`${URLaxios}/ProductRouts/GetAllProducts?PageNumber=${PageNumber}`).then((res) => {
      console.log(res.data);
      setPagenatData(res?.data)
    })
  }
  function getallproductwithPageinationcategory(category) {
    axios(`${URLaxios}/ProductRouts/GetAllProducts?category=${category}`).then((res) => {
      setdatacategory(res?.data)
    })
  }
  function getoneproduct(id) {
    axios.get(`${URLaxios}/ProductRouts/GetProduct/${id}`).then((res) => {

      setProduct(res.data)
    })
  }


  // ____________________________________User


  useEffect(() => {
    const storedUser = localStorage.getItem("User");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("User", JSON.stringify(newUser));
  };
  // _________________________

  const [Cartproducts, setCartproducts] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  function UpdateCartproducts(newProducts) {
    setCartproducts(newProducts)
    localStorage.setItem("cart", JSON.stringify(newProducts))
  }


  return (
    <ShopContext.Provider value={{ updateUser, User, Product, getoneproduct, datacategory, getallproductwithPageinationcategory, PagenatData, all_product, UpdateCartproducts, getallproductwithPageination, Cartproducts, getallproduct }}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
