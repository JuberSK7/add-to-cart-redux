import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./services/reducer/index";

const store = createStore(rootReducer);
console.log("store details", store);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </StrictMode>
);
