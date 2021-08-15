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
    Button,
    UncontrolledTooltip,
  } from "reactstrap";
  import axios from "axios";
  const baseURL="http://localhost:8000/api/seller/invoice"
const StatementsTableRow = ({id,name,updated_at,product_id,price_on_selling_time,amount,seller_id,buyer_id ,status,callback})=>{
   
   
   
   const dawnloadInVoice=async()=>{
       console.log(`${baseURL}/${id}/${seller_id}/${buyer_id}`);
    const response= await axios.get(`${baseURL}/${id}/${seller_id}/${buyer_id}`);
   }
   
    return (
        <tr>    

            
                      <th scope="row">
                        <Media className="align-items-center">
                         
                          <Media>
                            <span className="mb-0 text-sm">
                              {id}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td> {product_id}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          {name}
                       
                        </Badge>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          {price_on_selling_time*amount}
                       
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                        {dateFormat(updated_at, "dddd, mmmm dS, yyyy")}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                         
                          <div>
                          {dateFormat(updated_at, " h:MM:ss TT")}
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                      <Link to={`/seller/statement/details/${id}`} type="button" className="btn btn-primary">Details</Link>
                      {
                        status=='completed'?<Button className="btn btn-success" onClick={dawnloadInVoice}>Dawnload Invoice</Button>:<Button>Order was cancelled</Button>

                      }
                      </td>
                    </tr>
    );
}

export default StatementsTableRow;