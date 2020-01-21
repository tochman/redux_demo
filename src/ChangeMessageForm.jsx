import React from 'react'
import { connect } from 'react-redux'

const ChangeMessageForm = (props) => {

  const changeMessage = event => {
    event.preventDefault()
    let newMessage = event.target.newMessage.value
    event.target.newMessage.value = ''
    props.changeMessage(newMessage)
  }
  return (
    <>
      <form onSubmit={changeMessage}>
        <input type="text" name="newMessage" placeholder="Type a message" />
        <input type="submit" value="Change message" />
      </form>

      <button
        onClick={() => props.resetMessage()}
      >Reset
      </button>
    </>
  )
}

const madDispatchToProps = dispatch => {
  return {
    resetMessage: () => { dispatch({ type: 'RESET_MESSAGE' }) },
    changeMessage: message => { dispatch({ type: 'CHANGE_MESSAGE', payload: message }) }
  }
}
export default connect(null, madDispatchToProps)(ChangeMessageForm)
