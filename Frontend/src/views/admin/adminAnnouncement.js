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
    Button, Modal, ModalHeader, ModalBody, ModalFooter
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import {Link} from "react-router-dom";
  import axios from "axios";
  import React, { useState, useEffect } from 'react';
  
  const baseURL="http://localhost:8000/api/admin/announcement"
  const Announcements = () => {



    const [announcements, setAnnouncements] = useState([]);
    const getData=async()=>{
      const response= await axios.get(baseURL);
      setAnnouncements(response.data.announcements)
      // console.table(response.data.user);
    }

    const [desc, setDesc] = useState([]);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(()=>{
      getData();

    }, []);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setDesc({ ...desc, [name]: value });
    };


    const _onSubmit= async(e)=>{
        e.preventDefault();
        
           
       const reports={
          desc:desc.desc,
       }
         
          axios.post(baseURL, reports)
          .then((res) => {
            getData();
          }).catch((error) => {
            
          }) 
               
      };

      const deleteEvent = async (e) => {
        e.preventDefault();
        console.log(e.target.id);
        
        const res = await axios.get(`http://localhost:8000/api/admin/deleteAnnouncement/${e.target.id}`);
        if (res.data) {
            console.log(res.data.message);
            getData();  
        }
    }


    return (
        <div>
            <Header />

            <center>
                <div className="mr-auto mt-5 mb-5">
                    <Button color="btn btn-primary" onClick={toggle}>Send Announcement</Button>
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>New Announcement</ModalHeader>
                        <ModalBody>
                            <div className="modal-body">
                                <form onSubmit={_onSubmit}>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Message:</label>
                                        <textarea className="form-control" name="desc" onChange={handleInputChange} ></textarea>
                                    </div>
                                    <ModalFooter>
                                        <Button type="submit" color="primary" onClick={toggle}>Send</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                    </ModalFooter>
                                </form>
                            </div>
                        </ModalBody>
                        
                    </Modal>
                </div>
            </center>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="class-header">
                            </div>
                            <div className="class-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        
                                        <tr>
                                            <th>Announcement ID</th>
                                            <th>Admin ID</th>
                                            <th>Description</th>
                                            <th>CREATED_AT</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        announcements.map((e) => {
                                            return (
                                                <tr key={e.ann_id} >
                                                    <td>{e.ann_id}</td>
                                                    <td>{e.admin_id}</td>
                                                    <td>{e.description}</td>
                                                    <td>
                                                        {e.created_at}</td>
                                                    <td>
                                                        <span className="btn btn-danger" id={e.ann_id} onClick={deleteEvent} > Delete </span>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  };
  
  export default Announcements;
  