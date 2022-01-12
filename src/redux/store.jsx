import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./phoneBook/rootReducer";

const store = configureStore({
  reducer: rootReducer,

});

export default store;
