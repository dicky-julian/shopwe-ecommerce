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
          auth: action.payload[0]
        };

      case 'LOGOUT':
        return {
          ...state,
          auth: {},
        };

      case 'UPDATE_USER':
        return {
          ...state,
          auth: {
            ...state.auth,
            ...action.payload
          }
        }
      default:
        return state;
    }
  };
  
  export default auth;