import React, { Component } from 'react'

export default class NewDetails extends Component {
  render() {
    const id = this.props.match.params.id; 
    // console.log("id",id);
    return (
      <div>
        我是新闻详情界面{id}
      </div>
    )
  }
}
