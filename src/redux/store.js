import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import CreateSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";

const sagaMiddleware = CreateSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

// sagaMiddleware.run();

export default store;
