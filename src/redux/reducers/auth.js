const initialState = {
  isLogin: false,
  isError: false,
  errorMsg: '',
  token: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'AUTH_USER_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'AUTH_USER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Wrong email or password'
      }
    }
    case 'AUTH_USER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        token: action.payload.data.token
        // data: action.payload.data
      }
    }
    case 'LOGOUT_USER':{
      return{
        isLogin:false,
        isError:false,
        token: '',
        alertMsg: 'Logout Successfully'
      }
    }
    case 'SET_TOKEN':{
      return{
        ...state,
        isLogin:true,
        token:action.payload.data.token
      }
    }
    default : {
      return state
    }
  }
}