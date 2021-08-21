  import React, { useState, useEffect,useLayoutEffect } from 'react';
  import _Table from 'components/Table.js'
  import { useParams  } from "react-router";
  import Swal from 'sweetalert2';
  import { useHistory } from "react-router-dom";

  const baseURL="http://localhost:8000/api/seller/product/"
  const SslPaymentRedirected = (props) => {
    const history = useHistory();
    const {message:message} = useParams();
    useLayoutEffect(()=>{
        console.log(message)
        let msg="";
        let status="success";
        if(message=="success"){
          msg="payment done successfully...";
        }
        else if(message=="validation_failed"){
          msg="validation Failed"
          status="error"
        }
        else if(message=="Invalid_Transaction"){
          msg="Invalid Transaction";
          status="error"
        }
        else if(message=="Transaction_Falied"){
          msg="Transaction Falied";
          status="error"
        }
        else if(message=="Transaction_already_Successful"){
          msg="Transaction already Successful";
        }
        else if(message=="Transaction_is_Invalid"){
          msg="Transaction is Invalid";
        }
        Swal.fire(
          msg,
          'You clicked the button!',
          status
        )
        history.push(`/seller/index`);
    }, []);
    
    return (
      <>
       
      </>
    );
  };
  
  export default SslPaymentRedirected;
  