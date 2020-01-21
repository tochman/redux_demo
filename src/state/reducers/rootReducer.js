import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_MESSAGE') {
    return {
      ...state,
      message: action.payload
    }
  } else if (action.type === 'RESET_MESSAGE') {
    return initialState
  } else if (action.type === 'SET_GEOLOCATION') {
    debugger
    return {
      ...state,
      coords: action.payload
    }
  }

  else {
    return state
  }

}

export default rootReducer