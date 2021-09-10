import { ZOOM } from "./constants";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ZOOM:
      return { ...state, zoom: action.zoom, center: action.center };

    default:
      return state;
  }
};
export default reducer;
