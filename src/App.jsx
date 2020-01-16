import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <>
        <h1>{this.props.message}</h1>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(App);