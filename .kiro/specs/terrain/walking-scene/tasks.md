# Tasks: Walking Scene

## Delivered files
- [x] `editor/js/Menubar.Add.js` — Walking Scene entry
- [x] `examples/misc_walking_scene.html` — standalone preview

## Asset components
- [x] Grass ground plane (PlaneGeometry 28×28, MeshToonMaterial 0x5a8a3c)
- [x] Road shoulder (BoxGeometry 3.2×0.015×14, 0xb8956a)
- [x] Dusty road surface (BoxGeometry 2.2×0.02×14, 0xc4a882)
- [x] Worn wheel tracks (×2, BoxGeometry 0.18×0.021×14, 0xa8906a)
- [x] Dust patches (×8 CylinderGeometry, transparent 0xd4b896)
- [x] Sky background color (0x87ceeb) + fog
- [x] AmbientLight + DirectionalLight with shadow
- [x] SpotLight overhead — follows Walker each frame
- [x] OrbitControls
- [x] All Walker meshes set castShadow + receiveShadow via traverse

## Notes
- Scene hosts the Walker character (see `.kiro/specs/characters/walker/`)
- Footstep dust FX embedded (see `.kiro/specs/fx/footstep-dust/`)
