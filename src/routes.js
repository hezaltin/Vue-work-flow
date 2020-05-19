import Basic from "./components/basics-root/basics.vue";
// import User from "./components/routing-components/user/User.vue";
// import UserStart from "./components/routing-components/user/UserStart.vue";
// import UserDetail from "./components/routing-components/user/UserDetail.vue";
// import UserEdit from "./components/routing-components/user/UserEdit.vue";
import Header from "./components/routing-components/header/header";
//Lazy Loading Stuff ..
const User  = resolve => {
  require.ensure(['./components/routing-components/user/User.vue'],()=>{
    resolve(require('./components/routing-components/user/User.vue'))
  },'user')
}

const UserStart  = resolve => {
  require.ensure(['./components/routing-components/user/UserStart.vue'],()=>{
    resolve(require('./components/routing-components/user/UserStart.vue'))
  },'user')
}

const UserDetail  = resolve => {
  require.ensure(['./components/routing-components/user/UserDetail.vue'],()=>{
    resolve(require('./components/routing-components/user/UserDetail.vue'))
  },'user')
}

const UserEdit  = resolve => {
  require.ensure(['./components/routing-components/user/UserEdit.vue'],()=>{
    resolve(require('./components/routing-components/user/UserEdit.vue'))
  },'user')
}

//Normal Routes with Child Routes
// export const routes = [
//     {path:'', component:Basic,name:'Basic'},
//     {path:'/user', component:User,children:[
//         {path:'',component:UserStart,name:'UserStart'},
//         {path:':id',component:UserDetail},
//         {path:':id/edit',component:UserEdit,name:'UserEdit'},
//     ]},
//  {path:'redirect-me',redirect:'/user'}
// ]

//Multiple Routes and Child Routes With Name
export const routes = [
  {
    path: "",
    components: {
      default: Basic,
      "header-top": Header,
    },
    name: "Basic",
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header,
    },
    children: [
      { path: "", component: UserStart, name: "UserStart" },
      { path: ":id", component: UserDetail, beforeEnter:(to,from,next)=>{
        console.log('Routes ROuting====>')
        next()
      } },
      { path: ":id/edit", component: UserEdit, name: "UserEdit" },
    ],
  },
  { path: "/redirect-me", redirect: "/user" },
  { path: "*", redirect: "/" },
];
