# Tasks: Puppet Character

## Delivered files
- [x] `editor/js/Menubar.Add.js` — Add menu entry ("Puppet")
- [x] `examples/misc_puppet.html` — standalone preview

## Asset components
- [x] Root group (Puppet) + body, neck meshes
- [x] head group (named for animation track)
- [x] leftArm / rightArm groups with arm mesh + hand sphere
- [x] leftLeg / rightLeg groups with leg mesh + shoe capsule
- [x] Eyes (2× SphereGeometry)
- [x] Nose (SphereGeometry)
- [x] Mouth (TorusGeometry half-arc)
- [x] Ears (2× SphereGeometry)
- [x] Hair (SphereGeometry hemisphere)
- [x] Puppet strings + crossbar (CylinderGeometry lines)
- [x] MeshStandardMaterial in editor version
- [x] MeshToonMaterial in standalone preview
- [x] Lights auto-add guard (AmbientLight + DirectionalLight)
- [x] AddObjectCommand used for all scene additions
- [x] editor.mixer.clipAction(clip, root).play()

## Animations
- [x] PuppetWalk (D=2s, N=17) — bob Y + head nod + arm/leg swing (QuaternionKeyframeTrack + NumberKeyframeTrack)
