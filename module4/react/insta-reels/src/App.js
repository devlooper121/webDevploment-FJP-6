// npm install react-router-dom@5.3.1

import Error from "./Components/Error";
import Profile from "./Components/Profile";
import Feed from "./Components/Feed";
import ForgetPassword from "./Components/ForgetPassword";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import {Switch, Route} from "react-router-dom"

// for all page, user login and all global user controls
import { AuthContextProvider } from "./Context/AuthContext";


function App() {
  return (
    <AuthContextProvider>
    <Switch>
      <Route path="/feed">
        <Feed></Feed>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <Signup></Signup> 
      </Route>
      <Route path="/profile">
        <Profile></Profile>
      </Route>
      <Route path="/forget">
        <ForgetPassword></ForgetPassword>
      </Route>
      <Error></Error>
    </Switch>
    </AuthContextProvider>
  );
}

export default App;
