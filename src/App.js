import React, { Component } from 'react'
import router from './router/index.jsx'
import {BrowserRouter,Route,NavLink,Switch,HashRouter} from 'react-router-dom';
import './static/css/index.css'
  /*
    HashRouter 或 BrowserRouter :路由基本
    Route : 控制路由显示对应的组件
    exact:精准匹配
    Switch:用来包裹Route，它里面不能放其他html元素，用来只显示一个路由
  */
export default class App extends Component {
  state={
    arr:[]
  }
  getData = ()=>{
    let arr = [
      {
        to:'/',
        con:'首页'
      },{
        to:'/user',
        con:'用户中心'
      },{
        to:'/news',
        con:'新闻页面'
      }
    ]
    this.setState({arr})
  }
  componentDidMount(){
    this.getData();
  }
  render() {

    return (
      <BrowserRouter>
        <div className="header">
          {/* <NavLink exact to='/' activeClassName='hover'>首页</NavLink>
          <NavLink to='/new' activeClassName='hover'>新闻页面</NavLink>
          <NavLink to='/user' activeClassName='hover'>用户中心</NavLink> */}
          {
            this.state.arr.length > 0 && (
              this.state.arr.map((item,index)=>{
                return (
                <NavLink key={index} {...item} >{item.con}</NavLink>
                )
              })
            )
          }

        </div>
        <hr/>
        <Switch>
          {/* <Route exact path='/' component={Home}></Route>
          <Route path='/new' component={News}></Route>
          <Route path='/user' component={User}></Route>
          <Route component={Not404}></Route> */}

          {
            // console.log("rrrrrr",router)
            router.map((item,index)=>{
              // console.log("xxxxxxxx",index,item.path,item.component)
              if(item.exact){
                return (
                  <Route exact={item.exact} key={index} path={item.path} component={item.component}></Route>
                )
              }else{
                return (
                  <Route key={index} path={item.path} 
                    //路由嵌套父子组件传值
                    render = {
                      (props)=>{
                        console.log("props",props)
                        return <item.component data={item.children}></item.component>
                      }
                    }
                  
                  ></Route>
                )
              }
              
            })
          }
        </Switch>
        
      </BrowserRouter>
    )
  }
}

