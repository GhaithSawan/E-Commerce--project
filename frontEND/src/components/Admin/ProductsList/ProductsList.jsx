import React, { useContext, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { ShopContext } from '../../../context/shopContext';
import axios from 'axios';
import { URLaxios, token } from '../../../../constent';
import Editmodel from '../../EditModel/Editmodel';
import Loader from '../../loader/loader';
const ProductsList = () => {
    const { all_product, getallproduct } = useContext(ShopContext)
    const [Loading, SetLoading] = useState(false)

    const [show, setShow] = useState(false);
    const [singleP, setSingleP] = useState();
    const handleShow = (e) => {
        setSingleP(e)
        setShow(true)
    };

    function handelDelete(id) {
        SetLoading(true)
        axios.delete(`${URLaxios}/ProductRouts/DeleteProduct/${id}`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            getallproduct()
            setTimeout(() => {
                SetLoading(false)
            }, 1000);
        })
    }
    return (
        <div className='ProductsList row page gap-5  py-5 px-2' >
            <div className='col-3'>
                <SideBar />
            </div>
            <div className="card col-8">
                {
                    Loading ? <Loader /> : <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th >Product</th>
                                <th >Name</th>
                                <th >Price</th>
                                <th >Category</th>
                                <th >Delete</th>
                                <th >Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                all_product?.map((e, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td><img src={e?.BasicImage?.URL} alt="" style={{ width: "50px" }} /></td>
                                            <td >{e?.title}</td>
                                            <td >{e?.new_price}</td>
                                            <td >{e?.category}</td>
                                            <td >
                                                <Button variant="danger" onClick={() => handelDelete(e?._id)} >Delete</Button>
                                            </td>
                                            <td >
                                                <Button variant="primary" onClick={() => handleShow(e)}>Edit</Button>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                }

            </div>
            <Editmodel show={show} setShow={setShow} singleP={singleP} getallproduct={getallproduct} />

        </div>
    )
}

export default ProductsList