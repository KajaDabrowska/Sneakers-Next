import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const shopLocationIcon = new Icon({
  iconUrl: "https://img.icons8.com/windows/32/000000/shop-location--v2.png",
  iconSize: [32, 32],
  iconAnchor: [10, 30],
  popupAnchor: [10, -20],
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[38.00870890204488, -122.09493343721626]}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[38.00870890204488, -122.09493343721626]}
        icon={shopLocationIcon}
      >
        <Popup>We are here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
