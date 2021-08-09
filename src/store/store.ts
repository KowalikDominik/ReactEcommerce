import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

import cardReducer from "./card/card.slice";
import userReducer from "./user/user.slice";

const reducers = {
  user: userReducer,
  card: cardReducer,
};

const middlewares = [loggerMiddleware, thunkMiddleware];
const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
