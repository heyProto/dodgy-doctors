import React, { Component } from "react";
import { ReactComponent as Doc } from "./Doc.svg";
import { ReactComponent as Arrow } from "./arrow-right.svg";
import "./App.scss";
import DCard from "./DCard.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      level: 0,
      data: {},
      fetchingData: false,
      searchTerm: null,
      searchPlaceholder: "Search name"
    };

    this.goHome = this.goHome.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
    console.log(this.state)
  }

  goHome() {
    this.setState({
      level: 0,
      searchPlaceholder: "Search name"
    })
  }

  handleSubmit() {
    // if (this.state.fetchingData) {
      fetch("./data.json")
        .then(res => res.json())
        .then(data => this.setState({ data: data, fetchingData: false, level: 1, searchPlaceholder: "Next search" }));
    // }
    console.log(this.state)
  }

  render() {
    if (this.state.fetchingData) {
      return <div>Loading</div>;
    } else {
      let count = this.state.data.length;
      let data = this.state.data;
      return (
        <div className="App">
        <div className="container">
          <div className="title" onClick={this.goHome}>FARZI DOCTOR</div>
           <div className="result-cards">
            {this.state.level === 0 && (
            <div className="intro-card">
              <div className="content">
                <div className="header">
                  <div className="header__title">
                    Is Your Doctor Registered?
                  </div>
                  <div className="header__icon">
                    <Doc width="50px" />
                  </div>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="expand">Read more</div>
              </div>
            </div>
          )}
              {this.state.level === 1 && (data.map(e => (
                <DCard key={e.regNo} data={e} count={count} />
              )))}
            </div>
            <div className="search-container">
              <input className="search-input" key={this.state.level} name="searchTerm" placeholder={this.state.searchPlaceholder} onChange={this.handleChange}></input>
              <div className="search-submit" onClick={this.handleSubmit}><Arrow fill="white" width="16px" /></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
