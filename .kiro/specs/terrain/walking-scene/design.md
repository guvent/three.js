# Design: Walking Scene

## Category
Terrain

## Description
A plot of land with a dusty dirt road running along the Z axis, used as the environment for the Walker character preview.

## Geometry

| Part | Geometry | Color |
|------|----------|-------|
| Grass ground | `PlaneGeometry(28, 28)` rotated X -90° | `0x5a8a3c` |
| Road shoulder | `BoxGeometry(3.2, 0.015, 14)` at Y=0.008 | `0xb8956a` |
| Dusty road surface | `BoxGeometry(2.2, 0.02, 14)` at Y=0.012 | `0xc4a882` |
| Wheel tracks (×2) | `BoxGeometry(0.18, 0.021, 14)` at X=±0.55 | `0xa8906a` |
| Dust patches (×8) | `CylinderGeometry` random radii, Y=0.022 | `0xd4b896` transparent |

## Materials
`MeshToonMaterial` throughout (standalone preview).

## Lighting
- `AmbientLight(0xffffff, 0.8)`
- `DirectionalLight(0xfff0cc, 1.2)` at (5, 10, 5), `castShadow: true`, shadow camera ±8 units, bias -0.001
- `SpotLight(0xffffff, 3)` — angle π/6, penumbra 0.4, range 12 — positioned 5 units above Walker each frame, target tracks Walker's XZ position; casts crisp overhead shadow

## Scene settings
- Background: `0x87ceeb` (sky blue)
- Fog: `Fog(0x87ceeb, 20, 40)`
- Camera: `PerspectiveCamera(50°)` at (0, 5, 10) looking at origin

## Animations
None — terrain is static.

## Delivered files
- `examples/misc_walking_scene.html` — standalone preview (includes Walker character)

## Related specs
- `.kiro/specs/characters/walker/` — the Walker character that inhabits this scene
