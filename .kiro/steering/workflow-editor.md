---
inclusion: auto
description: Shared editor integration rules for all asset types — hard constraints, animation helpers, light setup, AddObjectCommand pattern, and delivery checklist.
---

# Shared Editor Workflow Rules

These rules apply to ALL asset types produced in this workspace.
This workspace is the Three.js source repository used as a shared 3D asset creation tool for mobile game development.

## The Team

| Who | Does what |
|-----|-----------|
| Kiro | Builds 3D assets — geometry, materials, animation — and delivers them via the editor Add menu and standalone HTML previews |
| Developer | Integrates assets into mobile game projects using GL libraries of their choice; owns all game logic and software architecture |

## How to Request an Asset

Just describe what you need in plain language:
- "Give me a spinning gold coin"
- "I need a stone wall platform"
- "Build a goblin character with an idle animation"
- "Make a torch with flickering flame"

Kiro will pick the right role, build the asset, and deliver:
1. An entry in `Add` menu of the editor (`editor/js/Menubar.Add.js`)
2. A standalone preview at `examples/misc_<name>.html`

## Hard Rules (apply to every asset)

- **Never touch `src/`** — no changes to Three.js core source files
- **Editor assets go in `editor/js/Menubar.Add.js`** — new `option` block before `return container`
- **`MeshStandardMaterial` in editor** — works with default environment lighting
- **`MeshToonMaterial` in standalone previews** — clean game-art look
- **Auto-add lights** — check `editor.scene.children.some(c => c.isLight)` first; if false, add `AmbientLight(0xffffff, 1.5)` + `DirectionalLight(0xfff0cc, 2)` at `(5, 10, 5)` via `AddObjectCommand`
- **Always use `editor.execute(new AddObjectCommand(editor, object))`** — never `scene.add()` directly
- **Animate via `editor.mixer`** — `AnimationClip` + `editor.mixer.clipAction(clip, root).play()`
- **No bundling** — static file server only; use the `three` importmap

## Animation Helpers (shared across all roles)

```javascript
const D = 2, N = 17;
const times = Array.from({ length: N }, (_, i) => (i / (N - 1)) * D);

function sineQuatTrack(name, amplitude, phase, axisVec = new THREE.Vector3(1, 0, 0)) {
    const q = new THREE.Quaternion();
    const values = [];
    for (let i = 0; i < N; i++) {
        const angle = amplitude * Math.sin((times[i] / D) * Math.PI * 2 + phase);
        q.setFromAxisAngle(axisVec, angle);
        values.push(q.x, q.y, q.z, q.w);
    }
    return new THREE.QuaternionKeyframeTrack(name, times, values);
}

function spinTrack(name, axisVec = new THREE.Vector3(0, 1, 0)) {
    const q = new THREE.Quaternion();
    const values = [];
    for (let i = 0; i < N; i++) {
        q.setFromAxisAngle(axisVec, (times[i] / D) * Math.PI * 2);
        values.push(q.x, q.y, q.z, q.w);
    }
    return new THREE.QuaternionKeyframeTrack(name, times, values);
}

function bobTrack(name, baseY, amplitude) {
    return new THREE.NumberKeyframeTrack(name, times,
        times.map(t => baseY + amplitude * Math.sin((t / D) * Math.PI * 2)));
}

function pulseTrack(name, base, amplitude) {
    const vals = times.map(t => base + amplitude * Math.sin((t / D) * Math.PI * 2));
    return new THREE.NumberKeyframeTrack(name, times, vals);
}
```

## Spec Tracking — Required for Every Asset

Every asset built MUST have a corresponding spec folder created or updated in `.kiro/specs/`.
This keeps a living record of everything built and makes assets repeatable across sessions.

### Folder mapping

| Asset type | Spec location |
|------------|--------------|
| Character | `.kiro/specs/characters/<asset-name>/` |
| Prop / Decoration | `.kiro/specs/props/<asset-name>/` |
| Terrain / Ground | `.kiro/specs/terrain/<asset-name>/` |
| FX / Ornament | `.kiro/specs/fx/<asset-name>/` |
| Animation set | `.kiro/specs/animations/<asset-name>/` |

### Files to create in each spec folder

**`tasks.md`** — created at the START of building an asset, updated as work progresses:

```markdown
# Tasks: <Asset Name>

## Delivered files
- [ ] `editor/js/Menubar.Add.js` — Add menu entry
- [ ] `examples/misc_<name>.html` — standalone preview

## Asset components
- [ ] Root group + static meshes
- [ ] Animatable sub-groups (named correctly)
- [ ] Materials (MeshStandardMaterial)
- [ ] AnimationClip + keyframe tracks
- [ ] Lights auto-add guard
- [ ] editor.mixer.clipAction.play()

## Animations
- [ ] <clip name> — <description>
```

Mark tasks `[x]` as each step is completed.

**`design.md`** — created AFTER the asset is built, documents what was made:

```markdown
# Design: <Asset Name>

## Category
Character | Prop | Terrain | FX | Animation

## Description
One sentence describing the asset.

## Geometry
| Part | Geometry | Color |
|------|----------|-------|
| ...  | ...      | ...   |

## Animations
| Clip | Duration | Loop | Tracks |
|------|----------|------|--------|
| ...  | ...      | ...  | ...    |

## Delivered files
- `editor/js/Menubar.Add.js` — menu entry name: `<Name>`
- `examples/misc_<name>.html` — standalone preview
```

### When to update specs

- **New asset requested** → create `tasks.md` immediately, mark items as you go
- **Asset delivered** → mark all tasks `[x]`, create `design.md`
- **Animation added to existing asset** → update the asset's `tasks.md` and `design.md`
- **Bug fixed on existing asset** → add a note to `design.md` under a `## Fixes` section

---

## Delivery Checklist

- [ ] Named sub-groups match AnimationClip track paths exactly
- [ ] `MeshStandardMaterial` used in editor version
- [ ] Lights auto-added when scene has none
- [ ] `AddObjectCommand` used for every scene addition
- [ ] `editor.mixer.clipAction(clip, root).play()` called after adding to scene
- [ ] No new imports added to `Menubar.Add.js`
- [ ] No changes to `src/`
- [ ] Standalone `examples/misc_<name>.html` created
- [ ] `tasks.md` created and all items marked complete
- [ ] `design.md` created documenting geometry, materials, animations
