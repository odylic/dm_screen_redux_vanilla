import React, { Component } from "react";
import "../App.scss";
import store from "../redux/store/store";
import { Provider } from "react-redux";
import MainContainer from "../redux/containers/MainContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}

export default App;
