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
  import {Link} from "react-router-dom";
  import axios from "axios";
  import React, { useState, useEffect } from 'react';
  
  const baseURL="http://localhost:8000/api/admin/prime_approval"
  const Prime_approval = () => {



    const [prime_approval, setPrime_approval] = useState([]);
    const getData=async()=>{
      const response= await axios.get(baseURL);
      setPrime_approval(response.data.prime)
      // console.table(response.data.user);
    }


    useEffect(()=>{
      getData();

    }, []);


    return (
        <div>
            <Header />


            <div className="class-body mt-5">
                <table className="table table-bordered table-striped">
                    <thead>
                        
                        <tr>
                            <th>ID</th>
                            <th>Seller ID</th>
                            <th>Package</th>
                            <th>Transaction No</th>
                            <th>Payment Method</th>
                            <th>CREATED_AT</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        prime_approval.map((e) => {
                            return (
                                <tr key={e.id} >
                                    <td>{ e.id }</td>
                                    <td>{ e.seller_id }</td>
                                    <td>{ e.package }</td>
                                    <td>{ e.transection_no }</td>
                                    <td>{ e.payment_method }</td>
                                    <td>{ e.created_at }</td>
                                    <td>
                                        <Link to={`/admin/editPrimeDuration/${e.seller_id}`} className="btn btn-primary" > Update Prime Duration </Link>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
  };
  
  export default Prime_approval;
  