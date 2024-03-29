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
  import Header from "components/Headers/Header.js";
  import axios from "axios";
  import React, { useState, useEffect } from 'react';
  import _Table from 'components/seller/ProductsTable.js'
  
  const baseURL="http://localhost:8000/api/seller/product"
  const baseURLSearch="http://localhost:8000/api/seller/search/product"
  const Products = () => {



    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([]);
    const getData=async()=>{
      const response= await axios.get(baseURL);
      // console.table(response.data.product);
      setProducts(response.data.product)
      // console.table(response.data.user);
    }

    useEffect(()=>{
      getData();

    }, []);

 
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setSearch({ ...search, [name]: value });
    };

    const _onSubmit= async(e)=>{
      e.preventDefault();
      console.log(search);
        axios.post(baseURLSearch,search)
        .then((res) => {
        // console.log(res.data.product)
        setProducts(res.data.product)
        }).catch((error) => {
        console.log(error);
        }) 
    }

    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
                <form onSubmit={_onSubmit}  >
              <div className='row'>
                  <div className="col-sm-11">
                  <div className="form-outline">
                  <input type="search" id="form1" name='search' className="form-control" value={search.search} onChange={handleInputChange} /><br/><br/>
                  </div>

                  </div>
                  <div className="col-sm-1">
                      <button type="submit" className="btn btn-success">
                          <i className="fas fa-search"></i>
                      </button>
                  </div>
              </div>
          </form>
          <Row>
                <_Table list={products} />
          </Row>
         
          
        </Container>
      </>
    );
  };
  
  export default Products;
  