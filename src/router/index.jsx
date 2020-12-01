import Home from '../components/Home.jsx'
import News from '../components/News.jsx'
import User from '../components/User.jsx'
import NewIndex from '../components/NewIndex.jsx'
import NewDetails from '../components/NewDetails.jsx'
import not404 from '../components/Not404.jsx'
const routes = [
  {
    exact:true,
    path:'/',
    component:Home
  },{
    path:'/user',
    component:User
  },{
    path:'/news',
    component:News,
    children:[
      {
        exact:true,
        path:'/news/',
        component:NewIndex
      },
      {
        path:'/news/newDetails/:id',
        component:NewDetails
      }
    ]
  },{
    path:'*',
    component:not404
  }
];

export default routes;