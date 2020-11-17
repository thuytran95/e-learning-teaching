import React, { Component, PureComponent } from "react";

class Child extends PureComponent {
  componentWillReceiveProps() {
    //   sử dụng khi cần kiểm tra props cũ và props ms
    console.log("componentWillReceiveProps");
  }

  //   shouldComponentUpdate(nextProps) {
  //     // console.log("shouldComponentUpdate");
  //     if (this.props.a !== nextProps.a) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   will bot hết trong es7
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  render() {
    console.log("render");
    return <div>Child Component</div>;
  }

  componentDidUpdate(preProps) {
    console.log("componentDidUpdate");
  }
}

export default Child;
