import React, {Component} from 'react';
import Home from './screens/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Profile from './screens/profile'
function App() {
  return (
    <Router>
     <Route exact npath="/login" component={Login} />
     <Route exact npath="/profile" component={Profile} />
     <Route exact path="/signup" component={Signup} />
     <Route  exact path="/" component={Home} />
   
   
    </Router>  
  );
}


export default App;
