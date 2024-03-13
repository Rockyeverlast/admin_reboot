import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import fetchScreen from "./slice/fetchScreen";

const rootReducer = combineReducers({
    screen: fetchScreen,
  });

  
export const store = configureStore({
    reducer: rootReducer
  });