import React, { Component, Fragment } from "react";
import { Toggle } from "components/utilities";
import { Modal } from "components/elements";
import UserProvider from "components/UserProvider";
import Drag from "components/Drag";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <Drag />
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Some modal text</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;
