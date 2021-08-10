import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import MonsterContainer from "./MonsterContainer";

const containerStyle = {
  display: "flex",
};
const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

// mapped State to props from
// reducers/index.js === state.counter
// counterReducer === .count
const mapStateToProps = (state) => ({
  count: state.counter.count,
  monsterList: state.monster.monsterList,
});

// will get actions from actions.js
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
  add_monster: (monster) => dispatch(actions.add_monster(monster)),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // destructured from State and Dispatch to props
    const { count, monsterList, increment, decrement, add_monster } =
      this.props;

    return (
      <div>
        MainContainer
        <h1>{count}</h1>
        <div style={containerStyle}>
          <button style={buttonStyle} onClick={decrement}>
            -
          </button>
          <button style={buttonStyle} onClick={increment}>
            +
          </button>
        </div>
        <button onClick={add_monster}>Add Monster</button>
        <br></br>
        <div>
          {monsterList.map((monster) => {
            return (
              <MonsterContainer
                key={monster.id}
                id={monster.id}
                hp={monster.hp}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
