import React, { Component } from "react";

export default class MonsterContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, hp, set_amount } = this.props;

    const resetInput = (e) => {
      e.target.placeholder = "";
    };

    const resetValue = (e) => {
      e.target.value = "";
    };

    const setHp = () => {
      dispatch(getId(id.id));
    };

    return (
      <div>
        <h1>{hp}</h1>
        <input
          placeholder="enter monster name"
          onFocus={(e) => resetInput(e)}
        ></input>
        <br></br>
        <input
          placeholder="set monster hp"
          onFocus={(e) => {
            resetInput(e);
            resetValue(e);
          }}
          onChange={(e) => {
            console.log(hp)
            set_amount({ hp: e.target.value, id: id });
          }}
        ></input>
      </div>
    );
  }
}
