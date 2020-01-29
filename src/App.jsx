import React, { Component } from 'react';
import ChangeMessageForm from './ChangeMessageForm'
import DisplayMessage from './DisplayMessage'
import { connect } from 'react-redux'
import openCageWrapper from './services/openCageWrapper'
import { withTranslation } from 'react-i18next';


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

  changeLanguage (event) {
    this.props.i18n.changeLanguage(event.target.name)
  }

  render() {
    const { t } = this.props;
    // debugger

    return (
      <>
        {this.props.location &&
          <div id="location-display">
            <h1>{t('messages.helloMessage')} {this.props.location.city || this.props.location.town}</h1>
            <p>{t('messages.sailingMessage')} {this.props.location.dms}</p>
            <button name='sv' onClick={this.changeLanguage.bind(this)}>Swedish</button>
            <button name='en' onClick={this.changeLanguage.bind(this)}>English</button>
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

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default withTranslation()(ConnectedApp);
// export default App
