---
inclusion: auto
description: FX and Ornament Artist rules for building visual effects, particles, halos, sparkles, and UI decorations in the Three.js editor.
---

# Role: FX & Ornament Artist

Activated when the request involves **visual effects, particles, UI decorations, halos, score popups, sparkles, or ambient atmosphere**.

## How to Identify This Role

Keywords: effect, FX, particle, sparkle, glow, halo, ring, star, burst, popup, score, icon, badge, aura, trail, smoke, dust, bubble, snowflake, confetti, ornament, decoration, ambient

## FX Structure

```
FXRoot (THREE.Group, name = 'FXName')
  ├── core mesh(es)     — main visible element
  ├── ring / halo       — outer glow ring (optional)
  └── particles         — small orbiting/floating meshes (optional)
```

FX assets are typically small, looping, and attention-grabbing. Keep geometry counts low — these may be instanced many times in a game scene.

## Geometry Palette

| FX Element | Geometry | Notes |
|------------|----------|-------|
| Halo / ring | `TorusGeometry(r, 0.04, 8, 32)` | flat ring around object |
| Star shape | `TorusGeometry(0.2, 0.05, 4, 5)` | low-segment torus = star |
| Sparkle | `OctahedronGeometry(0.08, 0)` | tiny diamond |
| Bubble | `SphereGeometry(r, 8, 8)` transparent | |
| Dust mote | `SphereGeometry(0.04, 4, 4)` | very low poly |
| Score popup | `BoxGeometry(0.6, 0.3, 0.02)` | flat billboard placeholder |
| Aura disc | `CylinderGeometry(r, r, 0.02, 32)` | flat circle on ground |
| Burst ray | `ConeGeometry(0.04, 0.4, 4)` | thin spike, rotated outward |
| Snowflake | 6× `BoxGeometry(0.3, 0.04, 0.04)` rotated 60° each | |
| Confetti | `BoxGeometry(0.1, 0.15, 0.02)` | flat rectangle, random rotation |

## Material Conventions

FX materials are often transparent or emissive:

```javascript
// Glowing ring
new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffd700, emissiveIntensity: 0.5 })

// Transparent bubble
new THREE.MeshStandardMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4, roughness: 0.0 })

// Sparkle
new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.0 })
```

## Standard Animations

| FX | Animation |
|----|-----------|
| Halo | continuous Y spin (`spinTrack`) |
| Floating star | bob Y + slow Y spin |
| Sparkle orbit | position X/Z sine tracks (circular orbit) |
| Aura pulse | scale X/Z pulse (disc grows/shrinks) |
| Score popup | position Y track (rises up), scale pulse |
| Burst | scale track 0→1→0 (one-shot, use `LoopOnce`) |
| Snowflake | slow Y spin + gentle bob |
| Confetti | Y spin + bob, random phase per piece |

## One-Shot vs Loop

- **Loop** (`LoopRepeat`): ambient effects — halos, orbiting sparkles, floating icons
- **One-shot** (`LoopOnce`): triggered effects — burst, score popup, hit flash

For one-shot clips in the editor, set `action.clampWhenFinished = true` after `action.play()`.

## Color Conventions

| FX type | Colors |
|---------|--------|
| Gold / coin | `0xffd700`, `0xffaa00` |
| Magic / mana | `0x9b59b6`, `0x4fc3f7` |
| Fire | `0xff6600`, `0xffcc00` |
| Ice | `0xaaddff`, `0xffffff` |
| Poison | `0x69f0ae`, `0x00c853` |
| Heal | `0xff80ab`, `0xffffff` |
| Score / XP | `0xffffff`, `0xffd700` |
| Danger / hit | `0xe63946`, `0xff1744` |

## Spec Location

New FX specs → `.kiro/specs/fx/<fx-name>/`
