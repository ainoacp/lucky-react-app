import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import authReducer from './auth/auth.reducer';


const reducer = combineReducers({
    auth: authReducer,
    // characters: charactersReducer,
    // plantes: planetsReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;