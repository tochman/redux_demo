import React, { Component } from 'react';

class App extends Component {
  state = {
    message: "Hello World from Component State"
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
      </>
    );
  }
}

export default App;