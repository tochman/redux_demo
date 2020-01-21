import React, { Component } from 'react';
import ChangeMessageForm from './ChangeMessageForm'
import DisplayMessage from './DisplayMessage'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      this.props.dispatch({ type: 'SET_GEOLOCATION', payload: coords })
    })
  }


  render() {
    return (
      <>
        <DisplayMessage timeout={5000} />
        <ChangeMessageForm />
        {/* <button
          onClick={() => this.props.changeMessage('Hello Venus')}
        >Change message
        </button>
         */}
      </>
    );
  }
}


// const mapDispatchToProps = dispatch => {
//   return {
//     resetMessage: () => { dispatch({ type: 'RESET_MESSAGE' }) },
//     changeMessage: message => { dispatch({ type: 'CHANGE_MESSAGE', payload: message }) }
//   }
// }

// export default connect(null, mapDispatchToProps)(App);

export default connect()(App)
