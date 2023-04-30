import React, { useEffect, useRef, useState } from "react";
import "./mapwrapper.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";

// make new leaflet element
const Search = (props) => {
  const { provider } = props;

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider,
    });

    props.map.current.addControl(searchControl); // this is how you add a control in vanilla leaflet
    return () => props.map.current.removeControl(searchControl);
  }, [props]);

  return null; // don't want anything to show up from this comp
};

function Mapwrapper() {
  const mapRef = useRef();

  const searchControlRef = useRef();

  const [zoom, setZoom] = useState(2);
  const maxBounds = [
    [-90, -180],
    [90, 180],
  ];
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.on("move", () => {
        const center = this.map.getCenter();
        const lng = L.Util.wrapNum(center.lng, [0, 360], true);
        if (lng !== center.lng) {
          center.lng = lng;
          mapRef.current.panTo(center, { animate: false });
        }
      });
    }
  }, [mapRef]);

  return (
    <div className="mapwrapper">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        ref={mapRef}
        zoomControl={false}
        maxBounds={maxBounds}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
        />

        <Search map={mapRef} provider={new OpenStreetMapProvider()} />

        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

export default Mapwrapper;
