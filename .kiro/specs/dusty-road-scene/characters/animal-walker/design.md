# Design: Animal Walker

## Category
Character

## Description
Simple biped animal character assembled from primitives, walking in place via a looping AnimationClip with counter-phase arm/leg swings.

## Geometry
| Part | Geometry | Color |
|------|----------|-------|
| body | CapsuleGeometry(0.28, 0.5, 8, 16) | 0xe63946 |
| neck | CylinderGeometry(0.08, 0.1, 0.15, 12) | 0xf4c07a |
| head | SphereGeometry(0.28, 32, 32) | 0xf4c07a |
| hair | SphereGeometry(0.29, 32, 16, 0, π*2, 0, π*0.45) | 0x3d2b1f |
| eyes (×2) | SphereGeometry(0.04, 16, 16) | 0x1d3557 |
| arms (×2) | CapsuleGeometry(0.07, 0.35, 8, 12) | 0xe63946 |
| hands (×2) | SphereGeometry(0.07, 12, 12) | 0xf4c07a |
| legs (×2) | CapsuleGeometry(0.09, 0.4, 8, 12) | 0x457b9d |
| shoes (×2) | CapsuleGeometry(0.08, 0.14, 8, 8) rotated X +90° | 0x1d3557 |

## Animations
| Clip | Duration | Loop | Tracks |
|------|----------|------|--------|
| WalkerWalk | 2s | LoopRepeat | position[y] bob (amp 0.08), head quat (0.06), leftArm (0.6, phase 0), rightArm (0.6, phase π), leftLeg (0.4, phase π), rightLeg (0.4, phase 0) |

## Delivered files
- `editor/js/Menubar.Add.js` — menu entry name: `Dusty Road Scene`
- `examples/misc_dusty_road_scene.html` — standalone preview
