import { combineReducers } from 'redux';
import userReducer from './reducers/useReducer';
import useSystem from './reducers/useSystem';
import useVendas from './reducers/useVendas';

export default combineReducers({
    user:userReducer,
    system:useSystem,
    vendas:useVendas,
});