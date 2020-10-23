import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore } from "redux-persist";
import setAuthToken from "../utils/setAuthToken";

const initialState = {};

const middleware = [thunk];
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
// set up a store subscription listener
// to store the users token in localStorage

// prevent auth error on first run of subscription
let currentState = {
  influencer: { token: null, isAuthenticated: null, loading: true, user: null },
};

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
  if (previousState.influencer.token !== currentState.influencer.token) {
    const token = currentState.influencer.token;
    setAuthToken(token);
  }
});
export const persistor = persistStore(store);

export default { store, persistor };
