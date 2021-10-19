import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers/reducerIndex'



export default createStore(reducers, composeWithDevTools());