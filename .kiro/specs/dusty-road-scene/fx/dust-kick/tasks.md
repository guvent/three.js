# Tasks: Dust Kick FX

## Delivered files
- [x] `editor/js/Menubar.Add.js` — Add menu entry (inside 'Dusty Road Scene')
- [x] `examples/misc_dusty_road_scene.html` — standalone preview

## Asset components
- [x] Dust material — MeshStandardMaterial, color 0xd4b896, transparent, depthWrite: false
- [x] Pool of 6 puff groups, 6 sphere particles each
- [x] spawnDust(x, z) — round-robin pool activation, reset position/opacity/scale
- [x] tickDust — per-frame life advance, ease-out velocity, scale curve, opacity fade
- [x] Footfall detection via mirrored leg sine wave (prevLA/prevRA threshold crossing)
- [x] sceneRoot.userData.onUpdate hook for per-frame dispatch
- [x] MeshToonMaterial in standalone preview
