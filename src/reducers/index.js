import { combineReducers } from "redux";
import { cityLocality } from "./city-locality-reducer";
import { categoryDetail } from "./category-reducer";
import { homeDetail } from "./home-reducer";
import { wallImage } from "./wall-reducer";
import { keywordSearch } from "./keyword-reducer";
import { filterList } from "./filter-reducer";
import { categoryList } from "./category-list-reducer";
import { categoryFeature } from "./category-feature-reducer";

export default combineReducers({
  cityLocality,
  categoryDetail,
  homeDetail,
  wallImage,
  keywordSearch,
  categoryList,
  categoryFeature,
  filterList
});
