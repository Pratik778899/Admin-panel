import { createStore } from "@reduxjs/toolkit";
import { RootReducer } from "./Reducer/RootReducer";

export const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
