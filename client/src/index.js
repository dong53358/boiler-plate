import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import rootReducer from "./_reducers";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import Root from "./Root";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSTION__ &&
          window.__REDUX_DEVTOOLS_EXTENSTION__()
      )}
    >
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
