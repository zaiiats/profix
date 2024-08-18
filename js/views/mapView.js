import L from "leaflet";
import "leaflet/dist/leaflet.css";

class MapView {
  constructor() {
    this.#initMap();
  }

  #initMap() {
    if (!document.querySelector('.map')) return;
    const map = L.map("map").setView([48.44936657859257, 22.68838837665921], 17);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([48.44936657859257, 22.68838837665921])
      .addTo(map)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();
  }
}

export default MapView;
