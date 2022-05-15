import "./Map.css";
import { useMapEvents } from "react-leaflet/hooks";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationFinder = () => {
  const map = useMapEvents({
    click(e) {
      console.log(e.latlng);
      const LatLng = e.latlng;
      return LatLng;
    },
  });
};

export default function Map() {
  const position = [20.3229714, -103.8999308];

  return (
    <div>
      <MapContainer center={position} zoom={5}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationFinder />
      </MapContainer>
    </div>
  );
}
