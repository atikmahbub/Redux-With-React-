import {createStore,combineReducers,applyMiddleware} from 'redux';
import math from './Reducers/mathReducer';
import user from './Reducers/userReducer';

const myLogger = (store) => (next) => (action)=>{
   console.log("My Logger", action);
   next(action);
}
const store = createStore(combineReducers
	({math ,
	  user
	}) ,
	 {} , 
	 applyMiddleware(myLogger)
	 );

export default store;