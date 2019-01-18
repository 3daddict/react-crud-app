import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

const propTypes = {
    name: PropTypes.string.isRequired,
    onClicked: PropTypes.func,
    title: PropTypes.string.isRequired
};

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

MyComponent.propTypes = propTypes;

export default MyComponent;
