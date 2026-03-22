# Cute Penguin Design

## Overview
A charming penguin character asset created under the "Character Artist" workflow. It uses black and white contrasting shapes, a sharp orange beak, and waddling animations.

## Geometry
- **Root**: `CutePenguin` (Group)
- **Body**: CapsuleGeometry back (black), CapsuleGeometry belly (white).
- **Head**: SphereGeometry base (black), face mask using partial SphereGeometry (white).
- **Beanie**: SphereGeometry hemisphere (red) with a pom-pom (white).
- **Scarf**: TorusGeometry ring (red) around the neck with a CapsuleGeometry tail (red).
- **Beak**: ConeGeometry (orange).
- **Flippers**: CapsuleGeometry (black) for left and right arms.
- **Feet**: CapsuleGeometry (orange) flattened for left and right legs.
- **Eyes**: Black spheres with white highlights.

## Animations
The root object contains an `.animations` array with:
1. `CharacterWalk` (2s loop): Double-frequency bobbing Y displacement to prevent limping, side-to-side Z-axis sway, and custom leg step tracks that lift off the ground only during the forward swing.
2. `CharacterIdle` (2s loop): Very gentle Y bobbing to simulate breathing.

## Materials
- In Editor: `MeshStandardMaterial` with roughness=0.8.
- In Preview: `MeshToonMaterial` for a stylized game-art look.

## Delivery Files
- `editor/js/Menubar.Add.js` (Added to Add > Cute Penguin menu)
- `examples/misc_cute_penguin.html` (Standalone preview featuring a walk cycle)
