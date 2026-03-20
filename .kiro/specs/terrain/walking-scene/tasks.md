# Tasks: Walking Scene

## Delivered files
- [x] `examples/misc_walking_scene.html` — standalone preview

## Asset components
- [x] Grass ground plane (PlaneGeometry 20×20, MeshToonMaterial 0x5a8a3c)
- [x] Dirt path (BoxGeometry 1.4×0.02×10, MeshToonMaterial 0xa0785a)
- [x] Sky background color (0x87ceeb) + fog
- [x] AmbientLight + DirectionalLight with shadow (tight shadow camera, bias -0.001)
- [x] SpotLight overhead — follows Walker each frame, casts crisp downward shadow
- [x] OrbitControls
- [x] All Walker meshes set castShadow + receiveShadow via traverse

## Notes
- Scene hosts the Walker character (see `.kiro/specs/characters/walker/`)
- No editor Add menu entry — standalone preview only
