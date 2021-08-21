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
    CardBody,
    FormGroup,
    Form,
    Input,
    Col,
    Button
  } from "reactstrap";
  // core components
  import {Link} from "react-router-dom";
  import Header from "components/Headers/Header.js";
  import axios from "axios";
  import React, { useState, useEffect } from 'react';
  import _Table from 'components/Table.js'
  import ProfileTemplete from 'components/buyer/profile'
  import { useParams  } from "react-router";
  import Swal from 'sweetalert2';
  import { useHistory } from "react-router-dom";
import profile from "views/examples/Profile";

  const baseURL="http://localhost:8000/api/user/profile/";
  //const {id:eid} = useParams();
 
  const Profile = (props) => {
    
    const {uid:uid} = useParams();
    console.log(uid);
    const eid = "3";
    const history = useHistory();
    const [profileDetails, setProfileDetails] = useState([]);

    const getData=async()=>{  // get data from api
      const response= await axios.get(baseURL+eid);
      setProfileDetails(response.data.user);
      console.log(response.data.user);
    }

    useEffect(()=>{
      getData();
    }, []);  

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row>
          {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            
          </Col> */}
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Order Details</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    {/* <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <ProfileTemplete key={profileDetails.id} {...profileDetails} ></ProfileTemplete>
                                    
                  <h6 className="heading-small text-muted mb-4">Action:</h6>


                  { uid?<Link
                      color="primary"
                      className="btn btn-primary"
                      to={`/buyer/edit/profile/1`}
                    >
                      Save
                    </Link>:
                    <Link
                      color="primary"
                      className="btn btn-primary"
                      to={`/buyer/edit/profile/1`}
                    >
                      Edit profile
                    </Link>          
                  }
                  <Link
                      color="primary"
                      className="btn btn-primary"
                      to={`/buyer/index`}
                    >
                      Back
                    </Link>  
              </CardBody>
            </Card>
          </Col>
        </Row>
        
          
        </Container>
      </>
    );
  };
  
  export default Profile;
  