# Tasks: Dusty Road Terrain

## Delivered files
- [x] `editor/js/Menubar.Add.js` — Add menu entry (inside 'Dusty Road Scene')
- [x] `examples/misc_dusty_road_scene.html` — standalone preview

## Asset components
- [x] Root group (DustyRoadScene)
- [x] ground — PlaneGeometry(28,28), MeshStandardMaterial 0x5a8a3c, rotated -π/2
- [x] shoulder — BoxGeometry(3.2, 0.015, 14), 0xb8956a
- [x] road — BoxGeometry(2.2, 0.02, 14), 0xc4a882
- [x] trackL / trackR — BoxGeometry(0.18, 0.021, 14), 0xa8906a at ±0.55
- [x] Y-offset stacking to avoid z-fighting
- [x] MeshStandardMaterial in editor, MeshToonMaterial in standalone preview
