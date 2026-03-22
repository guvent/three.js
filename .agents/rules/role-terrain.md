---
trigger: always_on
---

# Role: Terrain & Ground Artist

Activated when the request involves **surfaces the player walks or stands on** — ground tiles, platforms, walls, ramps, bridges, water surfaces.

## How to Identify This Role

Keywords: terrain, ground, floor, platform, tile, wall, ramp, bridge, path, road, grass, dirt, sand, stone floor, water, lava, ice, cliff, step, staircase

## Terrain Structure

```
TerrainRoot (THREE.Group, name = 'TerrainName')
  ├── ground   (THREE.Mesh)  — main walkable surface
  ├── features (THREE.Mesh)  — raised/lowered details (optional)
  └── trim     (THREE.Mesh)  — edge decoration (optional)
```

No animation required by default. Add gentle animation only for water, lava, or floating platforms.

## Geometry Palette

| Surface | Geometry | Notes |
|---------|----------|-------|
| Flat ground | `PlaneGeometry(w, h, 1, 1)` rotated X -90° | standard tile |
| Platform | `BoxGeometry(w, 0.3, d)` | raised walkable block |
| Thick wall | `BoxGeometry(0.3, h, d)` | vertical barrier |
| Ramp | `BoxGeometry(w, 0.2, d)` rotated X | angled surface |
| Step | stacked `BoxGeometry` slabs | staircase |
| Round platform | `CylinderGeometry(r, r, 0.3, 16)` | circular pad |
| Bridge plank | `BoxGeometry(1.0, 0.15, 0.4)` repeated | |
| Water surface | `PlaneGeometry(w, h, 8, 8)` rotated X -90° | animated vertices or UV scroll |
| Cliff face | `BoxGeometry` with non-uniform scale | |

## Material Conventions

| Surface | Color | Roughness | Metalness |
|---------|-------|-----------|-----------|
| Grass | `0x5a8a3c` | 0.9 | 0.0 |
| Dirt | `0xa0785a` | 1.0 | 0.0 |
| Stone | `0x777777` | 0.8 | 0.0 |
| Sand | `0xe8d5a3` | 0.9 | 0.0 |
| Wood | `0x8b6914` | 0.8 | 0.0 |
| Metal grate | `0x888888` | 0.4 | 0.7 |
| Water | `0x1a6b8a` | 0.1 | 0.0, transparent: true, opacity: 0.8 |
| Lava | `0xff4400` | 0.9 | 0.0 |
| Ice | `0xaaddff` | 0.05 | 0.1 |
| Snow | `0xeeeeff` | 1.0 | 0.0 |

## Animation (when needed)

| Surface | Animation |
|---------|-----------|
| Water | gentle Y bob on whole group, D=3s, amplitude=0.03 |
| Floating platform | bob Y, D=2s, amplitude=0.15 |
| Lava | slow Y bob + optional scale pulse |
| Moving platform | position X or Z track, linear back-and-forth |

## Sizing Conventions

- Standard tile unit: **1.0** (assets snap to a 1-unit grid)
- Platform thickness: **0.3**
- Wall height: **2.0–3.0**
- Ground plane for a scene: **10×10** minimum

## Spec Location

New terrain specs → `.agents/specs/terrain/<terrain-name>/`