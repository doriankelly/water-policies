import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const MapContainerComp = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://retoolapi.dev/BnvMF0/data");
      const data = await response.json();
      setMarkers(data);
    };
    fetchData();
  }, []);

  return (
    <MapContainer center={[42.53125302957343, -5.8680262289283505]} zoom={13} style={{ height: "500px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.Lat, marker.Long]}>
          <Popup>
            Embalse: {marker.Embalse}
            <br />
            Cuenca: {marker.Cuenca}
            <br />
            Volumen actual: {marker.porcentaje}%
            
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
