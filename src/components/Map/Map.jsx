import React from 'react'
import './Map.css'

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'



export default function Map() {
  const position = [20.3229714, -103.8999308]
  return (
    <div>
      <MapContainer center={position} zoom={5}>
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
      </MapContainer>
    </div>
  )
}
