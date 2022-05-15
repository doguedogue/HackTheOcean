import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LocationMarker() {
  const map = useMapEvents({
    click() {
      map.on("click", function (e) {
        var coord = e.latlng.toString().split(",");
        var lat = coord[0].split("(");
        var lng = coord[1].split(")");
        console.log(
          "You clicked the map at latitude: " +
            lat[1] +
            " and longitude:" +
            lng[0]
        );
      });
    },
  });
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
