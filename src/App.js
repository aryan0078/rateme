import React from 'react';
import Home from './screens/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './screens/Login'
import Signup from './screens/Signup'
function App() {
  return (
    <Router>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Router>
  );
}

export default App;
