import { combineReducers } from "redux";
import { cityLocality } from "./city-locality-reducer";
import { categoryDetail } from "./category-reducer";
import { homeDetail } from "./home-reducer";
import { wallImage } from "./wall-reducer";
import { keywordSearch } from "./keyword-reducer";
import { filterList } from "./filter-reducer";
import { categoryList } from "./category-list-reducer";
import { categoryFeature } from "./category-feature-reducer";
import { sideBarList } from "./side-bar-reducer";
import { seoUrlList } from "./seo-url-reducer";
import { mobileRegister } from "./mobile-register-reducer";

export default combineReducers({
  cityLocality,
  categoryDetail,
  homeDetail,
  wallImage,
  keywordSearch,
  categoryList,
  categoryFeature,
  filterList,
  sideBarList,
  seoUrlList,
  mobileRegister
});
