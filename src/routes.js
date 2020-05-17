
import Basic from './components/basics-root/basics.vue';
import User from './components/routing-components/user/User.vue';
import UserStart from './components/routing-components/user/UserStart.vue'
import UserDetail from './components/routing-components/user/UserDetail.vue'
import UserEdit from './components/routing-components/user/UserEdit.vue'
export const routes = [
    {path:'', component:Basic},
    {path:'/user', component:User,children:[
        {path:'',component:UserStart},
        {path:':id',component:UserDetail},
        {path:':id/edit',component:UserEdit},
    ]}
]