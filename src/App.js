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
    

    renderTitle() {
        if(!this.state.shouldRenderTitle) {
            return null
        }
        return <h1>Title</h1>
    }

  render() {

    return (
      <div className="App">
        {this.renderTitle()}
      </div>
    );
  }
}

export default App;
