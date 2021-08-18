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
  import { useHistory } from "react-router-dom";
  import React, { useState, useEffect } from 'react';
  
  const baseURL="http://localhost:8000/api/admin/addAdmin"
  const AddAdmin = () => {

    const history = useHistory();
    const [profDetails, setProfDetails] = useState([]);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProfDetails({ ...profDetails, [name]: value });
        console.log(profDetails)
      };

    const _onSubmit= async(e)=>{
        e.preventDefault();
        const product={
          name:profDetails.name,
          email:profDetails.email,
          password:profDetails.password,
          address:profDetails.address,
          phone_number:profDetails.phone_number,
          nid_number:profDetails.nid_number,
       }

       axios.post(`http://localhost:8000/api/admin/addAdmin`, product)
          .then((res) => {
            history.push(`/admin/viewAllUserInfo`)
          if(res.data.error==400){
            //setFormValidation(res.data.errorData)
          }
          }).catch((error) => {
          console.log(error)
          })
    };


    return (
        <div>
            <Header />


            <form onSubmit={_onSubmit} >
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value= { profDetails.name } onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value= { profDetails.email } onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value= { profDetails.password } onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value= { profDetails.address } onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" name="phone_number" value= { profDetails.phone_number } onChange={handleInputChange} />
                </div>
                
                <div className="form-group">
                    <label className="form-label">NID Number</label>
                    <input type="text" className="form-control" name="nid_number" value= { profDetails.nid_number } onChange={handleInputChange} />
                </div>
                <br />

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>    
    )
  };
  
  export default AddAdmin;
  