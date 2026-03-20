# Design: Walker Character

## Category
Character

## Description
A humanoid toon-shaded character with a looping walk cycle that paces back and forth along a dirt path.

## Geometry

| Part | Geometry | Color |
|------|----------|-------|
| Body | `CapsuleGeometry(0.28, 0.5, 8, 16)` | `0xe63946` (red shirt) |
| Neck | `CylinderGeometry(0.08, 0.1, 0.15, 12)` | `0xf4c07a` (skin) |
| Head | `SphereGeometry(0.28, 32, 32)` | `0xf4c07a` (skin) |
| Hair | `SphereGeometry(0.29, 32, 16, 0, π*2, 0, π*0.45)` | `0x3d2b1f` (dark brown) |
| Eyes (×2) | `SphereGeometry(0.04, 16, 16)` | `0x1d3557` (dark blue) |
| Arms (×2) | `CapsuleGeometry(0.07, 0.35, 8, 12)` | `0xe63946` (red) |
| Hands (×2) | `SphereGeometry(0.07, 12, 12)` | `0xf4c07a` (skin) |
| Legs (×2) | `CapsuleGeometry(0.09, 0.4, 8, 12)` | `0x457b9d` (blue jeans) |
| Shoes (×2) | `CapsuleGeometry(0.08, 0.14, 8, 8)` rotated X +90° | `0x1d3557` (dark) |

## Animatable groups

| Group name | Track path | Role |
|------------|------------|------|
| `head` | `head.quaternion` | gentle nod |
| `leftArm` | `leftArm.quaternion` | forward swing |
| `rightArm` | `rightArm.quaternion` | opposite-phase swing |
| `leftLeg` | `leftLeg.quaternion` | opposite-phase swing |
| `rightLeg` | `rightLeg.quaternion` | forward swing |

## Animations

| Clip | Duration | Loop | Tracks |
|------|----------|------|--------|
| Walk | 2s | LoopRepeat | `.position[y]` bob (amp 0.08) + 5 quaternion tracks |

## Path traversal
- Walks Z axis between -6 and +6 at 2 units/second
- Flips `rotation.y` by π on turnaround

## Shadows
- All meshes: `castShadow = true`, `receiveShadow = true` (set via `root.traverse` after `scene.add`)
- Receives crisp downward shadow from the scene's overhead `SpotLight` (see walking-scene terrain spec)

## Delivered files
- `examples/misc_walking_scene.html` — embedded in walking scene

## Related specs
- `.kiro/specs/terrain/walking-scene/` — the scene this character lives in
