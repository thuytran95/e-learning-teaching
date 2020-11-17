import React, { Component } from "react";
import "./App.css";
import SignupScreen from "./Screen/Signup";
import HomeScreen from "./Screen/Home";
import DetailScreen from "./Screen/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import SignInScreen from "./Screen/Signin";
import Parent from "./lifeCycle/parent";
{
  /* Muốn sử dụng cơ chế routing thì phải install react-router-dom
  co chế của switch mỗi lần chỉ cho truy cập vào 1 dường link, tuy nhiên route / phải dể dưới cùng sau khi nó check các route khác */
}
class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <Header />
      //   <Switch>
      //     <Route path="/signup">
      //       <SignupScreen />
      //     </Route>
      //     <Route path="/signin" component={SignInScreen} />
      //     {/* bắt buộc có dấu : số bất kfi sau detai: nếu ko có dấu : nó sẽ phải hiện đúng chứ courseId ms tới trang detail
      //   có dấu : nó sẽ hiểu là mã của khóa học tương ứng */}
      //     {/* co 2 cách viết Route: 1 là dùng component- như Detail, c2: viết cp giữa 2 tag Route */}
      //     <Route
      //       value={this.props}
      //       path="/detail/:courseId"
      //       component={DetailScreen}
      //     />

      //     <Route path="/">
      //       <HomeScreen />
      //     </Route>
      //   </Switch>
      // </BrowserRouter>
      <Parent />
    );
  }
}

export default App;
