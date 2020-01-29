import initialState from '../store/initialState'
import convertToDMS from '../../services/convertToDMS'

const rootReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_MESSAGE') {
    return {
      ...state,
      message: action.payload
    }
  } else if (action.type === 'RESET_MESSAGE') {
    return initialState
  } else if (action.type === 'SET_LOCATION') {
    let {components, geometry} = action.payload
    let dms = convertToDMS(geometry)
    return {
      ...state,
      location: {...components, ...geometry, dms: dms}
    }
  }

  else {
    return state
  }

}

export default rootReducer