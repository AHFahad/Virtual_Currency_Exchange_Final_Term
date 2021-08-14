import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import dateFormat from "dateformat";
import OrderDetails from "views/seller/OrderDetails";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";
  const baseURL="http://localhost:8000/api/seller/product/update/status";
const ProductsTableCard = (product)=>{
    const history = useHistory();
    const [productstatatus, setProductstatatus] = useState(product.delete_status);
    const statusUpdate=(event)=>{
        const { name, value } = event.target;
        let new_status="";
        value=="active"?new_status="deactive":new_status="active";
        console.log(value+" "+new_status);
        const sending={
            id:product.id,
            status:new_status
        };
        console.log(sending);
        axios.post(baseURL,sending)
     .then((res) => {
       console.log(res.data)
       setProductstatatus(new_status);
        console.log("status updated "+product.delete_status)
        Swal.fire(
          res.data.msg,
          'You clicked the button!',
          res.data.status
        )
        // history.push('/seller/order');
     }).catch((error) => {
       console.log(error)
       Swal.fire(
        'somting  wentt wrong',
        'You clicked the button!',
        'error'
      )
     })
    }

    return (
        
        
            
       
        productstatatus!='deleted'?<div className="col-sm  pt-40 px-2 ">
                        <div className="row " align="left"style={{ border:'20px solid rgba(0, 0, 0, 0.0)' }}>
                        <div className="card " style={{ maxWidth: 220, minWidth: 260 }}>
                            <img className="card-img-top" style={{ maxHeight:230 }} src={ (product.product_picture)? "http://localhost:8000/"+product.product_picture:'http://localhost:8000/seller/image/demo_product.jpg'}
                            alt="Card image cap"/>
                            <div className="card-body">
                            <h5 className="card-title">{ product.name }</h5>
                            <p className="card-text">{ product.description }</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price : { product.price }</li>
                            </ul>
                                <div className="card-body">
                                <Row>
                                    <Col>
                                        <Link to={`${product.id}`} className="btn btn-primary btn-sm" >Details</Link>  
                                    </Col>
                                    <Col>                   
                                         <button   className={productstatatus=="deactive"?"btn btn-success btn-sm":"btn btn-danger btn-sm"} id={product.id} value={productstatatus} onClick={statusUpdate}>{productstatatus=="deactive"?"Active":"Deactive"}</button>                          
                                    </Col>  
                                </Row>

                                </div>
                            </div>
                        </div>

            </div>
            
            </div>:""

        

        
    );
}

export default ProductsTableCard;