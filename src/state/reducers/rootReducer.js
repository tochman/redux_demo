import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_MESSAGE') {
    return {
      ...state,
      message: action.payload
    }
  } else if (action.type === 'RESET_MESSAGE') {
    return initialState
  } else {
    return state
  }

}

export default rootReducer