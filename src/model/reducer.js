

import {combineReducers} from "redux";
import appSlice from "../model/app"

const rootReducers = combineReducers({
  app: appSlice,
});

export default rootReducers;
