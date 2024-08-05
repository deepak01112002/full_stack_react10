import { legacy_createStore,applyMiddleware } from "redux";
import { productReducer } from "./productReducer/productReducer";
import {thunk} from 'redux-thunk'
import { FetchData } from "./productReducer/action";



export const store = legacy_createStore(productReducer,applyMiddleware(thunk))