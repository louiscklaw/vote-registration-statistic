
import {
  UPDATE_IS_SEARCHING,
  UPDATE_FILTER_TEXT,
  UPDATE_FOUND_NUMBER
} from './ActionType'

import all_api_manifest from '../api_catalogue/all_api_manifest_9.json'

const initState = {
  posts: '',
  filters: [],
  api_dictionary: all_api_manifest,
  found_api_number: 0,
  isSearching: false
}

const updateIsSearching = (state, action) => {
  return {
    ...state,
    isSearching: action.is_searching
  }
}

const rootReducer = ( state = initState, action ) => {
  switch (action.type) {
    case UPDATE_FILTER_TEXT:
      return {
        ...state,
        posts: action.text,
        filters: action.text,
      }

    case UPDATE_IS_SEARCHING:
      return updateIsSearching(state, action)

    case UPDATE_FOUND_NUMBER:
      return {
        ...state,
        found_api_number: action.found_num_in
      }

    default:
      break
  }


  return state
}

export default rootReducer