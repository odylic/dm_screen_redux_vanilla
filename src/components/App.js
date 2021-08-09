import React, { Component } from "react";
import "../App.scss";
import store from "../redux/store/store";
import { Provider } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">Test</div>
      </Provider>
    );
  }
}

export default App;
