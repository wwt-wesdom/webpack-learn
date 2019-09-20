"use strict";
import React from "react";
import ReactDOM from "react-dom";
import "../../commons"
import girl from "./images/girl.jpg";
import "./search.less"
class Index extends React.Component{
  constructor() {
    super(...arguments);
    this.state = {
      Text: null
    }
  }
  loadComponent() {
    import("./text.js").then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }
  render() {
    const { Text } = this.state;
    return <div className="search-text">
      {
        Text ? <Text/> : null
      }
      Search Text
      <div className="child">child</div>
      <img src={ girl } onClick={this.loadComponent.bind(this)} alt=""/>
    </div>;
  }
}
ReactDOM.render(
    <Index/>,
    document.getElementById("root")
);