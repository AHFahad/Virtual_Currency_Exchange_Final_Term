import Index from "./views/seller/Index.js";
import OrderList from "./views/seller/OrderList.js";
import Profile from "./views/seller/Profile.js";
import EditProfile from "./views/seller/EditProfile.js";
import ChangePassword from "./views/seller/ChangePassword.js";
import UpgradeToPrime from "./views/seller/UpgradeToPrime.js";
import Report from "./views/seller/Report.js";
import SslPayment from "./views/seller/SslPayment.js";
import Maps from "./views/examples/Maps.js";
import Tables from "./views/examples/Tables.js";
import Icons from "./views/examples/Icons.js";
import OrderDetails from "./views/seller/OrderDetails.js";
import Products from "./views/seller/Products.js";
import ProductDetails from "./views/seller/ProductDetails.js";
import CreateProduct from "./views/seller/CreateProduct.js";
import StatementList from "./views/seller/StatementList.js";
import StatementDetails from "./views/seller/StatementDetails.js";
import LoginRedirected from "./views/seller/LoginRedirected.js";
import SslPaymentRedirected from "./views/seller/SslPaymentRedirected.js";

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
    component: UpgradeToPrime,
    layout: "/seller",
    show:true,
  },
  {
    path: "/ssl/payment",
    name: "Upgrade to Prime Seller!",
    icon: "ni ni-spaceship  text-primary",
    component: SslPayment,
    layout: "/seller",
    show:false,
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
    component: StatementList,
    layout: "/seller",
    show:true,
  },
  {
    path: "/statement/details/:id",
    name: "Statement Details",
    icon: "ni ni-single-copy-04  text-primary",
    component:StatementDetails ,
    layout: "/seller",
    show:false,
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "ni ni-ruler-pencil  text-primary",
    component: Profile,
    layout: "/seller",
    show:true,
  },
  {
    path: "/edit/profile",
    name: "User Profile",
    icon: "ni ni-ruler-pencil  text-primary",
    component: EditProfile,
    layout: "/seller",
    show:false,
  },
  {
    path: "/change/password",
    name: "Change Password",
    icon: "ni ni-ruler-pencil  text-primary",
    component: ChangePassword,
    layout: "/seller",
    show:false,
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
  {
    path: "/report",
    name: "Report",
    icon: "ni ni-ungroup  text-primary",
    component:Report,
    layout: "/seller",
    show:true,
  },
  {
    path: "/log/:token",
    name: "token",
    icon: "ni ni-ungroup  text-primary",
    component:LoginRedirected,
    layout: "/seller",
    show:false,
  },
  {
    path: "/pay/:message",
    name: "payment",
    icon: "ni ni-ungroup  text-primary",
    component:SslPaymentRedirected,
    layout: "/seller",
    show:false,
  },
  
  
];
export default routes;
