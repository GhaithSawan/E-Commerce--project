import React, { useContext, useState } from 'react'
import "./ProductDisplay.css"
import { ShopContext } from '../../context/shopContext';
const ProductDisplay = ({ CurrentProduct }) => {

    let { Cartproducts, UpdateCartproducts } = useContext(ShopContext)
    const [ProductQuantity, setProductQuantity] = useState(1)
    function AddCartProduct() {
        const productIndex = Cartproducts.findIndex(p => p.id === CurrentProduct._id);
        if (productIndex >= 0) {
            const updatedCartProducts = [...Cartproducts];
            updatedCartProducts[productIndex].Quantity += ProductQuantity;
            UpdateCartproducts(updatedCartProducts);
        } else {
            const updatedProduct = { ...CurrentProduct, Quantity: ProductQuantity };
            UpdateCartproducts([...Cartproducts, updatedProduct]);
        }
        setProductQuantity(1); 
    }
    return (
        <div className='ProductDisplay  row g-5 container m-auto '>
            <div className=" col-sm-12 col-md-6 d-flex align-items-center  gap-3 ">
                <div className="moreimage d-flex  justify-content-center align-items-center">
                    <img src={CurrentProduct?.BasicImage.URL} style={{ width: "100%", cursor: "pointer" }} />
                    <img src={CurrentProduct?.BasicImage.URL} style={{ width: "100%", cursor: "pointer" }} />
                    <img src={CurrentProduct?.BasicImage.URL} style={{ width: "100%", cursor: "pointer" }} />
                </div>
                <div className="basicImage">
                    <img src={CurrentProduct?.BasicImage.URL} alt="" style={{ width: "100%" }} />
                </div>
            </div>
            <div className="desc col-md-6 col-sm-12 d-flex align-items-start justify-content-center flex-column   ">
                <h3 className="title">{CurrentProduct?.title}</h3>
                <div className="startRate   w-100 ">
                    <img src="/assets/star_icon.png" alt="" />
                    <img src="/assets/star_icon.png" alt="" />
                    <img src="/assets/star_icon.png" alt="" />
                    <img src="/assets/star_icon.png" alt="" />
                    <img src="/assets/star_dull_icon.png" alt="" />
                    <p>(123)</p>
                </div>

                <div className="productPrice w-100 d-flex align-items-start justify-content-start gap-5">
                    <span className="oldprise"> {CurrentProduct?.old_price?  "$" + CurrentProduct.old_price  : ""}</span>
                    <span className="newprice" style={{ color: 'red' }}>${CurrentProduct?.new_price}</span>
                </div>
                <span className="desc">{CurrentProduct?.desc}</span>
                <span style={{ fontSize: "20px", width: "100%", marginBottom: "10px" }}>Select Size</span>
                <ul style={{ width: "100%", marginBottom: "20px" }}>
                    <li style={{ cursor: "pointer" }}>S</li>
                    <li style={{ cursor: "pointer" }}>M</li>
                    <li style={{ cursor: "pointer" }}>L</li>
                    <li style={{ cursor: "pointer" }}>XL</li>
                </ul>
                <div style={{width:"100%"}} ><button onClick={AddCartProduct}>Add to cart</button></div>
                <p style={{ margin: "0", fontSize: "16px", width: "100%" }}>category is : {CurrentProduct?.category}</p>
                <p style={{ margin: "0", fontSize: "16px", width: "100%" }}>tags: Modern</p>
            </div>
        </div>
    )
}

export default ProductDisplay