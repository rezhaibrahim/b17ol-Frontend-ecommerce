const initialState = {
    dataNew: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_DATA_NEW_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_DATA_NEW_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_DATA_NEW_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          dataNew: action.payload.data.results
        }
      }
      default : {
        return state
      }
    }
  }