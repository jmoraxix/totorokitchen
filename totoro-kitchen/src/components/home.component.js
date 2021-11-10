import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Home extends Component {

  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        Bienvenidos
      </div>
    );
  }
}