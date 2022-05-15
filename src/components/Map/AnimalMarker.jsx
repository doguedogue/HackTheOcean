import React from "react";
import { Marker, Popup } from "react-leaflet";
import "./AnimalMarker.css";

//Workaround to fix marker icon issue
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

export default function AnimalMarker({ position, name, image, description }) {
  return (
    <Marker
      position={position}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>
        {/* <img src={image} alt="Specie Image" /> */}
        <h5>{name}</h5>
        <p>{description}</p>
      </Popup>
    </Marker>
  );
}
