import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {
  render() {
    return (<div>{this.props.title}</div>);
  }
}

ReactDOM.render(<Main title="Hello World"/>, document.getElementById('root'));
