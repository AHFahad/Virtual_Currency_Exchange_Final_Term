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
  
  const baseURL="http://localhost:8000/api/admin/viewAllUserInfo"
  const ViewAllUserInfo = () => {


    const [viewAllUserInfo, setViewAllUserInfo] = useState([]);
    const getData=async()=>{
      const response= await axios.get(baseURL);
      console.log(response.data.users)
      setViewAllUserInfo(response.data.users)
      // console.table(response.data.user);
    }


    useEffect(()=>{
      getData();

    }, []);

    const deleteEvent = async (e) => {
        e.preventDefault();
        console.log(e.target.id);
        
        const res = await axios.get(`http://localhost:8000/api/admin/adminDeleteUserInfo/${e.target.id}`);
        if (res.data) {
            console.log(res.data.message);
            getData();  
        }
    }

    // const _onSubmit= async(e)=>{
    //     e.preventDefault();
        
           
    //    const reports={
    //     //   desc:desc.desc,
    //    }
         
    //       axios.post(baseURL, reports)
    //       .then((res) => {
    //         getData();
    //       }).catch((error) => {
            
    //       }) 
               
    // };


    return (
        <div>
            <Header />

            <br /><br />
            <center>
                <Link to={`/admin/addAdmin`} className="btn btn-primary" > Add Another Admin </Link>
            </center>

            {/* <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex" type="get" action= "{{ route('userSearch') }}">
                    <input class="form-control me-2" name=query type="search" placeholder="Search User by Name" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
            </nav> */}

            <div className="class-body mt-5">
                <table className="table table-bordered table-striped">
                    <thead>
                        
                        <tr>
                            <th >ID</th>
                            <th >Name</th>
                            <th >Email</th>
                            <th >Password</th>
                            <th >Address</th>
                            <th >Phone Number</th>
                            <th >NID Picture</th>
                            <th >NID Number</th>
                            <th >Prime Status</th>
                            <th >Approved By</th>
                            <th >Profile Picture</th>
                            <th >Status</th>
                            <th >Points</th>
                            <th >Type</th>
                            <th >CREATED_AT</th>
                            <th >UPDATED_AT</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        viewAllUserInfo.map((e) => {
                            return (
                                <tr key={e.id} >
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                    <td>{e.address}</td>
                                    <td>{e.phone_number}</td>
                                    <td>{e.nid_card_picture}</td>
                                    <td>{e.nid_number}</td>
                                    <td>{e.prime_status}</td>
                                    <td>{e.aproved_by}</td>
                                    <td>{e.profile_picture}</td>
                                    <td>{e.status}</td>
                                    <td>{e.points}</td>
                                    <td>{e.type}</td>
                                    <td>{e.created_at }</td>
                                    <td>{e.updated_at }</td>
                                    <td>
                                        <Link to={`/admin/adminEditUserInfo/${e.id}`} className="btn btn-warning" > Edit </Link>
                                        <span className="btn btn-danger" id={e.id} onClick={deleteEvent} > Delete </span>
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
  
  export default ViewAllUserInfo;
  