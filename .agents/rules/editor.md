---
trigger: always_on
---

# Antigravity Shared Editor Workflow Rules

These rules apply when Antigravity builds and delivers 3D assets in this Three.js workspace.

## Hard Rules

- **Never touch `src/`**: No modifications to the Three.js core source code are allowed.
- **Editor Assets (*Mandatory*)**: All assets must be added to `editor/js/Menubar.Add.js` via a new `option` block.
- **Standalone Previews (*Mandatory*)**: Every new asset requires a corresponding standalone preview at `examples/misc_<name>.html`.
- **Material Rules**:
  - Use `MeshStandardMaterial` for assets inside the editor environment.
  - Use `MeshToonMaterial` for assets in the standalone preview to achieve a game-art look.
- **Lighting**:
  - In scenes lacking lights (`editor.scene.children.some(c => c.isLight)` is false), auto-add an `AmbientLight(0xffffff, 1.5)` and a `DirectionalLight(0xfff0cc, 2)` mapped to `(5, 10, 5)`.
- **Scene Addition**: Always insert objects using `editor.execute(new AddObjectCommand(editor, object))`. Never use `scene.add()` directly.
- **Animations**: Add animation tracks via `AnimationClip` and trigger them via `editor.mixer.clipAction(clip, root).play()`.

## Spec Tracking Requirements

All work done by Antigravity must fall within a **work name** (e.g., `forest-level`, `robot-character`).
Specs related to this work should be tracked under `.agents/specs/<work_name>/`.
This directory will contain:
1. `tasks.md`: Used to outline steps needed to build the asset.
2. `design.md`: Created after the asset is completed to document geometry, animations, and delivery files.

When starting a session, ask the user what the current `<work_name>` should be if it is not immediately clear from the context. Do not intermix assets from different sessions.