import logo from "./logo.svg";
import "./App.css";
import SignupScreen from "./Screen/Signup";
import HomeScreen from "./Screen/Home";
import DetailScreen from "./Screen/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Layouts/Header";
{
  /* Muốn sử dụng cơ chế routing thì phải install react-router-dom
  co chế của switch mỗi lần chỉ cho truy cập vào 1 dường link, tuy nhiên route / phải dể dưới cùng sau khi nó check các route khác */
}
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/signup">
          <SignupScreen />
        </Route>
        <Route path="/detail">
          <DetailScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
