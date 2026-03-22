# Cute Penguin Implementation

This plan outlines the creation of a new "Cute Penguin" character asset for the Three.js editor and its standalone preview.

## Proposed Changes

### Editor Integration
#### [MODIFY] [Menubar.Add.js](file:///Users/bln-guvent/three.js/editor/js/Menubar.Add.js)
Add a new option to [editor/js/Menubar.Add.js](file:///Users/bln-guvent/three.js/editor/js/Menubar.Add.js) under the "Add" menu.
Geometry for the Cute Penguin:
- **Root**: `CutePenguin` (THREE.Group)
- **Body**: CapsuleGeometry (black back, white belly)
- **Head**: SphereGeometry (black with white face mask)
- **Beak**: ConeGeometry (orange)
- **Eyes**: Small dark spheres
- **Flippers (leftArm, rightArm)**: CapsuleGeometry flattened, black
- **Feet (leftLeg, rightLeg)**: CapsuleGeometry (orange)
Animations:
- `CharacterWalk` (bob Y, flipper swing, waddle sway rotation Z, foot step)
- `CharacterIdle` (gentle breathing bob, slow head nod)

### Standalone Preview
#### [NEW] [misc_cute_penguin.html](file:///Users/bln-guvent/three.js/examples/misc_cute_penguin.html)
Create a new standalone example to showcase the penguin.
- Use `MeshToonMaterial` for the game-art look as specified in the rules.
- Set up a basic scene with lighting (Ambient + Directional)
- Add the `CutePenguin` character with its animations, utilizing `THREE.AnimationMixer`.

### Specs
#### [NEW] [design.md](file:///Users/bln-guvent/three.js/.agents/specs/cute-penguin/characters/cute-penguin/design.md)
Document the final specs in the required folder.

## Verification Plan
### Automated Tests
- The Three.js dev server is already running on port 8080.
- Verify the generated `misc_cute_penguin.html` by opening it in the browser subagent (`http://localhost:8080/examples/misc_cute_penguin.html`).
- Check for any console errors and visually confirm the animation.
### Manual Verification
- Ask the user to open the Three.js editor (`http://localhost:8080/editor/`), use `Add -> Cute Penguin`, and verify the geometry and animations.
