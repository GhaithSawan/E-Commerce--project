import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { URLaxios, token } from '../../../constent';

function Editmodel({ setShow, show, singleP, getallproduct }) {

  const handleClose = () => setShow(false);
  const [Name, setname] = useState()
  const [Desc, setdesc] = useState()
  const [Category, setcategory] = useState()
  const [Img, setimg] = useState(undefined)
  const [Price, setPrice] = useState()

  useEffect(() => {
    setname(singleP?.title)
    setdesc(singleP?.desc)
    setcategory(singleP?.category)
    setPrice(singleP?.new_price)

  }, [singleP])

  async function EditProduct(params) {
    try {
      const updateProductRequest = axios.put(`${URLaxios}/ProductRouts/UpdateProduct/${singleP?._id}`, {
        title: Name,
        category: Category,
        desc: Desc,
        new_price: Price,
      }, {
        headers: {
          Authorization: token
        }
      });

      let updateImageRequest;

      if (Img !== undefined) {
        let formData = new FormData();
        formData.append("img", Img);
        updateImageRequest = axios.put(`${URLaxios}/ProductRouts/UpdateProductImage/${singleP?._id}`, formData, {
          headers: {
            Authorization: token
          }
        });
      }

      const responses = await Promise.all([
        updateProductRequest,
        updateImageRequest
      ]);

      console.log("Product update response:", responses[0]);
      if (responses[1]) {
        console.log("Image update response:", responses[1]);
      }

      handleClose();
      await getallproduct();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }









  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card col-6 w-100 p-0">
            <form action="" className='mb-4'>
              <label htmlFor="ProductName">ProductName</label>
              <input value={Name} type="text" id='ProductName' placeholder='ProductName' onChange={(e) => setname(e.target.value)} />
              <label htmlFor="Description">Description</label>
              <textarea value={Desc} type="text" id='Description' placeholder='Description' onChange={(e) => setdesc(e.target.value)} />
              <div className='d-flex align-align-items-center  justify-content-between py-3 gap-2'>
                <div style={{ width: "100%" }}>
                  <label htmlFor="Price">Price</label>
                  <input value={Price} type="number" id='Price' placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div style={{ width: "100%" }}>
                  <label htmlFor="Category">Category</label>
                  <select value={Category} id='Category' onChange={(e) => setcategory(e.target.value)}>
                    <option value="" >Choose Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                  </select>
                </div>
              </div>
              <label htmlFor="image">Product image</label>
              <input type="file" id='image' placeholder='image' style={{ width: "210px", cursor: "pointer" }} onChange={(e) => setimg(e.target.files[0])} />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={EditProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editmodel;