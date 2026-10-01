# Live Property Mapper

A public live map and 3D property showcase for Simone & Karin Home in Catania, Italy.

## Included sections

- Public Leaflet map with the property marker
- Property details with address and exact coordinates
- 3D model viewer and download controls
- Location, property-type, and public-listing information cards
- Map usage instructions and a prominent public-location notice
- OpenStreetMap attribution and responsive mobile layout

## 3D model

Upload the binary file as `models/simone-karin-home.glb`. Until it is present, the details panel links to the Meshy source page.

## Run locally

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> and select the marker.

## GitHub Pages

Enable **Settings → Pages → Deploy from branch → `main` → `/ (root)`**. The expected URL is:

```text
https://jk6g4kgwj9-ops.github.io/live-property-mapper/
```

## Privacy and consent

The listing is currently public and publishes an exact residential address and GPS coordinates. Only keep it public with permission from everyone whose privacy may be affected. To hide it, change `visibility` to `private` in `data/properties.json`; the app will not render private entries.
