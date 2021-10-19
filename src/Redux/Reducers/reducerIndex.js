import { combineReducers } from 'redux';
import saludo from './saludo'
import counter from './counter';



export default combineReducers({
    saludo,
    counter
  },)