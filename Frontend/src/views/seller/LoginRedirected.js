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
// reactstrap components
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
    UncontrolledTooltip,
    CardBody,
    FormGroup,
    Form,
    Input,
    Col,
    Button
  } from "reactstrap";
  // core components
  import {Link} from "react-router-dom";
  import Header from "components/Headers/Header.js";
  import axios from "axios";
  import React, { useState, useEffect,useLayoutEffect } from 'react';
  import _Table from 'components/Table.js'
  import ProductInfoTemplete from 'components/seller/ProductInfoTemplete.js'
  import { useParams  } from "react-router";
  import Swal from 'sweetalert2';
  import { useHistory } from "react-router-dom";

  const baseURL="http://localhost:8000/api/seller/product/"
  const LoginRedirected = (props) => {
    const history = useHistory();

    const {token:token} = useParams();
 
  

    

    useLayoutEffect(()=>{
        console.log(token)

        if(token){
        localStorage.setItem('token', token);
        localStorage.setItem('type', "buyer");
        
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`};
            history.push(`/seller/index`);
       
        }
        
   
    }, []);
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
    };
    return (
      <>
        <h1>{token}</h1>
      </>
    );
  };
  
  export default LoginRedirected;
  