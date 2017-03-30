import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/formActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      email: ''
    };
  }
  handleChange(e, value) {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(){
    console.log('INSidE Component!', this.state)
    this.props.actions.saveData(this.state);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input id='name' onChange={this.handleChange}/>
          <input id='email' onChange={this.handleChange}/>
        </p>
        <button onClick={this.handleSubmit} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { actions: bindActionCreators(ActionCreators, dispatch) };
}

function mapStateToProps(state){
  return { form: state.form };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
