import React, {Component} from 'react';
import Home from './screens/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './screens/Login'
import Signup from './screens/Signup'
function App() {
  return (
    <Router>
     <Route exact npath="/login" component={Login} />
     <Route exact path="/signup" component={Signup} />
    <Route  exact path="/" component={Home} />
   
   
    </Router>  
  );
}


export default App;
