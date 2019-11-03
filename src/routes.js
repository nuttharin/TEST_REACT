/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//import UserPage from "views/User.jsx";
import MyApi from "views/My_Api.jsx";
import MyCv from "views/Mycv.jsx";

var routes = [
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // }, 
  {
    path: "/myapi",
    name: "Myapi",
    icon: "nc-icon nc-pin-3",
    component: MyApi,
    layout: "/admin"
  },
  {
    path: "/mycv",
    name: "Mycv",
    icon: "nc-icon nc-pin-3",
    component: MyCv,
    layout: "/admin"
  }
  
 
];
export default routes;
