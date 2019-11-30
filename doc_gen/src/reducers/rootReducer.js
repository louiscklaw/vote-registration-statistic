
const initState = {
  posts: ''
}

const rootReducer = ( state = initState, action ) => {
  if (action.type=="update_text"){
    return {
      ...state,
      posts: action.text
    }
  }

  return state
}

export default rootReducer