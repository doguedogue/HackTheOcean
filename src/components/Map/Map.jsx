import React from 'react'
import './Map.css'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import AnimalMarker from './AnimalMarker'



export default function Map() {
  const position = [21.234711923744378, -95.79602090609873]
  return (
    <div>
      <MapContainer center={position} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AnimalMarker position={position}
       name={"Polyprion americanus"}
       image={"https://upload.wikimedia.org/wikipedia/commons/e/e7/Polyprion_americanus.png"}
       description={"The Atlantic wreckfish, also known as the stone bass or bass grouper, is a marine, bathydemersal, and oceanodromous ray-finned fish in the family Polyprionidae."}
      />
      </MapContainer>
    </div>
  )
}
