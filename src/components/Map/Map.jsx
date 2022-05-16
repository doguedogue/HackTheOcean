import "./Map.css";
import { useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet/hooks";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import backup from "../../data/data.json";
import DD from "../../assets/DD.svg";
import LC from "../../assets/LC.svg";
import NT from "../../assets/NT.svg";
import VU from "../../assets/VU.svg";
import EN from "../../assets/EN.svg";
import CR from "../../assets/CR.svg";
import EW from "../../assets/EW.svg";
import EX from "../../assets/EX.svg";
import { v4 as uuidv4 } from "uuid";

const Map = () => {
  const position = [20.3229714, -103.8999308];
  const datos = [
    {
      id: 21,
      gps: {
        lat: 18.858763775063853,
        lng: -93.5944770496974,
      },
    },
  ];
  const [data, setData] = useState(datos);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const apiAnimals = await fetch(
      "https://savetheoceanbe.herokuapp.com/api/extinction"
    );
    const animals = await apiAnimals.json();
    setData(animals.result);
  };

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
            key={uuidv4()}
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
              <h1 className="btn btn-outline-primary m-3">
                {data.scientificName}
              </h1>
              <p>{data.description}</p>
              <h5 className="btn btn-outline-danger m-3">Red List Category</h5>
              {data.redlistCategory === "Data Deficient" ? (
                <img src={DD} alt="DD" height="100px" />
              ) : data.redlistCategory === "Least Concern" ? (
                <img src={LC} alt="LC" height="100px" />
              ) : data.redlistCategory === "Near Threatened" ? (
                <img src={NT} alt="NT" height="100px" />
              ) : data.redlistCategory === "Vulnerable" ? (
                <img src={VU} alt="VU" height="100px" />
              ) : data.redlistCategory === "Endangered" ? (
                <img src={EN} alt="EN" height="100px" />
              ) : data.redlistCategory === "Critically Endangered" ? (
                <img src={CR} alt="CR" height="100px" />
              ) : data.redlistCategory === "Extinct in the Wild" ? (
                <img src={EW} alt="EW" height="100px" />
              ) : (
                <img src={EX} alt="EX" height="100px" />
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
