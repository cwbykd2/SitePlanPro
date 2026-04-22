# Architecture Design

## System Overview
SitePlan Pro is a single-page HTML application for interactive site planning on satellite imagery maps. It uses Leaflet.js for mapping, Leaflet.draw for drawing tools, and Turf.js for geospatial calculations.

## Tech Stack
- HTML5 / CSS3 / Vanilla JavaScript
- Leaflet 1.9.4 (mapping)
- Leaflet.draw 1.0.4 (drawing tools)
- Turf.js 6.5.0 (geospatial calculations)
- Esri World Imagery (satellite tile layer)
- Photon/Komoot API (geocoding)
- Google Fonts (DM Mono, Syne)

## Module Design
| Module | Responsibility | Key Files |
|--------|---------------|-----------|
| Map & Drawing | Leaflet map with draw tools for buildings, roads, ponds, site boundary | index.html |
| Building Config | Cross dock / rear load type selection, bay spacing, parking overlays | index.html |
| Statistics | Real-time area calculations (building SF, paved SF, pond SF, coverage) | index.html |
| Geocoding | Address search via Photon API | index.html |

## Tech Decisions
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Single HTML file | Self-contained | All CSS, JS, and HTML in one file for simplicity |
| CDN dependencies | External scripts | Leaflet, Turf.js loaded from CDN for easy deployment |

## File Tree Plan
```
app/frontend/
├── index.html      # Main application (self-contained)
├── script.js       # Empty (logic in index.html)
├── style.css       # Empty (styles in index.html)
└── package.json    # Dev server config
```

## Implementation Guide
The application is a direct deployment of the user's uploaded HTML file with no modifications needed.