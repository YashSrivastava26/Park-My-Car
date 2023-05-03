import React, { useEffect, useRef, useState } from "react";
import "./mapwrapper.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import L from "leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";

function Mapwrapper({ parkings }) {
  const mapRef = useRef();
  const [userLocation, setUserLocation] = useState([0, 0]);
  const userLocationIcon = new Icon({
    iconUrl: require("./person.png"),
    iconSize: [55, 55],
    iconAnchor: [28, 10],
    popupAnchor: [0, -10],
  });
  const parkingIcon = new Icon({
    iconUrl: require("./parking.png"),
    iconSize: [18, 18],
    iconAnchor: [18, 5],
    popupAnchor: [-8, -10],
  });
  const searchControl = new GeoSearchControl({
    provider: new OpenStreetMapProvider(),
  });

  const [zoom, setZoom] = useState(2);
  const maxBounds = [
    [-90, -180],
    [90, 180],
  ];
  useEffect(() => {
    mapRef.current?.addControl(searchControl);
  }, [mapRef]);

  const focusMapToLocation = (locationToFocus, center) => {
    let zoom;

    // Allign to center
    if (center) {
      zoom = 14;
    }
    // Focus to selected event
    else {
      zoom = 18;
    }
    mapRef.current?.flyTo(locationToFocus, zoom, {
      duration: 3,
    });

    // dispatch({ type: "SET_FOCUS_MAP_TO_CENTER", focusMapToCenter: false });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude]);
      focusMapToLocation([pos.coords.latitude, pos.coords.longitude], true);
    });
  }, []);

  return (
    <div className="mapwrapper">
      <MapContainer
        center={userLocation}
        zoom={2}
        ref={mapRef}
        zoomControl={false}
        maxBounds={maxBounds}
        minZoom={2}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
        />
        <Marker position={userLocation} icon={userLocationIcon}>
          <Popup>Your location</Popup>
        </Marker>
        {parkings?.map((parking, i) => (
          <Marker
            key={i}
            position={[parking?.latitude, parking?.longitude]}
            icon={parkingIcon}
          >
            <Popup>{parking?.name}</Popup>
          </Marker>
        ))}
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

export default Mapwrapper;
