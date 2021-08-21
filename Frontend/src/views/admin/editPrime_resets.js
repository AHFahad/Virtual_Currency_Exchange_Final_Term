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
const baseURL="http://localhost:8000/api/admin/editPrimeDuration/"

const Index = (props) => {
    const {seller_id:eid} = useParams();
    const history = useHistory();
    const [event, setEvent] = useState({
    name:'',
    email:'',
    password:'',
    address:'',
    phone_number:'',
});

  
    const [users, setUsers] = useState([]);
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
            prime_expire_date:users.prime_expire_date,
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
            history.push(`/admin/prime_approval`)
          if(res.data.error==400){
            //setFormValidation(res.data.errorData)
          }
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
            <label className="form-label">ID</label><br />
            <label className="form-label"><b>{ users.id }</b></label>
        </div>

        <div className="form-group">
            <label className="form-label">Seller ID</label><br />
            <label className="form-label"><b>{ users.seller_id }</b></label>
        </div>

        <div className="form-group">
            <label className="form-label">Expire Date</label><br />
            <label className="form-label"><b>{ users.expire_date }</b></label>
        </div>

        <div className="form-group">
            <label className="form-label">Prime Expire Date: (Current)</label><br />
            <label className="form-label"><b>{ users.prime_expire_date }</b></label>
        </div>
        <div>
            <label className="form-label"><b>UPDATE</b></label>
            <input type="date" className="form-control" name="prime_expire_date" value= { users.prime_expire_date } onChange={handleInputChange} />
        </div><br />

        <div className="form-group">
            <label className="form-label">CREATED_AT</label><br />
            <label className="form-label"><b>{ users.created_at }</b></label>
        </div>
        
        <div className="form-group">
            <label className="form-label">UPDATED_AT</label><br />
            <label className="form-label"><b>{ users.updated_at }</b></label>
        </div><br />

        <button type="submit" className="btn btn-primary">Update</button>
    </form>
       
      </Container>
    </>
  );
};

export default Index;