import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";

import cardReducer from "./card/card.slice";
import userReducer from "./user/user.slice";
import directoryReducer from "./directory/directory.slice";
import collectionReducer from "./collection/collection.slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
  card: cardReducer,
  directory: directoryReducer,
  collection: collectionReducer,
});

let middlewares = [thunkMiddleware as ThunkMiddleware];

if (process.env.NODE_ENV === "development")
  middlewares = [...middlewares, loggerMiddleware];

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "card"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: middlewares,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
