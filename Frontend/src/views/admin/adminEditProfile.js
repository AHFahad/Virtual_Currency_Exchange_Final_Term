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
import React, { useState, useEffect } from 'react';

// node.js library that concatenates classNamees (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Label,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";
import axios from "axios";
import ProfileDetails from 'views/seller/Profile';
const baseURL="http://localhost:8000/api/admin/editProfile"

const Index = (props) => {
  const history = useHistory();
  const [event, setEvent] = useState({
    name:'',
    email:'',
    password:'',
    address:'',
    phone_number:'',
    profile_picture:'',
  });

  
  const [profDetails, setProfDetails] = useState([]);
  const[formValidation,setFormValidation]=useState([]);
  const [id, setId] = useState([]);
  const formdata = new FormData();

  const getData=async()=>{
    const response= await axios.get(baseURL);
    setProfDetails(response.data.profDetails);
    setId(response.data.id);
    console.log(profDetails);
    
  }

  useEffect(()=>{
    getData();
    console.group(ProfileDetails.profile_picture)
  }, []);

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
      profile_picture:profDetails.profile_picture,
    }
    console.log(product);
       
    //often forgets the file
    let imagefile = document.querySelector('#file-input');
    formdata.append("profile_picture", imagefile.files[0]);
    console.log(formdata.get('profile_picture'));
    
    
    formdata.append('name',product.name);
    formdata.append('email',product.email);
    formdata.append('password',product.password);
    formdata.append('address',product.address);
    formdata.append('phone_number',product.phone_number);
    console.log("test2"+formdata.get('profile_picture_upload'));
         
    axios.post(`http://localhost:8000/api/admin/editProfile/${id}`, formdata)
    .then((res) => {
      // history.push(`/admin/home`)
      if(res.data.error==400){
        setFormValidation(res.data.errorData)
        console.log(formValidation.name)
      }
      if(res.data.status=='success') history.push(`/admin/home`);
    }).catch((error) => {
      console.log(error)
    })
  
          
        
  };


  
return (
    <>
      <Header />
      {/* Page content */}


      <Container className="mt-5" fluid>
        
      <form onSubmit={_onSubmit} enctype="multipart/form-data">

        <div className="form-group mt-5">
            <label for="formFile" className="form-label"><b>Change Profile Picture:</b></label> <br />
            {
              <Col lg='5'>
              <img className="card-img-top" style={{ maxHeight:270 ,width:'auto'}} src={ (profDetails.profile_picture)? "http://localhost:8000/"+profDetails.profile_picture:'http://localhost:8000/admin/default_pic.png'}
                alt="Card image cap"/>
              </Col>
            }
            <br />
            <input className="form-control" type="file" id="file-input" name="profile_picture_upload" onChange={handleInputChange} />
        </div>
        <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value= { profDetails.name } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.name}</span>
        </div>

        <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" name="email" value={ profDetails.email } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.email}</span>
        </div>

        <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value= { profDetails.password } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.password}</span>
        </div>

        <div className="form-group">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" name="address" value= { profDetails.address } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.address}</span>
        </div>

        <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="number" className="form-control" name="phone_number" value= { profDetails.phone_number } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.phone_number}</span>
        </div><br />

        <button type="submit" className="btn btn-primary">Update</button>
    </form>
       
      </Container>
    </>
  );
};

export default Index;