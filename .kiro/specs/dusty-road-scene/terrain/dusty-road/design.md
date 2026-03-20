# Design: Dusty Road Terrain

## Category
Terrain

## Description
Flat plot of land with a layered dusty dirt road — grass ground, sandy shoulder, dusty tan road surface, and worn wheel tracks.

## Geometry
| Part | Geometry | Color | Y position |
|------|----------|-------|------------|
| ground | PlaneGeometry(28, 28) rotated -π/2 | 0x5a8a3c | 0 |
| shoulder | BoxGeometry(3.2, 0.015, 14) | 0xb8956a | 0.008 |
| road | BoxGeometry(2.2, 0.02, 14) | 0xc4a882 | 0.012 |
| trackL | BoxGeometry(0.18, 0.021, 14) | 0xa8906a | 0.013, x=-0.55 |
| trackR | BoxGeometry(0.18, 0.021, 14) | 0xa8906a | 0.013, x=+0.55 |

## Animations
None — static terrain.

## Delivered files
- `editor/js/Menubar.Add.js` — menu entry name: `Dusty Road Scene`
- `examples/misc_dusty_road_scene.html` — standalone preview
