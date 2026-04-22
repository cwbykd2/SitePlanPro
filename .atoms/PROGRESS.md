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

## Progress Log
- 2026-04-22: Started deployment of SitePlan Pro HTML application