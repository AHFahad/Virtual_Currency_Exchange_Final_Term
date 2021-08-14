/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "./views/seller/Index.js";
import OrderList from "./views/seller/OrderList.js";
import Profile from "./views/examples/Profile.js";
import Maps from "./views/examples/Maps.js";
import Tables from "./views/examples/Tables.js";
import Icons from "./views/examples/Icons.js";
import OrderDetails from "./views/seller/OrderDetails.js";
import Products from "./views/seller/Products.js";
import ProductDetails from "./views/seller/ProductDetails.js";
import CreateProduct from "./views/seller/CreateProduct.js";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/seller",
    show:true,
  },
  {
    path: "/upgrade/prime",
    name: "Upgrade to Prime Seller!",
    icon: "ni ni-spaceship  text-primary",
    component: Icons,
    layout: "/seller",
    show:true,
  },
  {
    path: "/product/create",
    name: "Create Sell Post",
    icon: "ni ni-bag-17  text-primary",
    component: CreateProduct,
    layout: "/seller",
    show:true,
  },
  {
    path: "/Orders",
    name: "Order List",
    icon: "ni ni-archive-2  text-primary",
    component: OrderList,
    layout: "/seller",
    show:true,
  },
  {
    path: "/order/:id",
    name: "Order Details",
    icon: "ni ni-archive-2  text-primary",
    component: OrderDetails,
    layout: "/seller",
    show:false,
  },
  {
    path: "/statements",
    name: "Statements",
    icon: "ni ni-single-copy-04  text-primary",
    component: Maps,
    layout: "/seller",
    show:true,
  },
  {
    path: "/edit/profile",
    name: "User Profile",
    icon: "ni ni-ruler-pencil  text-primary",
    component: Profile,
    layout: "/seller",
    show:true,
  },
  {
    path: "/product/index",
    name: "My products",
    icon: "ni ni-ungroup  text-primary",
    component: Products,
    layout: "/seller",
    show:true,
  },
  {
    path: "/product/:id",
    name: "My products",
    icon: "ni ni-ungroup  text-primary",
    component: ProductDetails,
    layout: "/seller",
    show:false,
  },
  {
    path: "/edit/product/:id",
    name: "Edit Product",
    icon: "ni ni-ungroup  text-primary",
    component: CreateProduct,
    layout: "/seller",
    show:false,
  },
  
];
export default routes;
