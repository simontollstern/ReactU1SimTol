import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

// The root of the site of which components are rendered in
class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
