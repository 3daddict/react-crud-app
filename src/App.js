import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        checked: true
      }

      this.updateCheck = this.updateCheck.bind(this);
    }
    

    updateCheck() {
        this.setState({
            checked: !this.state.checked
        })
    }

  render() {

    return (
      <div className="App">
        <input 
        type="checkbox"
        onChange={this.updateCheck}
        checked={this.state.checked} 
        />
      </div>
    );
  }
}

export default App;
