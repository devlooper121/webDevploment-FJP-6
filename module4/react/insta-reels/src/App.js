// npm install react-router-dom@5.3.1

import Error from "./Components/Error";
import Profile from "./Components/Profile";
import Feed from "./Components/Feed";
import ForgetPassword from "./Components/ForgetPassword";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import {Switch, Route, Redirect} from "react-router-dom"

// for all page, user login and all global user controls
import { AuthContext, AuthContextProvider } from "./Context/AuthContext";
import { useContext } from "react";


function App() {
  return (
    <AuthContextProvider>
    <Switch>
      {/* <Route path="/feed">
        <Feed></Feed>
      </Route> */}
      
      <PrivateRoute path="/feed" comp = {Feed} ></PrivateRoute>
      {/* <Route path="/profile">
        <Profile></Profile>
      </Route> */}

      <PrivateRoute path="/profile" comp = {Profile} ></PrivateRoute>
      
      <RedirectToFeed path="/login" comp = {Login} ></RedirectToFeed>

      {/* <Route path="/login">
        <Login></Login>
      </Route> */}

      <RedirectToFeed path="/signup" comp={Signup} ></RedirectToFeed>

      {/* <Route path="/signup">
        <Signup></Signup> 
      </Route> */}

      <RedirectToFeed path="/forget" comp={ForgetPassword}></RedirectToFeed>
      
      {/* <Route path="/forget">
        <ForgetPassword></ForgetPassword>
      </Route> */}
      <Error></Error>
    </Switch>
    </AuthContextProvider>
  );
}
/**
 * PrivateRoute let only pass the routes if user is login
 * else we just forward to login
 */
function PrivateRoute(props){
  const Component = props.comp; // comp is defined by user wgich has the component name like Profile, Feed
  const cUser = useContext(AuthContext);
  return(
    // ...propes make sure every prop property is passed to whoever is selected
    <Route
    {...props} 
    render={
      (props)=>{
        console.log(props)
        return cUser!=null ? <Component {...props} > </Component> : <Redirect {...props} to="/login"></Redirect>
      }
    }>
    </Route>
  )
}

function RedirectToFeed(props){
  const cUser = useContext(AuthContext);
  const Component = props.comp;
  // cUser--> null ? login: send to feed
  return (
    <Route {...props} render={
      (props)=>{
        return cUser === null ? <Component {...props} ></Component> : <Redirect {...props} to="/feed" ></Redirect>
      }
    } ></Route>
  )
}

export default App;
