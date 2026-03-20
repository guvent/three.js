# Tasks: Walker Character

## Delivered files
- [x] `examples/misc_walking_scene.html` — embedded in walking scene preview

## Asset components
- [x] Root group (Walker) + body, neck meshes
- [x] head group (named for animation track)
- [x] leftArm / rightArm groups with arm mesh + hand sphere
- [x] leftLeg / rightLeg groups with leg mesh + shoe capsule
- [x] Hair (SphereGeometry hemisphere)
- [x] Eyes (2× SphereGeometry)
- [x] MeshToonMaterial on all meshes

## Animations
- [x] Walk clip (D=2s, N=17) — bob Y + head nod + arm/leg swing
- [x] Path traversal — character walks Z axis between -6 and +6, flips on turnaround

## Shadows
- [x] All meshes set `castShadow = true` + `receiveShadow = true` via `root.traverse`
