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
  
  const baseURL="http://localhost:8000/api/admin/userReports"
  const UserReports = () => {



    const [userReports, setUserReports] = useState([]);
    const getData=async()=>{
      const response= await axios.get(baseURL);
      setUserReports(response.data.reports)
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
                            <th>Report ID</th>
                            <th>Buyer ID</th>
                            <th>Seller ID</th>
                            <th>Report Description</th>
                            <th>CREATED_AT</th>
                            <th>UPDATED_AT</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        userReports.map((e) => {
                            return (
                                <tr key={e.rep_id} >
                                    <td>{e.rep_id }</td>
                                    <td>{e.buyer_id }</td>
                                    <td>{e.seller_id }</td>
                                    <td>{e.rep_description }</td>
                                    <td>{e.created_at }</td>
                                    <td>{e.updated_at }</td>
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
  
  export default UserReports;
  