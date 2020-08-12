const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    auth: {},
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {

      case 'LOGIN':
        return {
          ...state,
          auth: action.payload
        };

      case 'LOGOUT':
        return {
          ...state,
          auth: {},
        };
      default:
        return state;
    }
  };
  
  export default auth;