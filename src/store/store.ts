import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

import cardReducer from "./card/card.slice";
import userReducer from "./user/user.slice";
import directoryReducer from "./directory/directory.slice";
import collectionReducer from "./collection/collection.slice";

const reducers = {
  user: userReducer,
  card: cardReducer,
  directory: directoryReducer,
  collection: collectionReducer,
};

const middlewares = [loggerMiddleware, thunkMiddleware];
const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
