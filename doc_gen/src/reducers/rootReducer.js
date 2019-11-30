
import {UPDATE_FILTER_TEXT} from './ActionType'

import all_api_manifest from '../api_catalogue/all_api_manifest_9.json'

const initState = {
  posts: '',
  api_dictionary: all_api_manifest
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