# Design: Dust Kick FX

## Category
FX

## Description
Object-pool of 6 dust puff groups (6 sphere particles each) spawned at each footfall, animated per-frame with radial spread, upward drift, scale grow/shrink, and opacity fade.

## Geometry
| Part | Geometry | Color |
|------|----------|-------|
| dust particle | SphereGeometry(0.07–0.12, 4, 4) | 0xd4b896 |

## Pool constants
| Constant | Value |
|----------|-------|
| POOL_SIZE | 6 |
| PPP (particles per puff) | 6 |
| PUFF_DUR | 0.55 s |

## Particle lifecycle
| Phase | t range | Scale | Opacity |
|-------|---------|-------|---------|
| Grow | 0–0.3 | 0 → 1.4 | 0.75 |
| Hold | 0.3–0.4 | 1.4 → shrinking | 0.75 |
| Fade | 0.4–1.0 | shrinking → 0 | 0.75 → 0 |

## Footfall detection
Mirrors the leg animation sine: `la = 0.4 * sin(phase + π)`, `ra = 0.4 * sin(phase)`.
Footfall fires when angle crosses from > 0.05 to ≤ 0.05 (positive-to-zero crossing).

## Delivered files
- `editor/js/Menubar.Add.js` — menu entry name: `Dusty Road Scene`
- `examples/misc_dusty_road_scene.html` — standalone preview
