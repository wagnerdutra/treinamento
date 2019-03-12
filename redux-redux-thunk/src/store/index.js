import { createStore, compose, applyMiddleware } from "redux";

import api from "../services/api";

import reducers from "./ducks";

import Reactotron from "../ReactotronConfig";

import ReduxThunk from "redux-thunk";

const middleware = [ReduxThunk.withExtraArgument(api)];

middleware.push();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    Reactotron.createEnhancer()
  )
);

export default store;
