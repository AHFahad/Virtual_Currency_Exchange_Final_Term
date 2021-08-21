import Profile from "./views/buyer/Profile";
import OrderHistory from "./views/buyer/OrderHistory";
import OrderDetails from "./views/buyer/OrderDetails";
import Index from "./views/buyer/Index";
import Order from "./views/buyer/Order";


var routes = [
  {
    path: "/profile",
    name: "User Profile",
    icon: "ni ni-ruler-pencil  text-primary",
    component: Profile,
    layout: "/buyer",
    show:true,
  },
  {
    path: "/edit/profile/:uid",
    name: "Edit Profile",
    icon: "ni ni-ruler-pencil  text-primary",
    component: Profile,
    layout: "/buyer",
    show:false,
  },
  {
    path: "/orderHistory",
    name: "Order History",
    icon: "ni ni-ruler-pencil  text-primary",
    component: OrderHistory,
    layout: "/buyer",
    show:true,
  },
  {
    path: "/orderr/:id",
    name: "Order Details",
    icon: "ni ni-archive-2  text-primary",
    component: OrderDetails,
    layout: "/buyer",
    show:false,
  },
  {
    path: "/index",
    name: "Buyer Home",
    icon: "ni ni-archive-2  text-primary",
    component: Index,
    layout: "/buyer",
    show:true,
  },
  {
    path: "/order/:uid/:id",
    name: "Order",
    icon: "ni ni-archive-2  text-primary",
    component: Order,
    layout: "/buyer",
    show:false,
  },
  
];
export default routes;
