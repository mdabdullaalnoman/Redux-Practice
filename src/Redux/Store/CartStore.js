import { createStore } from "redux";
import cartReducer from "../Reduceers/CartReducers";

export const store = createStore(cartReducer);