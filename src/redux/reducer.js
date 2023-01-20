const initialState = {
    posts: []
  }
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_POSTS':
          return {...state, posts: action.payload }
        case 'ADD_POST':
          return {...state, posts: [ ...state.posts,action.payload] }
        case 'DELETE_POST':
          return {...state, posts: state.posts.filter((post) =>  post.id !== action.payload) }
        default:
          return state
  
    }
  }

export default reducer;