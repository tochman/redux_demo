import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const DisplayMessage = (props = {timeout: 10000}) => {
  const timeout = props.timeout
  useEffect(() => {
    setTimeout(() => {
      props.dispatch({ type: 'RESET_MESSAGE'})
    }, timeout)
  }, [props.message])
  return (
    <h1>{props.message}</h1>
  )
}



const mapStateToProps = state => {
  return {
    message: state.message
  }
}
export default connect(mapStateToProps)(DisplayMessage)
