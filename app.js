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
  nameEl.textContent = property.name;
  addressEl.textContent = property.address;
  details.hidden = false;
  modelEl.removeAttribute('src');
  fallbackEl.hidden = true;
  sourceEl.href = 'https://www.meshy.ai/s/sDfnDN';
  modelEl.addEventListener('error', showFallback, { once: true });
  modelEl.src = property.model;
  // A missing local file may not emit an error consistently in every browser.
  setTimeout(() => {
    if (!modelEl.loaded) showFallback();
  }, 1200);
}

function showFallback() {
  modelEl.style.display = 'none';
  fallbackEl.hidden = false;
}

document.getElementById('close').addEventListener('click', () => {
  details.hidden = true;
  modelEl.style.display = '';
});
