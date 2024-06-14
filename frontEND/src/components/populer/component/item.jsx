import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './item.css'
const Item = (props) => {
    return (
        <Link to={`/Product/${props?.id}`} style={{ textDecoration: "none", boxShadow:"0 0 2px 2px rgb(240, 240, 240)"}}>
            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} className='Card_image' />
                <Card.Body>
                    <Card.Text>
                        <span>{props.name}</span>
                    </Card.Text>
                    <div className="price">
                        <span className="newprise">{props.new_price}</span>
                        <span className="oldprise">{props.old_price}</span>
                    </div>

                </Card.Body>
            </Card>
        </Link>
    )
}

export default Item