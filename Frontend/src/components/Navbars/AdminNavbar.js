import { useHistory,Link } from "react-router-dom";


import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import axios from "axios";
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
const baseURL="http://localhost:8000/api/logout";
const baseURLProfile="http://localhost:8000/api/seller/profile";
 window.pointsUpdate=0;
const AdminNavbar = (props) => {
  const history = useHistory();
  const [profileDetails, setProfileDetails] = useState([]);

    const getData=async()=>{
      const response= await axios.get(baseURLProfile);
      setProfileDetails(response.data.user);
      console.log(profileDetails)
    }
    useEffect(()=>{
      getData();
    }, [window.pointsUpdate]);

    const _profile=()=>{
      if(profileDetails.type=="admin"){
        return "/admin/editProfile";
      }
      else if(profileDetails.type=="buyer"){
        return "/buyer/Profile";
      }
      else if(profileDetails.type="seller"){
        return "/seller/profile";
      }
    }
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="#"
          >
            {props.brandText}
          </Link>
          {/* <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form> */}
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      { (profileDetails.type=="seller")?
                        (profileDetails.prime_status=="prime")? "Prime User ":"You have "+profileDetails.points+" points  "
                        :""
                      }
                    </span>
                  </Media>
                  <span className="avatar avatar-sm rounded-circle">
                    {
                      (profileDetails.type=="seller")?<img className="card-img-top"  src={ (profileDetails.profile_picture)? "http://localhost:8000/"+profileDetails.profile_picture:'http://localhost:8000/seller/image/demo_profile.png'}
                            alt="Card image cap"/>:"" 
                  }
                  {
                    (profileDetails.type=="admin")?<img className="card-img-top"  src={ (profileDetails.profile_picture)? "http://localhost:8000/"+profileDetails.profile_picture:'http://localhost:8000/admin/adminDP.jpg'}
                            alt="Card image cap"/>:"" 
                  }
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                    
                      {
                        (profileDetails.type=="admin")?"Admin":
                        (profileDetails.name)? profileDetails.name:"No name"
                      }
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to={_profile} tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={
                  (e) => {
                    e.preventDefault();
                    const response=  axios.get(baseURL).then((res)=>{
                            Swal.fire(
                                res.data.msg,
                                'You clicked the button!',
                                res.data.status
                              )
                              localStorage.clear();
                              history.push('/login');
                              
                    }).catch(res=>{
                      Swal.fire(
                                "something went wrong",
                                'You clicked the button!',
                                'error'
                              )
                              localStorage.clear();
                              history.push('/login');
                    })
                   
                  }
                  
                }>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
