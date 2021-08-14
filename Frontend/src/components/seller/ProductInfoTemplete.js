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
const ProductInfoTemplete = (productDetails)=>{
    return (
        
        <>
            {console.log(productDetails)}

<h6 className="heading-small text-muted mb-4">
                    Product information
                  </h6>
                  <Row><Col lg='5'>
                      <img className="card-img-top" style={{ maxHeight:270 ,width:'auto'}} src={ (productDetails.product_picture)? "http://localhost:8000/"+productDetails.product_picture:'http://localhost:8000/seller/image/demo_product.jpg'}
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
                            Product No: 
                          </label>
                          {productDetails.id}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Product Title:
                          </label>
                          {productDetails.name}
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
                            price In Taka:
                          </label>
                          { productDetails.price }
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Payment recive NO:
                          </label>
                          { productDetails.Pyament_recive_no }
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
                            Payment method:
                          </label>
                          {productDetails.paymentMethods[productDetails.from_currency]}
                        </FormGroup>
                      </Col>
                      {productDetails.To_currency?
                        
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            phone Number/recive number:
                          </label>
                          { productDetails.To_currency}
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
                            other info need:
                          </label><br/>
                          { productDetails.number_of_info }
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
                            Product Desciption:
                          </label><br/>
                          { productDetails.description }
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                 
        </>
            
 
        
    );
}

export default ProductInfoTemplete;