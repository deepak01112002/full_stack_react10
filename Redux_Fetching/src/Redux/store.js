import { legacy_createStore,combineReducers } from "redux";
import { reducer } from "./productReducer/reducer";
import { loginReducer } from "./LoginReducer/LoginReducer";

const MainReducer = combineReducers({
    reducer,
    loginReducer
})

export const store  = legacy_createStore(MainReducer)