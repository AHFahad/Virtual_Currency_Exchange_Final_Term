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
import { useParams  } from "react-router";
import axios from "axios";
const baseURL="http://localhost:8000/api/admin/adminEditUserInfo/"

const Index = (props) => {
    const {id:eid} = useParams();
    const history = useHistory();
    const [event, setEvent] = useState({
    name:'',
    email:'',
    password:'',
    address:'',
    phone_number:'',
});

  
    const [users, setUsers] = useState([]);
    const[formValidation,setFormValidation]=useState([]);
    const formdata = new FormData();

    const getData=async()=>{
      const response= await axios.get(baseURL+eid);
      setUsers(response.data.users);
      console.log(users);
     
    }

    useEffect(()=>{
      getData();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUsers({ ...users, [name]: value });
        console.log(users)
      };

    const _onSubmit= async(e)=>{
        e.preventDefault();
        const product={
          name:users.name,
          email:users.email,
          password:users.password,
          address:users.address,
          phone_number:users.phone_number,
          prime_status:users.prime_status,
          status:users.status,
       }
       console.log(product);
       
       //often forgets the file
    //   let imagefile = document.querySelector('#file-input');
    //   formdata.append("profile_picture", imagefile.files[0]);
    //   console.log(formdata.get('profile_picture'));
  
  
    //   formdata.append('name',product.name);
    //   formdata.append('address',product.address);
    //   formdata.append('phone_number',product.phone_number);
    //   console.log("test2"+formdata.get('profile_picture_upload'));
         
          axios.post(baseURL+eid, product)
          .then((res) => {
            // history.push(`/admin/viewAllUserInfo`)
          if(res.data.error==400){
            setFormValidation(res.data.errorData)
          }
          if(res.data.status=='success') history.push(`/admin/viewAllUserInfo`);
          }).catch((error) => {
          console.log(error)
          })
  
          
        
      };


  
return (
    <>
      <Header />
      {/* Page content */}


      <Container className="mt-5" fluid>
        
      <form onSubmit={_onSubmit}>

        <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value= { users.name } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.name}</span>
        </div>

        <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={ users.email } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.email}</span>
        </div>

        <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={ users.password } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.password}</span>
        </div>

        <div className="form-group">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" name="address" value={ users.address } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.address}</span>
        </div>

        <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="number" className="form-control" name="phone_number" value={ users.phone_number } onChange={handleInputChange} />
            <span className="text-danger">{formValidation.phone_number}</span>
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1" className="form-label">Prime Status</label>
            <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
            <select  name="prime_status" className="form-control" value={users.prime_status} onChange={handleInputChange}>
                <option value="normal">normal</option>
                <option value="prime">prime</option>
            </select>
            <span className="text-danger">{formValidation.prime_status}</span>
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1" className="form-label">Status</label>
            <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
            <select  name="status" className="form-control" value={users.status} onChange={handleInputChange}>
                <option value="active">active</option>
                <option value="deactive">deactive</option>
            </select>
            <span className="text-danger">{formValidation.status}</span>
        </div>
        <br />

        <button type="submit" className="btn btn-primary">Update</button>
    </form>
       
      </Container>
    </>
  );
};

export default Index;