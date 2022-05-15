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
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
    </div>
  )
}
