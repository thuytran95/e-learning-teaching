import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      state1: 1,
      state2: 1,
    };
  }
  componentWillMount() {
    console.log("componetWillMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        Parent component
        {/* state 1 thay dổi thì child cần phải render lại */}
        <Child a={this.state.state1} />
        <button
          onClick={() => this.setState({ state1: this.state.state1 + 1 })}
        >
          Change State 1: {this.state.state1}
        </button>
        {/* khi state 2 thay dổi thì  child cũng ko cần phải render lại */}
        <button
          onClick={() => this.setState({ state2: this.state.state2 + 1 })}
        >
          Change State 1: {this.state.state2}
        </button>
      </div>
    );
  }

  componentDidMount() {
    // thực hiện viết hàm logic muốn thực hiên ở đây: fetchdata
    console.log("componentDidMount");
  }
}

export default Parent;
