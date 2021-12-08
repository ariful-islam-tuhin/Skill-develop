import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./compunents/About/About";
import Contuct from "./compunents/Contuct/Contuct";
import Footer from "./compunents/Footer/Footer";
import Header from "./compunents/Header/Header";
import Home from "./compunents/Home/Home";
import NotFound from "./compunents/NotFound/NotFound";
import AllService from "./compunents/AllService/AllService";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/allservice">
            <AllService></AllService>
          </Route>
          <Route path="/contuct">
            <Contuct></Contuct>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
