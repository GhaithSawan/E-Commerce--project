import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import SideBar from '../SideBar/SideBar';
import "./AddProduct.css"
import axios from 'axios';
import { URLaxios, token } from '../../../../constent';
import { ShopContext } from '../../../context/shopContext';
import Loader from '../../loader/loader';
import { useNavigate } from 'react-router-dom';
export const AddProduct = () => {

    let navi = useNavigate()

    const { getallproduct } = useContext(ShopContext)
    const [Loading, SetLoading] = useState(false)

    const [title, settitle] = useState("")
    const [Price, setPrice] = useState()
    const [Cat, setCat] = useState("")
    const [desc, setdesc] = useState("")
    const [Img, setImg] = useState()


    function CreateProduct() {
        SetLoading(true)
        let data = new FormData()
        data.append("title", title)
        data.append("new_price", Price)
        data.append("category", Cat)
        data.append("desc", desc)
        data.append("img", Img)

        axios.post(`${URLaxios}/ProductRouts/CreateProduct`, data, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            console.log(res);
            getallproduct()
            navi("/Admin/ProductsList")
            SetLoading(false)

        }).catch((e) => {
            console.log(e);
            alert(e?.response?.data?.message);
            SetLoading(false)

        })
    }

    return (
        <div className='AddProduct row page  py-5 px-2 gap-5' >
            <div className='col-3'>
                <SideBar />
            </div>

            <div className="card col-6">

                <form action="" className='mb-4'>
                    <label htmlFor="ProductName">ProductName</label>
                    <input type="text" id='ProductName' placeholder='ProductName' onChange={(e) => settitle(e.target.value)} />
                    <label htmlFor="Description">Description</label>
                    <textarea type="text" id='Description' placeholder='Description' onChange={(e) => setdesc(e.target.value)} />
                    <div className='d-flex align-align-items-center  justify-content-between py-3 gap-2'>
                        <div style={{ width: "100%" }}>
                            <label htmlFor="Price">Price</label>
                            <input type="number" id='Price' placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div style={{ width: "100%" }}>
                            <label htmlFor="Category">Category</label>
                            <select id='Category' onChange={(e) => setCat(e.target.value)}>
                                <option value="" >Choose Category</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                            </select>
                        </div>
                    </div>
                    <label htmlFor="image">Product image</label>
                    <input type="file" id='image' placeholder='image' style={{ width: "210px", cursor: "pointer" }} onChange={(e) => setImg(e.target.files[0])} />
                </form>
                <Button variant="primary" onClick={CreateProduct} >Create</Button>{' '}

            </div>
        </div >
    )
}
