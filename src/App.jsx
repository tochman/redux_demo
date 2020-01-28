import React, { Component } from 'react';
import { connect } from 'react-redux'
import openCageWrapper from './services/openCageWrapper'

class App extends Component {

  componentDidMount() {
    this.getLocation()
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(async position => {
      let location = await openCageWrapper(position.coords.latitude, position.coords.longitude)
      this.props.setLocation(location)
    })
  }


  changeMessage = event => {
    event.preventDefault()
    let newMessage = event.target.newMessage.value
    event.target.newMessage.value = ''
    this.props.changeMessage(newMessage)
  }

  render() {
    return (
      <>
        {this.props.location &&
          <div id="location-display">
            <h1>Hello visitor from {this.props.location.city || this.props.location.town}</h1>
            <p>You are sailing at {this.props.location.dms}</p>
          </div>
        }

      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLocation: (location) => { dispatch({ type: 'SET_LOCATION', payload: location }) },
    resetMessage: () => { dispatch({ type: 'RESET_MESSAGE' }) },
    changeMessage: message => { dispatch({ type: 'CHANGE_MESSAGE', payload: message }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App