import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        shouldRenderTitle: true
      }

    }

  render() {

    return (
      <div className="App">
        {
            this.state.shouldRenderTitle ? <h1>Title</h1> : null
        }
      </div>
    );
  }
}

export default App;
