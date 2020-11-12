import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import NewDetails  from './NewDetails.jsx'
export default class News extends Component {
  render() {
    return (
      <div className="nav_l">
        <ul className="nav_l_lsit">
          <li><NavLink to="/new/newDetails/111">11</NavLink></li>
          <li><NavLink to="/new/newDetails/222">22</NavLink></li>
          <li><NavLink to="/new/newDetails/333">33</NavLink></li>
          <li><NavLink to="/new/newDetails/444">44</NavLink></li>
        </ul>
        <div className="nav_r">
          <Route path="/new/newDetails/:id" component={NewDetails}></Route>
        </div>
      </div>
    )
  }
}
