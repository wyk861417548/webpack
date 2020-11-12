import React, { Component } from 'react'
import Home from './components/Home.jsx';
import News from './components/News.jsx';
import User from './components/User.jsx';

import Not404 from './components/Not404.jsx';
import {BrowserRouter,Route,NavLink,Switch,HashRouter} from 'react-router-dom';
import './static/css/index.css'
  /*
    HashRouter
    BrowserRouter
    exact:精准匹配
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
        to:'/new',
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
            // console.log("this",this.state.arr)
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
          <Route exact path='/' component={Home}></Route>
          <Route path='/new' component={News}></Route>
          <Route path='/user' component={User}></Route>
          <Route component={Not404}></Route>
        </Switch>
        
      </BrowserRouter>
    )
  }
}

