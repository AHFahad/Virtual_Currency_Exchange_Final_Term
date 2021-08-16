import {Link} from "react-router-dom";
import dateFormat from "dateformat";
import OrderDetails from "views/seller/OrderDetails";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
const ProfileTemplete = (ProfileDetails)=>{
    return (
        
        <>
            {console.log(ProfileDetails)}

<h6 className="heading-small text-muted mb-4">
                    Product information
                  </h6>
                  <Row><Col lg='5'>
                      <img className="card-img-top" style={{ maxHeight:270 ,width:'auto'}} src={ (ProfileDetails.profile_picture)? "http://localhost:8000/"+ProfileDetails.profile_picture:'http://localhost:8000/seller/image/demo_profile.png'}
                            alt="Card image cap"/>
                    </Col>
                  </Row>
                  
                  <div className="pl-lg-4">
                  
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            User ID: 
                          </label>
                          {ProfileDetails.id}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Name:
                          </label>
                          {ProfileDetails.name}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            User Type:
                          </label>
                          { ProfileDetails.type }
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Email:
                          </label>
                          { ProfileDetails.email }
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Phone number:
                          </label>
                          {ProfileDetails.phone_number}
                        </FormGroup>
                      </Col>
                      {ProfileDetails.phone_number?
                        
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            NID number:
                          </label>
                          { ProfileDetails.nid_number}
                        </FormGroup>
                      </Col>:''
                    }
                    </Row>
                    
                    
                                 
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Prime Status:
                          </label><br/>
                          { ProfileDetails.prime_status }
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="pl-lg-4">                 
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            address:
                          </label><br/>
                          { ProfileDetails.address }
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                 
        </>
            
 
        
    );
}

export default ProfileTemplete;