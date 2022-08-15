import LandingPage from "./components/landingPage";
import Template from "./components/template";
import Header from "./components/header";
import About from "./components/about"
import Register from  "./components/register"
import Signin from "./components/signin"
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/template" exact><Template></Template> </Route>
      <Route path="/about" exact> <About></About> </Route>
      <Route path="/register" exact><Register></Register> </Route>
      <Route path="/signin" exact> <Signin></Signin></Route>
      <Route path="/" exect ><LandingPage></LandingPage>  </Route>
    </Switch>
    </>
  );
}

export default App;
