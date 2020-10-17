const initialState = {
    dataPopular: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_DATA_POPULAR_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_DATA_POPULAR_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_DATA_POPULAR_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          dataPopular: action.payload.data.results
        }
      }
      default : {
        return state
      }
    }
  }