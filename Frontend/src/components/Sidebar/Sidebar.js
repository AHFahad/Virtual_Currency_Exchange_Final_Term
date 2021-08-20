import { NavLink as NavLinkRRD, Link,useHistory } from "react-router-dom";

import { PropTypes } from "prop-types";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";



import axios from "axios";
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
const baseURL="http://localhost:8000/api/logout";
const baseURLProfile="http://localhost:8000/api/seller/profile";
var ps;

const Sidebar = (props) => {
  const history = useHistory();
  const [profileDetails, setProfileDetails] = useState([]);
  const [collapseOpen, setCollapseOpen] = useState();
  const getData=async()=>{
    const response= await axios.get(baseURLProfile);
    setProfileDetails(response.data.user);
    console.log(profileDetails)
  }
  useEffect(()=>{
    getData();
  }, []);


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
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };




  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if(prop.show){
        return (
              
                  <NavItem key={key}>
                  <NavLink
                    to={prop.layout + prop.path}
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    {prop.name}
                  </NavLink>
                </NavItem>    
        );
      }
      
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <span><h1><b>VCES</b></h1></span>
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
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
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={(e) => {
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
                   
              }}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <span><h1><b>VCES</b></h1></span>
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          
          
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
