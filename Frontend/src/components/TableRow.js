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
  } from "reactstrap";
const TableRow = ({id,name,created_at,product_id, callback})=>{
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
                        <div className="avatar-group">
                        {dateFormat(created_at, "dddd, mmmm dS, yyyy")}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                         
                          <div>
                          {dateFormat(created_at, " h:MM:ss TT")}
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                      <Link to={`order/${id}`} type="button" className="btn btn-outline-primary">Details</Link>
                      </td>
                    </tr>
    );
}

export default TableRow;