
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";
  
  import axios from "axios";
  import Swal from 'sweetalert2';
  import React, { useState, useEffect,useLayoutEffect } from 'react';
  import { useHistory,Link,Redirect } from "react-router-dom";
  const baseURL="http://localhost:8000/api/login";
  const Login = () => {
    const history = useHistory();
    if(localStorage.getItem('token')) history.push('/seller/index');

    useLayoutEffect(() => {
        if(localStorage.getItem('token')){
            const type=localStorage.getItem('type');
            if(type=="admin"){
                history.push(`/admin/home`);
            }
            else if(type=="seller" ){
                history.push(`/seller/index`); 
            }
            else if(type=="buyer" ){
                history.push(`/buyer/index`); 
            }
            else{
                history.push(`/buyer/index`);
            }
        }
      }, []);


    const initialize={
        email:"",
        password:"",
     };
     const[formValidation,setFormValidation]=useState([]);
     
    const [passwordDetails, setPasswordDetails] = useState(initialize);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPasswordDetails({ ...passwordDetails, [name]: value });
      };

      useEffect(()=>{
        
    }, []);

      const _onSubmit= async(e)=>{
        e.preventDefault();
        
         
       const product={
        email:passwordDetails.email,
          password:passwordDetails.password,
       }
       console.log(product);
         
          axios.post(baseURL, product)
          .then((res) => {
  
          Swal.fire(
              res.data.msg,
              'You clicked the button!',
              res.data.status
          )
          if(res.data.status=='success'){
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('type', res.data.user.type);
            localStorage.setItem('id', res.data.user.id);
            
            axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`};
            // console.log(localStorage.getItem('token'));
            if(res.data.user.type=="admin"){
                history.push(`/admin/home`);
            }
            else if(res.data.user.type=="seller" ){
                history.push(`/seller/index`); 
            }
            else if(res.data.user.type=="buyer" ){
                history.push(`/buyer/index`); 
            }
          } 
          }).catch((error) => {
          console.log(error)
          Swal.fire(
          'somting wentt wrong',
          'You clicked the button!',
          'error'
          )
          }) 
      };  

      const socialLogin= async(e)=>{
        e.preventDefault();
        console.log(e.target.name);
        axios.get("http://localhost:8000/api/sign-in/"+e.target.name)
        .then((res) => {
          window.location.replace(res.data);
        }).catch((error) => {
        console.log(error)
        Swal.fire(
        'somting wentt wrong',
        'You clicked the button!',
        'error'
        )
        }) 
      }
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Link
                  className="btn-neutral btn-icon btn"
                  color="default"
                  value="github"
                  name="github"
                  onClick={socialLogin}
                >
                  <span className="btn-inner--icon">
                    <img
                    value="github"
                    name="github"
                  onClick={socialLogin}
                      alt="..."
                      src={
                        require("../assets/img/icons/common/github.svg")
                          .default
                      }
                    />
                  </span>
                 Github
                </Link>
                <Link
                  className="btn-neutral btn-icon btn"
                  color="default"
                  value="google"
                  name="google"
                  onClick={socialLogin}
                >
                  <span className="btn-inner--icon">
                  <img
                    value="google"
                    name="google"
                  onClick={socialLogin}
                      alt="..."
                      src={
                        require("../assets/img/icons/common/google.svg")
                          .default
                      }
                    />
                  </span>
                  Google
                </Link>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
                        <Form role="form" onSubmit={_onSubmit}>
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email"
                                type="email"
                                autoComplete="new-email"
                                name="email"
                                value={passwordDetails.email}
                                onChange={handleInputChange}
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Password"
                                type="password"
                                autoComplete="new-password"
                                name="password"
                                value={passwordDetails.password}
                                onChange={handleInputChange}
                              />
                            </InputGroup>
                          </FormGroup>
                         
                          <div className="text-center">
                            <Button className="my-4" color="primary" type="submit">
                              Sign in
                            </Button>
                          </div>
                        </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
             
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  };
  
  export default Login;
  