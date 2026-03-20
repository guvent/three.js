# Design: Footstep Dust FX

## Category
FX

## Description
Dust puffs that spawn at the Walker's feet on each footstep, scatter outward, rise, and fade — giving the dusty road a lived-in feel.

## Geometry

| Part | Geometry | Color |
|------|----------|-------|
| Dust particle (×6 per puff) | `SphereGeometry(0.07–0.12, 4, 4)` | `0xd4b896` |

## Pool
- 6 reusable puff groups, each with 6 particles
- Footstep detected via leg-swing zero-crossing (phase tracking)
- Left foot fires at phase π crossing, right foot at phase 0 crossing

## Animation

| Clip | Duration | Loop | Tracks |
|------|----------|------|--------|
| DustPuff (per-frame) | 0.55s | LoopOnce | position XYZ scatter + scale 0→1→0 + opacity fade |

## Delivered files
- `examples/misc_walking_scene.html` — embedded in walking scene
- `editor/js/Menubar.Add.js` — included in Walking Scene entry

## Related specs
- `.kiro/specs/terrain/walking-scene/` — scene context
- `.kiro/specs/characters/walker/` — character that triggers the FX
