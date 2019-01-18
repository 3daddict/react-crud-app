import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "Initial Name",
        title: "Initial Title"
      }

      this.onClick = this.onClick.bind(this);
    }
    

    onClick() {
        this.setState({
            name: 'New App Name',
            title: "New App Title"
        })
    }

  render() {

    return (
      <div className="App">
        <MyComponent 
            name={this.state.name}
            title={this.state.title}
            onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
