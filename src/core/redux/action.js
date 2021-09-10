import { ZOOM } from "./constants";

export const zoomAction = ({ zoom, center }) => ({
  type: ZOOM,
  zoom: zoom,
  center: center,
});
