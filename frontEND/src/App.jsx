import react from "react"
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/shopCategory'
import Cart from './pages/cart'
import Product from './pages/product'
import Login from './pages/login'
import { Signup } from './pages/signup'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Admin from "./pages/Admin"
import { AddProduct } from "./components/Admin/AddProduct/AddProduct"
import ProductsList from "./components/Admin/ProductsList/ProductsList"
function App() {

  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={"/assets/banner_mens.png"} category={"Men"} />} />
          <Route path='/women' element={<ShopCategory banner={"/assets/banner_women.png"} category={"Women"} />} />
          <Route path='/kids' element={<ShopCategory banner={"/assets/banner_kids.png"} category={"Kids"} />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/*' element={<>d</>} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Admin/AddProduct' element={<AddProduct />} />
          <Route path='/Admin/ProductsList' element={<ProductsList />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
