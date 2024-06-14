import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import "./CartTable.css"
import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
function CartTable({Cartproducts,UpdateCartproducts}) {
    const handleDelete = (index) => {
        let confirm = window.confirm("Are You Shour")
        if (confirm) {
            const updatedCartProducts = Cartproducts.filter((_, i) => i !== index);
            UpdateCartproducts(updatedCartProducts);
        }
    };
    return (
        <Table className='CartTable ' responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th >Product</th>
                    <th >Name</th>
                    <th >Price</th>
                    <th >Quantity</th>
                    <th >Total</th>
                    <th >Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    Cartproducts?.map((e, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={e?.BasicImage?.URL} alt="" style={{ width: "50px" }} /></td>
                                <td>{e?.title}</td>
                                <td >{e?.new_price}</td>
                                <td>{e?.Quantity}</td>
                                <td >{e?.new_price * e?.Quantity}$</td>
                                <td >
                                    <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }


            </tbody>
        </Table>
    );
}

export default CartTable;