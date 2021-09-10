import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OlMap from "ol/map";
import OlView from "ol/view";
import OlLayerTile from "ol/layer/tile";
import OlSourceOSM from "ol/source/osm";

import { zoomAction } from "../redux/action";

const OpenlayesMap = (props) => {
  const { zoomAction } = props;
  const [state, setState] = useState({ center: [0, 0], zoom: 1 });

  const olmap = new OlMap({
    target: null,
    layers: [
      new OlLayerTile({
        source: new OlSourceOSM(),
      }),
    ],
    view: new OlView({
      projection: "EPSG:4326",
      center: state.center,
      zoom: state.zoom,
    }),
  });

  useEffect(() => {
    olmap.setTarget("ol-map");

    // Listen to map changes
    olmap.on("moveend", () => {
      let center = olmap.getView().getCenter();
      let zoom = olmap.getView().getZoom() - 1.887220615468387;

      if (zoom !== state.zoom || center !== state.center) {
        zoomAction({ zoom, center });
        setState({ center, zoom });
      }
    });
  }, []);

  return <div id="ol-map"></div>;
};

const mapDispatchToProps = {
  zoomAction: zoomAction,
};

export default connect(null, mapDispatchToProps)(OpenlayesMap);
