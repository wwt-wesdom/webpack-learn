"use strict";
import React from "react";
import ReactDOM from "react-dom";
import "../../commons"
import girl from "./images/girl.jpg";
import "./search.less"
class Index extends React.Component{
  render() {
    return <div className="search-text">
      Search Text
      <div className="child">child</div>
      <img src={ girl } alt=""/>
    </div>;
  }
}
ReactDOM.render(
    <Index/>,
    document.getElementById("root")
);