import React from 'react'
import './Map.css'

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

//Workaround to fix marker icon issue
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import { Icon } from 'leaflet'


export default function Map() {
  const position = [20.3229714, -103.8999308]
  return (
    <div>
      <MapContainer center={position} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [ 12, 41] })}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      </MapContainer>
    </div>
  )
}
