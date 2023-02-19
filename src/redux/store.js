import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import authReducer from './auth/auth.reducer';


const reducer = combineReducers({
    auth: authReducer,
    // users: usersReducer,
    // plantes: planetsReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
//esto es un almacén para utilizarlo en el index.js a través de un provider

export default store;

//esto depende de las acciones 