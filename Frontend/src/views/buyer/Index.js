/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/  
import React, { useState, useEffect } from 'react';

// node.js library that concatenates classNamees (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Label,
} from "reactstrap";

// core components


import Header from "components/Headers/Header.js";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";
import axios from "axios";
const baseURL="http://localhost:8000/api/user/dashboard/"

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  
    const getData=async()=>{
      const response= await axios.get(baseURL+"3");
      console.log(response.data.user);  
      console.log(response.data.products);  
      setUser(response.data.user);  
      setProducts(response.data.products);  
    }

    useEffect(()=>{
      getData();
    }, []);

    let orderUrl ="";


  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <div class="row">
            { products.map((product)=>
            
                 <div class="col-sm  pt-4 px-2">
                 <div class="card">
                     <img class="card-img-top" src="https://i2.wp.com/pebelize.com/wp-content/uploads/2019/09/steam_10.jpg" alt="Card image cap"/>
                     <div class="card-body">
                     <h5 class="card-title">{product.name }</h5>
                     <p class="card-text">{ product.description }</p>
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item">{ product.price }</li>
                         <li class="list-group-item">Ratting : 5/5</li>
                     </ul> 
                     {<a href="#" class="btn btn-primary">Go somewhere</a> }
                      <p hidden> {orderUrl = "order/3/"+product.id} </p>
                     <div class="card-body">
                         <a href={orderUrl} class="btn btn-primary">Order</a>
                 </div>
                     </div>
                 </div>
             </div>
            )
            }
        
               
            
        </div>
      </Container>
    </>
  );
};

export default Index;
