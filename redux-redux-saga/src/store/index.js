import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddlleware from "redux-saga";

import reducers from "./ducks";
import sagas from "./sagas";

import Reactotron from "../ReactotronConfig";

const sagaMonitor = Reactotron.createSagaMonitor();

const middleware = [];

const sagaMiddleware = createSagaMiddlleware({ sagaMonitor });

middleware.push(sagaMiddleware);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    Reactotron.createEnhancer()
  )
);

sagaMiddleware.run(sagas);

export default store;
