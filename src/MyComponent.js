import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component {
  render() {
    const { title, name, onClick } = this.props;

    return (
      <div className="component">
        <h1>Title: {title}</h1>
        <h2>Name: {name}</h2>
        <div onClick={onClick} >Click Me 2</div>
      </div>
    );
  }
}

export default MyComponent;
