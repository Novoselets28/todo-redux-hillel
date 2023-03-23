import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Components/Reducers/reducer";

const store = configureStore({ reducer });

export default store;