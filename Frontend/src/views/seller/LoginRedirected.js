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
  