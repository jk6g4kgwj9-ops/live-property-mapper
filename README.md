# Live Property Mapper

A small static map for publicly visible property markers.

## Run locally

Serve the repository directory with any static server, for example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly may block the JSON request in some browsers.

## Add the 3D model

The property record points to `simone-karin-home.glb`. Upload the downloaded GLB file at the repository root using exactly that filename. The app will then display it when the marker is selected. Until then, it provides a link to the Meshy source page instead.

## Publish

Enable GitHub Pages for the `main` branch and root directory in the repository Pages settings. The site is public, and the current marker contains an exact residential address and coordinates; remove or change that record before publishing if you do not want the location exposed.
