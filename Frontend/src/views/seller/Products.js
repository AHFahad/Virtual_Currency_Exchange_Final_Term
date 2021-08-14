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
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import axios from "axios";
  import React, { useState, useEffect } from 'react';
  import _Table from 'components/seller/ProductsTable.js'
  
  const baseURL="http://localhost:8000/api/seller/product"
  const Products = () => {



    const [products, setProducts] = useState([]);
    const getData=async()=>{
      const response= await axios.get(baseURL);
      console.table(response.data.product);
      setProducts(response.data.product)
      // console.table(response.data.user);
    }

    useEffect(()=>{
      getData();

    }, []);

 




    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
         
          <Row>
           
             
               
                
                  
                  
                    <_Table list={products} />
                    
                  
                    
                
          </Row>
         
          
        </Container>
      </>
    );
  };
  
  export default Products;
  