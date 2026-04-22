# Project Context

## Project Overview
SitePlan Pro - An interactive site planning tool built with Leaflet.js, Leaflet.draw, and Turf.js. Features include address geocoding, building placement with cross dock/rear load types, road and pond drawing, site boundary definition, and real-time area statistics.

## Key Decisions
| Date | Decision | By | Rationale |
|------|----------|-----|-----------|
| 2026-04-22 | Use html_template for deployment | Alex | Self-contained HTML file with all dependencies loaded via CDN |

## Constraints
- Single HTML file deployment
- External CDN dependencies: Leaflet 1.9.4, Leaflet.draw 1.0.4, Turf.js 6.5.0
- Dark theme with custom CSS variables
- Fonts: DM Mono, Syne from Google Fonts