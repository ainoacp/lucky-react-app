const INITIAL_STATE = {
  user: null,
  token: null,
  error: null,
  isLoading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "login_user":
      return { ...state, isLoading: true }; 
    case "login_user_ok":
      return {
        ...state,
        isLoading: false,
        user: action.payload.myUser,
        token: action.payload.token,
      };
    case "login_user_ko":
      return { ...state, isLoading: false, error: action.payload };

    case "register_user":
      return { ...state, isLoading: true };
    case "register_user_ok":
      return { ...state, isLoading: false };
    case "register_user_ko":
      return { ...state, isLoading: false, error: action.payload };

    case "checksession_user":
      return { ...state, isLoading: true };
    case "checksession_user_ok":
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "checksession_user_ko":
      return { ...state, isLoading: false, error: action.payload };

    case "logout_user":
      return { ...state, isLoading: true };
    case "logout_user_ok":
      return {...INITIAL_STATE};
    case "logout_user_ko":
      return { ...state, isLoading: false, error: action.payload };

    case "register_fav":
      return { ...state, isLoading: true};
    case "register_fav_ok":
      return { 
        ...state, 
        isLoading: false,
        user: action.payload,  
      }
    case "register_fav_ko":
      return { ...state, isLoading: false, error: action.payload };

    case "register_adoption":
      return { ...state, isLoading: true};
    case "register_adoption_ok":
      return { 
        ...state, 
        isLoading: false,
        user: action.payload,  
      }
    case "register_adoption_ko":
      return { ...state, isLoading: false, error: action.payload };
      
    default: {
      return state;
    }
  }
};

export default authReducer;
