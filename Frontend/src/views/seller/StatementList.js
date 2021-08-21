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
  import _Table from 'components/seller/StatementsTable.js'
  
  const baseURL="http://localhost:8000/api/seller/statement"
  const StatementList = () => {



    const [statementList, setStatementList] = useState([]);
    const [products, setProducts] = useState([]);
    const getData=async()=>{
      const response= await axios.get(baseURL);
      console.table(response.data.product);
      setStatementList(response.data.product)
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
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Card tables</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Order NO</th>
                      <th scope="col">Poduct id</th>
                      <th scope="col">product title</th>
                      <th scope="col">Income</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <_Table list={statementList} />
                    
                  </tbody>
                </Table> 
              </Card>
            </div>
          </Row>
         
          
        </Container>
      </>
    );
  };
  
  export default StatementList;
  