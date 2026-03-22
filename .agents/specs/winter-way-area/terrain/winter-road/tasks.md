# Winter Road Terrain Tasks

## 1. Setup
- [ ] Create `winter-road` directory under `.agents/specs/winter-way-area/terrain/`
- [ ] Create this `tasks.md` file (done)

## 2. Editor Integration (`editor/js/Menubar.Add.js`)
- [ ] Add "Winter Road" under the Add menu.
- [ ] Implement `WinterRoad` group creation:
  - Base ground: `PlaneGeometry(20, 60)` with white snow material `0xeeeeff`
  - Road surface: `PlaneGeometry(4, 60)` positioned at Y=0.01 with dirt/stone material `0x888888`
  - Snow piles: Multiple `DodecahedronGeometry` or offset `SphereGeometry` items placed along the left and right edges of the road
- [ ] Ensure all editor materials use `MeshStandardMaterial`.
- [ ] Auto-add environment light if missing: `AmbientLight(0xffffff, 1.5)` and `DirectionalLight(0xfff0cc, 2)`.

## 3. Standalone Preview (`examples/misc_winter_road.html`)
- [ ] Copy a boilerplate misc example template.
- [ ] Recreate the "Winter Road" terrain inside the standalone file.
- [ ] Switch all materials to `MeshToonMaterial` for the game-art look.
- [ ] Set up OrbitControls and camera.

## 4. Documentation
- [ ] Create `design.md` inside the spec folder detailing the exact geometry, materials, and colors used.
