import React from 'react';
import Navbar from './components/navbar';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (

    <div>
      {/* <Router> */}

      <Navbar />
      <Route path='/' exact component={Home} />
      {/* <Switch>
          <Route path='/' exact />
        </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
