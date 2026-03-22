---
trigger: always_on
---

# Role: Prop & Decoration Artist

Activated when the request involves a **scene object** — something placed in the world that is not a character or terrain.

## How to Identify This Role

Keywords: prop, decoration, object, tree, rock, barrel, chest, coin, torch, sign, fence, crate, bush, flower, lamp, pillar, statue, door, window, bridge, ladder

## Prop Structure

```
PropRoot (THREE.Group, name = 'PropName')
  ├── base mesh(es) — main visible shape
  └── animated parts (THREE.Group, descriptive name)
      e.g. 'flame', 'lid', 'blade', 'coin', 'leaf'
```

No fixed naming convention — use clear descriptive names that match the AnimationClip track paths.

## Geometry Palette

| Prop | Geometry |
|------|----------|
| Tree trunk | `CylinderGeometry(0.15, 0.2, 1.5, 8)` |
| Tree top | `ConeGeometry(0.7, 1.2, 8)` or `SphereGeometry(0.7, 8, 8)` |
| Rock | `DodecahedronGeometry(r, 0)` r=0.4–0.8, slightly scaled non-uniformly |
| Barrel | `CylinderGeometry(0.3, 0.3, 0.6, 12)` |
| Crate | `BoxGeometry(0.7, 0.7, 0.7)` |
| Chest body | `BoxGeometry(0.8, 0.5, 0.6)` |
| Chest lid | `BoxGeometry(0.8, 0.25, 0.6)` pivot at back edge |
| Coin | `CylinderGeometry(0.3, 0.3, 0.08, 24)` |
| Torch pole | `CylinderGeometry(0.05, 0.05, 1.2, 8)` |
| Torch flame | `ConeGeometry(0.1, 0.3, 8)` |
| Sign post | `CylinderGeometry(0.05, 0.05, 1.5, 8)` + `BoxGeometry(0.8, 0.4, 0.05)` |
| Fence post | `BoxGeometry(0.1, 1.0, 0.1)` |
| Fence rail | `BoxGeometry(1.0, 0.08, 0.08)` |
| Bush | `SphereGeometry(0.5, 8, 8)` slightly flattened |
| Flower stem | `CylinderGeometry(0.02, 0.02, 0.4, 6)` |
| Flower head | `SphereGeometry(0.12, 8, 8)` |

## Standard Animations

| Prop | Animation |
|------|-----------|
| Coin | continuous Y spin (`spinTrack`) |
| Torch flame | scale pulse + bob Y |
| Chest | lid opens: X rotation 0 → -π/2 (one-shot or loop) |
| Tree | gentle X sway: amplitude=0.05, slow D=4s |
| Floating collectible | bob Y + slow Y spin |
| Door | Y rotation 0 → π/2 (one-shot) |

## Color Conventions

| Context | Colors |
|---------|--------|
| Wood | `0x8b6914`, `0xa0785a` |
| Stone | `0x777777`, `0x888888`, `0x999999` |
| Metal | `0x888888` roughness 0.3, metalness 0.7 |
| Gold/coin | `0xffd700` roughness 0.2, metalness 0.9 |
| Gem | `0x4fc3f7` (blue), `0xe63946` (red), `0x69f0ae` (green) |
| Nature | `0x4a7c59` (dark green), `0x5a8a3c` (grass green) |
| Flame | `0xff6600` base, `0xffcc00` tip |

## Spec Location

New prop specs → `.agent/specs/props/<prop-name>/`
