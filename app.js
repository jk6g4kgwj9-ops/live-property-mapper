const map = L.map('map').setView([37.501705, 15.083901], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const details = document.getElementById('details');
const nameEl = document.getElementById('property-name');
const addressEl = document.getElementById('property-address');
const modelEl = document.getElementById('model');
const fallbackEl = document.getElementById('model-fallback');
const sourceEl = document.getElementById('model-source');
const downloadBtn = document.getElementById('download-btn');
const viewBtn = document.getElementById('view-btn');
let selectedProperty;

fetch('data/properties.json')
  .then(response => {
    if (!response.ok) throw new Error(`Could not load properties (${response.status})`);
    return response.json();
  })
  .then(properties => properties
    .filter(property => property.visibility === 'public')
    .forEach(property => {
      const marker = L.marker([property.latitude, property.longitude]).addTo(map);
      marker.bindTooltip(property.name);
      marker.on('click', () => showProperty(property));
    }))
  .catch(error => {
    console.error(error);
    document.querySelector('.status').textContent = 'Could not load properties';
  });

function showProperty(property) {
  selectedProperty = property;
  nameEl.textContent = property.name;
  addressEl.textContent = `📍 ${property.address}`;
  sourceEl.href = property.sourceUrl || 'https://www.meshy.ai/s/sDfnDN';
  downloadBtn.href = property.model;
  details.hidden = false;
  loadModel();
}

function loadModel() {
  if (!selectedProperty) return;
  modelEl.style.display = '';
  fallbackEl.hidden = true;
  modelEl.removeAttribute('src');
  modelEl.addEventListener('error', showFallback, { once: true });
  modelEl.src = selectedProperty.model;
  window.setTimeout(() => {
    if (!modelEl.loaded && modelEl.src.endsWith(selectedProperty.model)) showFallback();
  }, 1500);
}

function showFallback() {
  modelEl.style.display = 'none';
  fallbackEl.hidden = false;
}

viewBtn.addEventListener('click', loadModel);
document.getElementById('close').addEventListener('click', () => {
  details.hidden = true;
  modelEl.removeAttribute('src');
});
