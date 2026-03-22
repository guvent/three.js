# Winter Road Spec

**Asset Name:** WinterRoad
**Type:** Terrain
**Work Name:** winter-way-area

## Geometry & Structure
The `WinterRoad` is a `THREE.Group` consisting of the following elements:
- `road`: A `PlaneGeometry(4, 240)` representing a straight white ground running down the center, sitting at `Y=0.01` to simulate a plowed road level.
- `leftGround` & `rightGround`: `ExtrudeGeometry` defining the raised snowbanks and deep surrounding snow base, giving the appearance of accumulated snow over the entire area that was cut through by a plow. The inner edges curve inward smoothly at `Y=0.5`. Set with depth `240` to match.
- `hills`: A `THREE.Group` containing 60 gentle mounds. Made from non-uniformly flattened `SphereGeometry` to create wide, smooth hills scattered on top of the deep snow.

## Materials & Colors
**Editor Version (`Menubar.Add.js`)** uses `MeshStandardMaterial`:
- `leftGround`, `rightGround`, `hills`: `0xeeeeff` (Snow White)
- `road`: `0xaaddff` (Ice Blue Road Surface)

**Standalone Preview (`misc_winter_road.html`)** uses `MeshToonMaterial` to achieve the requested game-art look, using identical color hex codes.

## Integration Details
- **Menu Entry:** Added to `editor/js/Menubar.Add.js` under the name "Winter Road". Automatically injects an `AmbientLight` (1.5) and a `DirectionalLight` (2.0) if the scene is empty upon insertion.
- **Preview:** Accessible locally at `examples/misc_winter_road.html`.
