# Terrain: Winter Road

We are going to build a new terrain asset representing a long stretch of land covered in snow, with a road in the middle and piles of snow on the sides.

## User Review Required
Please review the colors and geometry choices for the Winter Road. 

## Proposed Changes

### Editor Assets
#### [MODIFY] [Menubar.Add.js](file:///Users/bln-guvent/three.js/editor/js/Menubar.Add.js)
- Add "Winter Road" to the Add menu.
- Create a `THREE.Group` named `WinterRoad`.
- Add **Ground**: `PlaneGeometry(20, 60)`, rotated X -90°. Material: `MeshStandardMaterial({ color: 0xeeeeff, roughness: 1.0 })`.
- Add **Road**: `PlaneGeometry(4, 60)`, rotated X -90°, position Y=0.01 (to prevent Z-fighting). Material: `MeshStandardMaterial({ color: 0x777777, roughness: 0.8 })` (Stone/Dirt).
- Add **Snow Piles**: Multiple scattered `DodecahedronGeometry(r, 0)` with varying radii and subtle non-uniform scaling, placed along X = -2.5 to -3.5 and X = 2.5 to 3.5. Material: `MeshStandardMaterial({ color: 0xeeeeff, roughness: 1.0 })`.
- Use `editor.execute(new AddObjectCommand(editor, object))` to add the group to the scene.
- Auto-add `AmbientLight` and `DirectionalLight` if non-existent.

### Standalone Preview
#### [NEW] [misc_winter_road.html](file:///Users/bln-guvent/three.js/examples/misc_winter_road.html)
- Standalone HTML preview using `MeshToonMaterial` instead of `StandardMaterial` to achieve the game-art look.
- Includes `OrbitControls` and basic lighting to preview the terrain structure.

## Verification Plan

### Automated Tests
- Run `npm run dev` and navigate to `http://localhost:8080/examples/misc_winter_road.html` to visually verify the standalone preview and ensure `MeshToonMaterial` looks correct.
- Navigate to `http://localhost:8080/editor/` to verify the menu addition and `MeshStandardMaterial` rendering.

### Manual Verification
- Check if the road and ground have no z-fighting.
- Verify snow piles look natural along the road edges.
