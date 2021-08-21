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
import adminHome from "./views/admin/adminHome.js";
import adminEditProfile from "./views/admin/adminEditProfile.js";
import adminAnnouncement from "./views/admin/adminAnnouncement.js";
import adminViewAllUserInfo from "./views/admin/adminViewAllUserInfo.js";
import createAdmin from "./views/admin/createAdmin.js";
import adminEditUserInfo from "./views/admin/adminEditUserInfo.js";
import adminViewAllTransaction from "./views/admin/adminViewAllTransaction.js";
import adminUserReports from "./views/admin/adminUserReports.js";
import prime_approval from "./views/admin/prime_approval.js";
import editPrime_resets from "./views/admin/editPrime_resets.js";

var routes = [
  {
    path: "/home",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32",
    component: adminHome,
    layout: "/admin",
    show:true,
  },
  {
    path: "/editProfile",
    name: "Edit Profile",
    icon: "ni ni-circle-08",
    component: adminEditProfile,
    layout: "/admin",
    show:true,
  },
  {
    path: "/viewAllUserInfo",
    name: "User Info",
    icon: "ni ni-badge",
    component: adminViewAllUserInfo,
    layout: "/admin",
    show:true,
  },
  {
    path: "/addAdmin",
    name: "Add Admin",
    icon: "ni ni-badge",
    component: createAdmin,
    layout: "/admin",
    show:false,
  },
  {
    path: "/adminEditUserInfo/:id",
    name: "Edit User Info",
    icon: "ni ni-badge",
    component: adminEditUserInfo,
    layout: "/admin",
    show:false,
  },
  {
    path: "/viewAllTransaction",
    name: "Transaction History",
    icon: "ni ni-money-coins",
    component: adminViewAllTransaction,
    layout: "/admin",
    show:true,
  },
  {
    path: "/userReports",
    name: "User Reports",
    icon: "ni ni-email-83",
    component: adminUserReports,
    layout: "/admin",
    show:true,
  },
  {
    path: "/announcement",
    name: "Announcement",
    icon: "ni ni-notification-70",
    component: adminAnnouncement,
    layout: "/admin",
    show:true,
  },
  {
    path: "/prime_approval",
    name: "Prime Approval",
    icon: "ni ni-folder-17",
    component: prime_approval,
    layout: "/admin",
    show:true,
  },
  {
    path: "/editPrimeDuration/:seller_id",
    name: "Edit Prime Duration",
    icon: "ni ni-folder-17",
    component: editPrime_resets,
    layout: "/admin",
    show:false,
  },
];
export default routes;
