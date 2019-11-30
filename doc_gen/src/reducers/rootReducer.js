
import {UPDATE_FILTER_TEXT} from './const'

const initState = {
  filter_by_text: ''
}

const rootReducer = ( state = initState, action ) => {
  if ( action.type === UPDATE_FILTER_TEXT ) {
    return {
      ...state,
      filter_by_text: action.text
    }
  }

  return state
}

export default rootReducer