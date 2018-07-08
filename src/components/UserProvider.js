import React, { Component } from "react";
import { UserContext } from "components/UserContext";

export default class UserProvider extends Component {
  state = {
    id: "123",
    name: "John",
    email: "john@email.com"
  };

  logout = () => this.setState({ id: "", name: "", email: "" });

  render() {
    return (
      <UserContext.Provider value={{ user: this.state, logout: this.logout }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
