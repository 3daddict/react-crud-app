import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

const propTypes = {
    name: PropTypes.string.isRequired,
    onClicked: PropTypes.func,
    title: PropTypes.string.isRequired
};

const defaultProps = {
    name: 'Default name of App'
}

class MyComponent extends Component {

    componentWillMount() {
        //Good place for AJAX or Axios Calls
        //Gets data before the component mounts
        console.log('Will Mount');
    }

    componentDidMount() {
        //Good place to focus a field after the component loads
        console.log('Did Mount');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('ComponentWillUpdate: ', this.props, this.state, nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ComponentDidUpdate: ', this.props, this.state, prevProps, prevState);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //allows a component to update or not via boolean
        return true;
    }


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
MyComponent.defaultProps = defaultProps;

export default MyComponent;
