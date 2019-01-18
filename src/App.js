import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title: 'App title'
      }

      this.onClick = this.onClick.bind(this);
    }
    

    onClick() {
        this.setState({
            title: "new app title"
        })
    }

  render() {

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click Here</div>
      </div>
    );
  }
}

export default App;
