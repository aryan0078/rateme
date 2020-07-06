import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
  	<div>
  	 <Login />
     <Router>
     <Route path="/" component={Home} />
    </Router>
    </div>
  );
}


export default App;
