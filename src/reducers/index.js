import { combineReducers } from "redux";
import { cityLocality } from "./city-locality-reducer";
import { categoryDetail } from "./category-reducer";

export default combineReducers({ cityLocality, categoryDetail });
