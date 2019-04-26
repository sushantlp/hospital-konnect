import { combineReducers } from "redux";
import { cityLocality } from "./city-locality-reducer";
import { categoryDetail } from "./category-reducer";
import { homeDetail } from "./home-reducer";
import { wallImage } from "./wall-reducer";

export default combineReducers({
  cityLocality,
  categoryDetail,
  homeDetail,
  wallImage
});
