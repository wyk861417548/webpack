import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
export default class News extends Component {
  render() {
    // console.log("this",this);
    let router = this.props.data;
    return (
      <div className="nav_l">
        <ul className="nav_l_lsit">
          <li><NavLink to="/news/newDetails/111">11</NavLink></li>
          <li><NavLink to="/news/newDetails/222">22</NavLink></li>
          <li><NavLink to="/news/newDetails/333">33</NavLink></li>
          <li><NavLink to="/news/newDetails/nihao">44</NavLink></li>
        </ul>
        <div className="nav_r">
         
          {router.length > 0 && router.map((item,index)=>{
            return (
              <Route key={index} {...item}></Route>
            )
          })}
        </div>
      </div>
    )
  }
}
