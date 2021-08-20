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
  
  const baseURL="http://localhost:8000/api/admin/viewAllTransaction"
  const ViewAllTransaction = () => {



    const [viewAllTransaction, setViewAllTransaction] = useState([]);
    const getData=async()=>{
      const response= await axios.get(baseURL);
      setViewAllTransaction(response.data.orders)
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
                        <th>Product ID</th>
                        <th>Buyer ID</th>
                        <th>Price On Selling Time</th>
                        <th>Transaction NO of Sender</th>
                        <th>Amount</th>
                        <th>Buyer Reply</th>
                        <th>Seller Reply</th>
                        <th>Review</th>
                        <th>Rating</th>
                        <th>Transaction NO</th>
                        <th>Phone Number</th>
                        <th>Game ID</th>
                        <th>Status</th>
                        <th>CREATED_AT</th>
                        <th>UPDATED_AT</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        viewAllTransaction.map((e) => {
                            return (
                                <tr key={e.id} >
                                    <td>{e.id}</td>
                                    <td>{e.product_id }</td>
                                    <td>{e.buyer_id }</td>
                                    <td>{e.price_on_selling_time }</td>
                                    <td>{e.transection_number_of_sender }</td>
                                    <td>{e.amount }</td>
                                    <td>{e.buyer_reply }</td>
                                    <td>{e.seller_reply }</td>
                                    <td>{e.review }</td>
                                    <td>{e.rating }</td>
                                    <td>{e.transection_no }</td>
                                    <td>{e.phone_number }</td>
                                    <td>{e.game_id }</td>
                                    <td>{e.status }</td>
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
  
  export default ViewAllTransaction;
  