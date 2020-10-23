import { combineReducers } from "redux";
import influencersReducer from "./influencersReducer";

export default combineReducers({
  influencer: influencersReducer,
});
