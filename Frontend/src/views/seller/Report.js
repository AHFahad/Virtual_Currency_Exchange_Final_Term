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
  import Header from "components/Headers/Header.js";
  import axios from "axios";
  import React, { useState, useEffect } from 'react';
  import _Table from 'components/Table.js'
  import { useParams  } from "react-router";
  import Swal from 'sweetalert2';
  import { useHistory,Link } from "react-router-dom";
import { set } from "date-fns";

  const baseURL="http://localhost:8000/api/seller/report";
  const ChangePassword = (props) => {
    const history = useHistory();
    const initialize={
        report:"",
     };
     
    const [passwordDetails, setPasswordDetails] = useState(initialize);
    const[formValidation,setFormValidation]=useState({report:""})

    useEffect(()=>{
    }, []);
    const formdata = new FormData();
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPasswordDetails({ ...passwordDetails, [name]: value });
    };

    
    
    
    const _onSubmit= async(e)=>{
      e.preventDefault();
      
         
     const reports={
        report:passwordDetails.report,
     }
     console.log(reports);
       
        axios.post(baseURL, reports)
        .then((res) => {
        console.log(res.data)
        if(res.data.error==400){
          setFormValidation({report:res.data.errorData})
          console.log(res.data.errorData)
        }
        Swal.fire(
            res.data.msg,
            'You clicked the button!',
            res.data.status
        )
        if(res.data.status=='success') history.push(`/seller/index`);
        }).catch((error) => {
        console.log(error)
        Swal.fire(
        'somting wentt wrong',
        'You clicked the button!',
        'error'
        )
        }) 
      
     

        
      
    };
    
    


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
                  {
                      <h3 className="mb-0">Report...</h3>
                  }
                    
                  </Col>
                  <Col className="text-right" xs="4">
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>

                  {/* form */}
                  
                  <Form
                  onSubmit={_onSubmit}
                  encType="multipart/form-data"
                  >
                  
                  
                  <div className="pl-lg-4">
                   
                   
                       
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Write..
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-report"
                            type="textarea"
                            name="report"
                            value={passwordDetails.report}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.report}</span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                
                <Row className="align-items-center">
                  <Col>
                    <Button
                      color="primary"
                      type="submit" 
                    >
                      Send
                    </Button>
                    <Link
                      color="danger"
                      className="btn btn-danger"
                      to={`/seller/index`}
                    >
                      Cancel
                    </Link>
                  </Col>
                </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
          
        </Container>
      </>
    );
  };
  
  export default ChangePassword;
  