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
// import { SearchControl, OpenStreetMapProvider } from "react-leaflet-search";

function Mapwrapper() {
  const mapRef = useRef();
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
        {/* <SearchControl
          provider={provider}
          position="topleft"
          placeholder="Search for a location"
          // search={search}
        /> */}
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

export default Mapwrapper;
