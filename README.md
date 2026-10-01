# Live Property Mapper

A static Leaflet map for publicly visible property markers with optional GLB models.

## Project structure

```text
index.html
styles.css
app.js
data/properties.json
models/simone-karin-home.glb
```

## Add the 3D model

Download the model and upload it as `models/simone-karin-home.glb`. The map loads that local file in Google's `model-viewer`, and the property panel provides view and download controls. Until the file is uploaded, the panel links to the Meshy source page.

## Run locally

Use a local HTTP server so JSON and GLB requests work correctly:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> and click the map marker.

## GitHub Pages

Enable **Settings → Pages → Deploy from branch → `main` → `/ (root)`**. The model URL will be:

```text
https://jk6g4kgwj9-ops.github.io/live-property-mapper/models/simone-karin-home.glb
```

The repository currently contains the property record and app, but not the binary GLB file. Upload that file before expecting the 3D viewer or download button to work.

## Privacy

This record is public and contains an exact residential address and coordinates. Keep `visibility` set to `private` or use approximate coordinates if you do not want the home publicly identifiable.
