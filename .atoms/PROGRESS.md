# Requirements & Progress

## Requirements Overview
Deploy the uploaded SitePlan Pro HTML application - a site planning tool with Leaflet maps, building placement, road/pond drawing, and site statistics.

## User Stories
- User can search addresses and navigate the map
- User can draw buildings (cross dock / rear load) with configurable options
- User can draw roads and ponds
- User can define site boundaries
- User can view real-time site statistics

## Task Breakdown
- [x] Deploy uploaded SitePlan Pro HTML to the html_template
- [x] Add editable site boundary - drag corners and add midpoints to refine parcel shape
- [x] Add building drag, rotate, and resize functionality
- [x] Add real-time dimension labels (width, depth, SF) on buildings
- [x] Add interactive corner handles - blue resize handle and yellow rotate handle on building corners
- [x] Add Paving tool with rectangle drag and free-draw modes, dimension labels, and stats integration
- [x] Update truck court & trailer parking: cross dock per-side options, rear load single option, 130ft default → 185ft with trailer
- [x] Site naming - prompt for name after drawing site boundary, display in header
- [x] Auto-save to localStorage on every change
- [x] Site management dropdown - list/load/rename/delete saved sites
- [x] Visual save indicator near site name
- [x] Export PDF button - captures map view and site statistics as downloadable PDF
- [x] Independent width/depth resizing - separate edge-midpoint handles for stretching width and depth independently
- [x] Hashed black boundary line - after naming, boundary locks to black dashed line with no edit points or fill
- [x] Adjust Site button - appears in sidebar when boundary is locked, click to re-enable editing
- [x] Out-of-bounds red highlighting - areas of buildings/pavings/ponds outside the boundary turn solid red
- [x] Road snap-to-edges - snap road endpoints to truck courts, car parking, paving edges
- [x] Curved roads - Catmull-Rom spline toggle for smooth curved road segments
- [x] Road editing - click road to edit vertices, drag to reshape, delete button
- [x] Road intersections - auto-detect and visually merge crossing roads via Turf.js union
- [x] City/municipality auto-detection via reverse geocoding (Nominatim API)
- [x] Fee Estimator tab in sidebar with 5 fee categories and rate inputs
- [x] Auto-calculated fee totals based on site statistics
- [x] Save/Load fee templates per city in localStorage
- [x] Fee summary in PDF export
- [x] Truck court inset - per-side inset inputs to shorten truck court from each end of building edge
- [x] Building Cost Estimator tab - per-building cost calculation using pricing chart with 32'/36'/40' clear heights, closest SF matching, site total, PDF export integration, and save/load support
- [x] Per-building clear height dropdown - each building has its own independent clear height selector instead of a global one
- [x] Paving type selector - choose Car Parking, Trailer Parking, or Other when drawing pavings; colors match overlay types; stats breakdown and PDF updated
- [x] Paving interaction - click to select, drag to move, resize (width/depth handles), rotate (yellow handle), Delete key to remove

## Progress Log
- 2026-04-22: Started deployment of SitePlan Pro HTML application
- 2026-04-22: Added PDF export feature with html2canvas + jsPDF
- 2026-04-22: Added default car parking on opposite side of truck court for rear load buildings
- 2026-04-22: Updated rear load truck court to always be placed on the longer side of the building
- 2026-04-22: Fixed truck court/parking rotation pivot to use baseCenter instead of rotated center, ensuring overlays align perfectly with building edges at any angle
- 2026-04-22: Rewrote overlay positioning to use edge-vector math instead of bounding boxes, fixing alignment after drag/rotate operations
- 2026-04-22: Replaced single resize handle with independent width (blue ↔) and depth (green ↕) edge-midpoint handles for axis-specific resizing
- 2026-04-22: Added hashed black boundary line (locked after naming), Adjust Site button, and out-of-bounds red highlighting for items outside boundary
- 2026-04-22: Removed Transform section (rotate/scale sliders and buttons) from sidebar; kept mouse handle hint text
- 2026-04-22: Added road width selection modal (24', 30', 40' presets + custom), road polygon rendering via Turf.js buffer, road labels, and road out-of-bounds checking
- 2026-04-22: Fixed road cleanup in clearAll_noConfirm and all load/reset functions to use new road object structure (r.layer, r.labelGroup)
- 2026-04-22: Removed all snap-to-edges functionality (findSnapPoint, showSnapIndicator, hideSnapIndicator, snapMarker references) per user request
- 2026-04-22: Added paved breakdown stats panel (Car Parking, Truck Court, Trailer Parking, Road, Paving) with overlay type tagging and PDF export integration
- 2026-04-22: Fixed pond drawing bug - mode 'pond' was not matched in draw:created handler, causing completed ponds to disappear
- 2026-04-22: Road labels now show only width (e.g. "40' W") instead of width × length
- 2026-04-22: Fixed pond serialization in save function to use p.layer.getLatLngs() for new pond object structure
- 2026-04-22: Added Fee Estimator feature: city auto-detection via Nominatim reverse geocoding, 5 fee categories (Impact, Permits, Roadway, Utility, Fire/Life Safety) with rate mode selectors and auto-calculation from site stats, fee template save/load per city in localStorage, fee summary in PDF export, and full save/load integration
- 2026-04-22: Added truck court inset feature: per-building inset values (in feet) to shorten truck courts from each end of the building edge. Rear load has Start/End insets; Cross dock has separate Left/Right insets for top and bottom sides. Insets also apply to trailer parking overlays. Full save/load integration.
- 2026-04-22: Added paving type selector (Car Parking / Trailer Parking / Other) with matching colors, type labels on map, stats breakdown integration, PDF export, and save/load support