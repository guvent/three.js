# Tasks: Animal Walker

## Delivered files
- [x] `editor/js/Menubar.Add.js` — Add menu entry (inside 'Dusty Road Scene')
- [x] `examples/misc_dusty_road_scene.html` — standalone preview

## Asset components
- [x] walker root group at position.y = 1
- [x] body — CapsuleGeometry(0.28, 0.5), 0xe63946
- [x] neck — CylinderGeometry(0.08, 0.1, 0.15)
- [x] head group — SphereGeometry(0.28) + hair + 2× eyes
- [x] leftArm / rightArm groups — pivot at shoulder, CapsuleGeometry arm + hand
- [x] leftLeg / rightLeg groups — pivot at hip, CapsuleGeometry leg + shoe
- [x] MeshStandardMaterial in editor, MeshToonMaterial in standalone preview

## Animations
- [x] WalkerWalk (2s, LoopRepeat) — position[y] bob + head/arm/leg quaternion tracks
- [x] editor.mixer.clipAction(walkClip, sceneRoot).play()
- [x] sceneRoot.animations = [walkClip]
