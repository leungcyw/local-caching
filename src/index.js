import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import PizzaForm from "./PizzaForm";
import { getConfiguredCache } from "money-clip";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import getPersistMiddleware from "redux-persist-middleware";
import { Theme } from "@twilio-paste/core/theme";
import ms from "milliseconds";

const rootEl = document.getElementById("root");
const cacheOptions = {
  version: 0.1,
  maxAge: ms.seconds(10),
};
const cache = getConfiguredCache(cacheOptions);

const actionMap = {
  "@@redux-form/CHANGE": ["form"]
};
const clearActionMap = {
  "@@redux-form/RESET": ["form"]
};
const persistMiddleware = getPersistMiddleware({
  cacheFn: cache.set,
  logger: console.info,
  actionMap
});
const clearMiddleware = getPersistMiddleware({
  cacheFn: cache.del,
  logger: console.info,
  actionMap: clearActionMap
});
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
});

cache.getAll().then((data) => {
  const store = createStore(
    reducer,
    data,
    compose(
      applyMiddleware(persistMiddleware, clearMiddleware),
      // following lines will throw error if extension not installed
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  ReactDOM.render(
    <Provider store={store}>
      <Theme.Provider theme="default">
        <PizzaForm />
      </Theme.Provider>
    </Provider>,
    rootEl
  );
});
