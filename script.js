const shelters = [
  {
    name: "Barınak 1",
    lat: 40.4600,
    lng: 39.4800,
    description: "Sokak hayvanlarının dinlenebileceği korunaklı alan."
  },
  {
    name: "Barınak 2",
    lat: 40.4665,
    lng: 39.4750,
    description: "Mama ve su desteği için uygun bir barınak noktası."
  },
  {
    name: "Barınak 3",
    lat: 40.4550,
    lng: 39.4900,
    description: "Gönüllüler tarafından yerleştirilen güvenli yuva."
  }
];

// Kendi barınaklarını eklemek için yukarıdaki listeye yeni bir kayıt ekleyebilirsin.
// lat = enlem, lng = boylam. Örnek:
// { name: "Barınak 4", lat: 40.0000, lng: 39.0000, description: "Açıklama" }

const map = L.map("map").setView([40.4600, 39.4800], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap katkıcıları'
}).addTo(map);

const orangeIcon = L.divIcon({
  className: "custom-marker",
  html: '<div style="background:#f47b20;color:white;width:34px;height:34px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:grid;place-items:center;box-shadow:0 4px 12px rgba(0,0,0,.2);"><span style="transform:rotate(45deg);font-size:17px;">🐾</span></div>',
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -32]
});

const list = document.getElementById("shelterList");

shelters.forEach((shelter, index) => {
  const marker = L.marker([shelter.lat, shelter.lng], {icon: orangeIcon}).addTo(map);
  marker.bindPopup(`
    <div class="popup-title">🐾 ${shelter.name}</div>
    <div class="popup-desc">${shelter.description}</div>
  `);

  const item = document.createElement("div");
  item.className = "shelter-item";
  item.innerHTML = `<strong>📍 ${shelter.name}</strong><p>${shelter.description}</p>`;
  item.addEventListener("click", () => {
    map.setView([shelter.lat, shelter.lng], 17);
    marker.openPopup();
  });
  list.appendChild(item);
});

document.getElementById("shelterCount").textContent = shelters.length;
document.getElementById("listCount").textContent = `${shelters.length} konum`;
