const initialState = {
    category: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_CATEGORY_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_CATEGORY_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_CATEGORY_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          category: action.payload.data.results
        }
      }
      default : {
        return state
      }
    }
  }