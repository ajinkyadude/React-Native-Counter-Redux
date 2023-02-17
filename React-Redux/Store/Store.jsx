import { createStore } from "redux";
import { mainReducer } from "../Reducer/Reducer";

export const store=createStore(mainReducer);