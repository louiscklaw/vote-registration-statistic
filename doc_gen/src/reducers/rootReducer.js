
import {UPDATE_FILTER_TEXT} from './ActionType'

const initState = {
  posts: ''
}

const rootReducer = ( state = initState, action ) => {
  console.log(action.type)
  if (action.type === UPDATE_FILTER_TEXT){
    return {
      ...state,
      posts: action.text
    }
  }

  return state
}

export default rootReducer