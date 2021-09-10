import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVoIiwiYSI6ImNrdGUzejQyczJsZjMyempwN3ZpNHgybXMifQ.8FTurXSoVxabT_UfmR_kHQ";

// MAP Box
const MapBox = (props) => {
  const { zoom, center } = props;
  const [map, setMap] = useState();
  const ref = useRef(null);

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [0, 0],
        zoom: 1,
      })
    );
  }, []);

  useEffect(() => {
    if (!map) return;

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
  }, [map]);

  useEffect(() => {
    if (!map) return;

    map.flyTo({ zoom, center: center });
  }, [zoom, center]);

  return <div id="gl-map" ref={ref}></div>;
};

const mapStateToProps = (state) => ({
  zoom: state.zoom,
  center: state.center,
});

export default connect(mapStateToProps, null)(MapBox);
