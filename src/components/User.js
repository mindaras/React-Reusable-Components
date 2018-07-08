import React, { Component, Fragment } from "react";
import { UserContext } from "components/UserContext";

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user: { name }, user: { email }, logout }) => (
          <Fragment>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <button onClick={logout}>Logout</button>
          </Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}
