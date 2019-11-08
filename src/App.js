import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/Index';
import Form from './components/Form';
import Topics from './components/Topics';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <div className="MainContent">
      <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/diary' exact component={Form}/>
        <Route path='/notes' component={Topics}/>
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
