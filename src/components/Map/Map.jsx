import "./Map.css";
import { useMapEvents } from "react-leaflet/hooks";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import data from "../../data/data.json";
import { Icon } from "leaflet";
import DD from "../../assets/DD.svg";
import LC from "../../assets/LC.svg";
import NT from "../../assets/NT.svg";
import VU from "../../assets/VU.svg";
import EN from "../../assets/EN.svg";
import CR from "../../assets/CR.svg";
import EW from "../../assets/EW.svg";
import EX from "../../assets/EX.svg";

const Map = ({ places }) => {
  const position = [20.3229714, -103.8999308];
  console.log(data);

  const LocationFinder = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        const LatLng = e.latlng;
        return LatLng;
      },
    });
  };

  return (
    <div>
      <MapContainer center={position} zoom={5}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((data) => (
          <Marker
            key={data.id}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
            position={[data.gps.lat, data.gps.lng]}
          >
            <Popup>
              <img src={data.image} alt={data.name} />
              <h1 className="btn btn-outline-primary">{data.scientificName}</h1>
              <p>{data.description}</p>
              <h5 className="btn btn-outline-danger m-3">Red List Category:</h5>
              {data.redlistCategory === "Data Deficient" ? (
                <img src={DD} alt="DD" height="100px" />
              ) : data.redlistCategory === "Least Concern" ? (
                <img src={LC} alt="LC" />
              ) : data.redlistCategory === "Near Threatened" ? (
                <img src={NT} alt="NT" />
              ) : data.redlistCategory === "Vulnerable" ? (
                <img src={VU} alt="VU" />
              ) : data.redlistCategory === "Endangered" ? (
                <img src={EN} alt="EN" />
              ) : data.redlistCategory === "Critically Endangered" ? (
                <img src={CR} alt="CR" />
              ) : data.redlistCategory === "Extinct in the Wild" ? (
                <img src={EW} alt="EW" />
              ) : (
                <img src={EX} alt="EX" />
              )}
            </Popup>
          </Marker>
        ))}
        <LocationFinder />
      </MapContainer>
    </div>
  );
};

export default Map;
