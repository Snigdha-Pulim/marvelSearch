import React, { Component } from "react";
import "./disvrpition.css";
import logo from "./logo.png";

export default class Discrpition extends Component {
  render() {
    return (
      <>
        <div className="topBar">
          <button onClick={this.props.reset} className="backLogoButton">
            <img src={logo} className="backLogo"/>
          </button>
        </div>
        <div className="container">
          <div className="row">
            <img
              src={
                this.props.character.thumbnail.path +
                "." +
                this.props.character.thumbnail.extension
              }
              alt="error"
              className="thumbnail col-3"
            />
            <div className="col">
              <h4>{this.props.character.name}</h4>
              <br></br>
              <div className="row">
                <div className="col-3">LINKS TO</div>
                <div className="col">
                  {this.props.character.urls.map((url) => {
                    return (
                      <>
                        <a href={url.url} target="_blank">
                          {url.type}
                        </a>
                        <br></br>
                      </>
                    );
                  })}
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                  Series ({this.props.character.series.available}):
                </div>
                <div className="col series">
                  {this.props.character.series.items.map((url) => {
                    return <div className="mb-1">{url.name}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <button className="backButton" onClick={this.props.reset}>
          Back to Search
        </button>
      </>
    );
  }
}
