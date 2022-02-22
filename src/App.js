import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Discrpition from "./Discrpition";
import logo from "./logo.png";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchValue: "",
      selectedCharecter: {}
    };
  }

  search = (event) => {
    this.setState(
      {
        searchValue: event.target.value
      },
      () => {
        if (event.target.value !== "") {
          axios
            .get(
              `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${event.target.value}&ts=1&apikey=2c1f70f24581ac39d06983f4164f06b1&hash=9af082db6a92a668f2b6054bd0b79619`
            )
            .then((res) => {
              this.setState({ characters: res.data.data.results });
            });
        } else {
          this.setState({ characters: [] });
        }
      }
    );
  };

  test = (character) => {
    this.setState({ selectedCharecter: character });
  };

  reset = () => {
    this.setState({ selectedCharecter: {} });
  };

  render() {
    return (
      <>
        {!Object.keys(this.state.selectedCharecter).length ? (
          <div className="contanor">
            <img src={logo} className="logo" />
            <div className="discription">
              For full details on Marvel characters search the character below
            </div>
            <input
              type="text"
              placeholder="Search here to select from the dropdown...."
              className="inputDiv"
              value={this.state.searchValue}
              onChange={this.search}
            ></input>
            {this.state.characters.length ? (
              <div className="dropDown">
                {this.state.characters.map((character) => {
                  return (
                    <div onClick={() => this.test(character)}>
                      {character.name}
                    </div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <Discrpition
            character={this.state.selectedCharecter}
            reset={this.reset}
          />
        )}
      </>
    );
  }
}
