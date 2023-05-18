import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer} from "react-leaflet";
import { Markers } from "./Markers";

export const MapContainerComp = () => {

  return (
    <>

      <MapContainer center={[38.90892927891196, -6.617053521585592]} zoom={13} doubleClickZoom={false} attributionControl={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers/>
      </MapContainer>

    </>
  )
}