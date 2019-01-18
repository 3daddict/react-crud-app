import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      this.onSubmit = this.onSubmit.bind(this);
    }
    

    onClick() {
        console.log('Clicked');
    }

    onChange(event) {
        console.log(event.target.value)
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('Event Submitted: ', this.input.value);
    }

  render() {
      const list = [
          'Item 1',
          'Item 2',
          'Item 3'
      ]
    return (
      <div className="App">
        <h1>{
            list.map((item) => {
                return (
                    <div key={item} onClick={this.onClick} >
                        {item}
                    </div>
                )
            })
        }</h1>
        
        <form onSubmit={this.onSubmit}>
            <input type="text" onChange={this.onChange} ref={input => this.input = input} />
        </form>
      </div>
    );
  }
}

export default App;
