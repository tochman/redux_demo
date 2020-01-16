import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {

  changeMessage = event => {
    event.preventDefault()
    let newMessage = event.target.newMessage.value
    event.target.newMessage.value = ''
    this.props.changeMessage(newMessage)
  }

  render() {
    return (
      <>
        <h1>{this.props.message}</h1>
        <form onSubmit={this.changeMessage}>
          <input type="text" name="newMessage" placeholder="Type a message" />
          <input type="submit" value="Change message" />
        </form>
        <button
          onClick={() => this.props.changeMessage('Hello Venus')}
        >Change message
        </button>
        <button
          onClick={() => this.props.resetMessage()}
        >Reset
        </button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetMessage: () => { dispatch({ type: 'RESET_MESSAGE' }) },
    changeMessage: message => { dispatch({ type: 'CHANGE_MESSAGE', payload: message }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App