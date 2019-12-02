import {checkDevelop, debugLog} from '../common'


import {
  UPDATE_IS_SEARCHING,
  UPDATE_FILTER_TEXT,
  UPDATE_FOUND_NUMBER
} from './ActionType'

import all_api_manifest from '../api_catalogue/all_api_manifest.json'
import all_api_manifest_99 from '../api_catalogue/all_api_manifest_99.json'

const initState = {
  posts: '',
  api_dictionary: (checkDevelop() ? all_api_manifest_99: all_api_manifest),
  found_api_number: 0,
  search_string:"",
  search_array:[],
  isSearching: false
}

const updateIsSearching = (state, action) => {
  let is_searching = state.search_string.length > 0
  debugLog('updateIsSearching', is_searching)
  return {
    ...state,
    isSearching: is_searching
  }

}

const rootReducer = ( state = initState, action ) => {
  debugLog('rootreducer', action.type)

  switch (action.type) {
    case UPDATE_FILTER_TEXT:
      updateIsSearching(state, action)

      return {
        ...state,
        posts: action.text,
        search_string: action.text,
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