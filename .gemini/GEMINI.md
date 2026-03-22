# Antigravity Workspace Rules

These rules define the required behavior, workflows, and role-specific capabilities for generating assets in this project.

## From role-terrain.md

---
description: Terrain and Ground Artist rules for building walkable surfaces, platforms, walls, ramps, and water in the Three.js editor.
---

# Role: Terrain & Ground Artist

Activated when the request involves **surfaces the player walks or stands on** — ground tiles, platforms, walls, ramps, bridges, water surfaces.

## How to Identify This Role

Keywords: terrain, ground, floor, platform, tile, wall, ramp, bridge, path, road, grass, dirt, sand, stone floor, water, lava, ice, cliff, step, staircase

## Terrain Structure

```
TerrainRoot (THREE.Group, name = 'TerrainName')
  ├── ground   (THREE.Mesh)  — main walkable surface
  ├── features (THREE.Mesh)  — raised/lowered details (optional)
  └── trim     (THREE.Mesh)  — edge decoration (optional)
```

No animation required by default. Add gentle animation only for water, lava, or floating platforms.

## Geometry Palette

| Surface | Geometry | Notes |
|---------|----------|-------|
| Flat ground | `PlaneGeometry(w, h, 1, 1)` rotated X -90° | standard tile |
| Platform | `BoxGeometry(w, 0.3, d)` | raised walkable block |
| Thick wall | `BoxGeometry(0.3, h, d)` | vertical barrier |
| Ramp | `BoxGeometry(w, 0.2, d)` rotated X | angled surface |
| Step | stacked `BoxGeometry` slabs | staircase |
| Round platform | `CylinderGeometry(r, r, 0.3, 16)` | circular pad |
| Bridge plank | `BoxGeometry(1.0, 0.15, 0.4)` repeated | |
| Water surface | `PlaneGeometry(w, h, 8, 8)` rotated X -90° | animated vertices or UV scroll |
| Cliff face | `BoxGeometry` with non-uniform scale | |

## Material Conventions

| Surface | Color | Roughness | Metalness |
|---------|-------|-----------|-----------|
| Grass | `0x5a8a3c` | 0.9 | 0.0 |
| Dirt | `0xa0785a` | 1.0 | 0.0 |
| Stone | `0x777777` | 0.8 | 0.0 |
| Sand | `0xe8d5a3` | 0.9 | 0.0 |
| Wood | `0x8b6914` | 0.8 | 0.0 |
| Metal grate | `0x888888` | 0.4 | 0.7 |
| Water | `0x1a6b8a` | 0.1 | 0.0, transparent: true, opacity: 0.8 |
| Lava | `0xff4400` | 0.9 | 0.0 |
| Ice | `0xaaddff` | 0.05 | 0.1 |
| Snow | `0xeeeeff` | 1.0 | 0.0 |

## Animation (when needed)

| Surface | Animation |
|---------|-----------|
| Water | gentle Y bob on whole group, D=3s, amplitude=0.03 |
| Floating platform | bob Y, D=2s, amplitude=0.15 |
| Lava | slow Y bob + optional scale pulse |
| Moving platform | position X or Z track, linear back-and-forth |

## Sizing Conventions

- Standard tile unit: **1.0** (assets snap to a 1-unit grid)
- Platform thickness: **0.3**
- Wall height: **2.0–3.0**
- Ground plane for a scene: **10×10** minimum

## Spec Location

New terrain specs → `.agent/specs/terrain/<terrain-name>/`

---

## From role-fx.md

---
description: FX and Ornament Artist rules for building visual effects, particles, halos, sparkles, and UI decorations in the Three.js editor.
---

# Role: FX & Ornament Artist

Activated when the request involves **visual effects, particles, UI decorations, halos, score popups, sparkles, or ambient atmosphere**.

## How to Identify This Role

Keywords: effect, FX, particle, sparkle, glow, halo, ring, star, burst, popup, score, icon, badge, aura, trail, smoke, dust, bubble, snowflake, confetti, ornament, decoration, ambient

## FX Structure

```
FXRoot (THREE.Group, name = 'FXName')
  ├── core mesh(es)     — main visible element
  ├── ring / halo       — outer glow ring (optional)
  └── particles         — small orbiting/floating meshes (optional)
```

FX assets are typically small, looping, and attention-grabbing. Keep geometry counts low — these may be instanced many times in a game scene.

## Geometry Palette

| FX Element | Geometry | Notes |
|------------|----------|-------|
| Halo / ring | `TorusGeometry(r, 0.04, 8, 32)` | flat ring around object |
| Star shape | `TorusGeometry(0.2, 0.05, 4, 5)` | low-segment torus = star |
| Sparkle | `OctahedronGeometry(0.08, 0)` | tiny diamond |
| Bubble | `SphereGeometry(r, 8, 8)` transparent | |
| Dust mote | `SphereGeometry(0.04, 4, 4)` | very low poly |
| Score popup | `BoxGeometry(0.6, 0.3, 0.02)` | flat billboard placeholder |
| Aura disc | `CylinderGeometry(r, r, 0.02, 32)` | flat circle on ground |
| Burst ray | `ConeGeometry(0.04, 0.4, 4)` | thin spike, rotated outward |
| Snowflake | 6× `BoxGeometry(0.3, 0.04, 0.04)` rotated 60° each | |
| Confetti | `BoxGeometry(0.1, 0.15, 0.02)` | flat rectangle, random rotation |

## Material Conventions

FX materials are often transparent or emissive:

```javascript
// Glowing ring
new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffd700, emissiveIntensity: 0.5 })

// Transparent bubble
new THREE.MeshStandardMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4, roughness: 0.0 })

// Sparkle
new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.0 })
```

## Standard Animations

| FX | Animation |
|----|-----------|
| Halo | continuous Y spin (`spinTrack`) |
| Floating star | bob Y + slow Y spin |
| Sparkle orbit | position X/Z sine tracks (circular orbit) |
| Aura pulse | scale X/Z pulse (disc grows/shrinks) |
| Score popup | position Y track (rises up), scale pulse |
| Burst | scale track 0→1→0 (one-shot, use `LoopOnce`) |
| Snowflake | slow Y spin + gentle bob |
| Confetti | Y spin + bob, random phase per piece |

## One-Shot vs Loop

- **Loop** (`LoopRepeat`): ambient effects — halos, orbiting sparkles, floating icons
- **One-shot** (`LoopOnce`): triggered effects — burst, score popup, hit flash

For one-shot clips in the editor, set `action.clampWhenFinished = true` after `action.play()`.

## Color Conventions

| FX type | Colors |
|---------|--------|
| Gold / coin | `0xffd700`, `0xffaa00` |
| Magic / mana | `0x9b59b6`, `0x4fc3f7` |
| Fire | `0xff6600`, `0xffcc00` |
| Ice | `0xaaddff`, `0xffffff` |
| Poison | `0x69f0ae`, `0x00c853` |
| Heal | `0xff80ab`, `0xffffff` |
| Score / XP | `0xffffff`, `0xffd700` |
| Danger / hit | `0xe63946`, `0xff1744` |

## Spec Location

New FX specs → `.agent/specs/fx/<fx-name>/`

---

## From antigravity-workflow.md

---
description: Shared editor integration rules for Antigravity, including constraints, spec tracking requirements, and asset delivery.
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
Specs related to this work should be tracked under `.agent/specs/<work_name>/`.
This directory will contain:
1. `tasks.md`: Used to outline steps needed to build the asset.
2. `design.md`: Created after the asset is completed to document geometry, animations, and delivery files.

When starting a session, ask the user what the current `<work_name>` should be if it is not immediately clear from the context. Do not intermix assets from different sessions.

---

## From role-characters.md

---
description: Character Artist rules for building humanoid and creature figures with walk/idle animations in the Three.js editor.
---

# Role: Character Artist

Activated when the request involves a **humanoid or creature figure** — player characters, enemies, NPCs, bosses.

## How to Identify This Role

Keywords: character, player, enemy, NPC, hero, villain, monster, creature, humanoid, goblin, knight, wizard, robot, alien, puppet

## Character Structure

```
CharacterRoot (THREE.Group, name = 'CharacterName')
  ├── static meshes — body, neck, decorative parts
  ├── head       (THREE.Group)  ← head.quaternion
  ├── leftArm    (THREE.Group)  ← leftArm.quaternion
  ├── rightArm   (THREE.Group)  ← rightArm.quaternion
  ├── leftLeg    (THREE.Group)  ← leftLeg.quaternion
  └── rightLeg   (THREE.Group)  ← rightLeg.quaternion
```

Each animatable group's children are offset so the pivot sits at the joint (shoulder, hip).

## Geometry Palette

| Part | Geometry |
|------|----------|
| Body | `CapsuleGeometry(0.55, 1.0, 8, 16)` |
| Head | `SphereGeometry(0.55, 32, 32)` |
| Neck | `CylinderGeometry(0.15, 0.18, 0.3, 12)` |
| Arms | `CapsuleGeometry(0.13, 0.7, 8, 12)` |
| Legs | `CapsuleGeometry(0.16, 0.8, 8, 12)` |
| Hands | `SphereGeometry(0.14, 12, 12)` |
| Shoes | `CapsuleGeometry(0.14, 0.25, 8, 8)` rotated X +90° |
| Eyes | `SphereGeometry(0.08, 16, 16)` |
| Mouth | `TorusGeometry(0.13, 0.03, 8, 16, Math.PI)` rotated Z 180° |
| Ears | `SphereGeometry(0.12, 12, 12)` |
| Hair | `SphereGeometry(0.57, 32, 16, 0, π*2, 0, π*0.45)` |

## Standard Animations

Every character gets at minimum a **walk/idle clip** named `CharacterWalk`:

```
Walk cycle (D=2s):
  .position[y]        — bob: baseY=1, amplitude=0.12
  head.quaternion     — nod: amplitude=0.08, phase=0
  leftArm.quaternion  — swing: amplitude=0.6, phase=0
  rightArm.quaternion — swing: amplitude=0.6, phase=π
  leftLeg.quaternion  — swing: amplitude=0.4, phase=π
  rightLeg.quaternion — swing: amplitude=0.4, phase=0
```

Additional reaction clips (see role-animation.md) can be added on request.

## Color Conventions

| Part | Default |
|------|---------|
| Skin | `0xf4c07a` |
| Shirt/primary | designer's choice, saturated |
| Pants/secondary | designer's choice |
| Shoes | dark `0x1d3557` |
| Eyes | dark `0x1d3557` |
| Hair | dark brown `0x3d2b1f` |

## Spec Location

New character specs → `.agent/specs/characters/<character-name>/`

---

## From README.md

---
description: Quick reference guide for steering files and spec categories — manually include with #README in chat.
---

# Steering & Specs — Quick Reference

## How to Talk to Antigravity

Just describe what you need. Antigravity reads the role files automatically and picks the right one.

| You say | Antigravity activates |
|---------|---------------|
| "Give me a knight character" | `role-characters.md` |
| "I need a spinning coin" | `role-props.md` |
| "Build a grass platform" | `role-terrain.md` |
| "Add a gold halo effect" | `role-fx.md` |
| "Add a hit reaction to the puppet" | `role-animation.md` |

---

## Steering Files (auto-loaded every session)

| File | Role | Covers |
|------|------|--------|
| `antigravity-workflow.md` | Shared rules | Editor integration, hard constraints, animation helpers, delivery checklist |
| `role-characters.md` | Character Artist | Humanoids, creatures, NPCs — walk cycle, body structure |
| `role-props.md` | Prop Artist | Trees, coins, chests, torches, barrels — scene objects |
| `role-terrain.md` | Terrain Artist | Ground, platforms, walls, ramps, water |
| `role-fx.md` | FX Artist | Halos, sparkles, particles, score popups, auras |
| `role-animation.md` | Animator | Reaction clips — hit, die, jump, celebrate, idle |

---

## Specs Directory Structure

Every chat session gets its own `<work_name>` folder. All assets built in that session live under it.

```
.agent/specs/
  <work_name>/              ← one folder per chat session / scenario
    characters/             ← characters built in this session
      <asset-name>/
        tasks.md
        design.md
    props/                  ← props built in this session
      <asset-name>/
    terrain/                ← terrain built in this session
      <asset-name>/
    fx/                     ← FX built in this session
      <asset-name>/
    animations/             ← animation sets built in this session
      <asset-name>/
```

### Work name conventions

- Short lowercase slug: `walking-scene`, `forest-level`, `coin-collect`, `goblin-boss`
- Matches the theme or goal of the chat session
- Antigravity will ask you at the start of each session if it's not obvious from context

### Browsing past work

Each `<work_name>` folder is a self-contained record of one session.
Open any `design.md` to see exactly what was built and how to reproduce it.

---

## From role-animation.md

---
description: Animator rules for creating reaction and state animation clips — walk, idle, hit, die, jump, celebrate — on existing characters and props.
---

# Role: Animator

Activated when the request involves **adding a new animation clip to an existing asset** — reactions, states, one-shot events.

## How to Identify This Role

Keywords: animation, animate, reaction, response, idle, walk, run, jump, hit, die, death, celebrate, victory, attack, spin, wave, nod, blink, shake, bounce, fall, land, open, close, appear, disappear

## How Reaction Clips Work

A reaction clip is a separate `THREE.AnimationClip` added to the same root group as the character or prop. The editor's mixer can play multiple clips on the same root — the game code switches between them at runtime.

Each clip is named clearly: `CharacterWalk`, `CharacterIdle`, `CharacterHit`, `CharacterDie`, `CharacterCelebrate`

## Standard Reaction Library

### Characters

| Clip name | Description | Key tracks |
|-----------|-------------|------------|
| `Walk` | looping walk cycle | bob Y + arm/leg swing |
| `Idle` | gentle breathing stand | slow bob Y (amplitude 0.04) + slow head nod |
| `Jump` | upward leap | position Y: 1→3→1 over 0.6s |
| `Hit` | recoil backward | position Z: 0→-0.3→0, head shake X |
| `Die` | fall down | position Y: 1→0, rotation X: 0→-π/2 |
| `Celebrate` | arms up + bounce | leftArm/rightArm rotation X: 0→-π/2, bob Y amplitude 0.3 |
| `Attack` | forward punch | rightArm rotation X: 0→-π/3→0 |
| `Wave` | hand wave | rightArm rotation Z: 0→-π/4→0, slow loop |

### Props

| Clip name | Description | Key tracks |
|-----------|-------------|------------|
| `Idle` | ambient loop (spin, float, flicker) | depends on prop type |
| `Collect` | scale 1→0 + bob up (one-shot) | scale + position Y |
| `Open` | lid opens (chest) | lid rotation X: 0→-π/2 |
| `Activate` | pulse + spin (switch, button) | scale pulse + Y spin |
| `Destroy` | scale 1→0 (one-shot) | scale track |

## Timing Conventions

| Clip type | Duration | Loop |
|-----------|----------|------|
| Walk / Idle | 2s | `LoopRepeat` |
| Jump | 0.6s | `LoopOnce` |
| Hit | 0.4s | `LoopOnce` |
| Die | 0.8s | `LoopOnce` |
| Celebrate | 1.5s | `LoopRepeat` |
| Attack | 0.5s | `LoopOnce` |
| Collect | 0.3s | `LoopOnce` |
| Open | 0.6s | `LoopOnce` |

## One-Shot Clip Pattern

```javascript
const action = editor.mixer.clipAction(hitClip, root);
action.setLoop(THREE.LoopOnce, 1);
action.clampWhenFinished = true;
action.reset().play();
```

## Multiple Clips on One Root

When delivering a character with multiple clips, add all clips to the root's `.animations` array so the editor's Animation panel can see them:

```javascript
root.animations = [ walkClip, idleClip, hitClip, dieClip ];

// Play the default clip
editor.mixer.clipAction(walkClip, root).play();
```

## Spec Location

New animation specs → `.agent/specs/animations/<asset-name>-animations/`

---

## From role-props.md

---
description: Prop and Decoration Artist rules for building scene objects — trees, coins, chests, torches, barrels, and other animated or static props in the Three.js editor.
---

# Role: Prop & Decoration Artist

Activated when the request involves a **scene object** — something placed in the world that is not a character or terrain.

## How to Identify This Role

Keywords: prop, decoration, object, tree, rock, barrel, chest, coin, torch, sign, fence, crate, bush, flower, lamp, pillar, statue, door, window, bridge, ladder

## Prop Structure

```
PropRoot (THREE.Group, name = 'PropName')
  ├── base mesh(es) — main visible shape
  └── animated parts (THREE.Group, descriptive name)
      e.g. 'flame', 'lid', 'blade', 'coin', 'leaf'
```

No fixed naming convention — use clear descriptive names that match the AnimationClip track paths.

## Geometry Palette

| Prop | Geometry |
|------|----------|
| Tree trunk | `CylinderGeometry(0.15, 0.2, 1.5, 8)` |
| Tree top | `ConeGeometry(0.7, 1.2, 8)` or `SphereGeometry(0.7, 8, 8)` |
| Rock | `DodecahedronGeometry(r, 0)` r=0.4–0.8, slightly scaled non-uniformly |
| Barrel | `CylinderGeometry(0.3, 0.3, 0.6, 12)` |
| Crate | `BoxGeometry(0.7, 0.7, 0.7)` |
| Chest body | `BoxGeometry(0.8, 0.5, 0.6)` |
| Chest lid | `BoxGeometry(0.8, 0.25, 0.6)` pivot at back edge |
| Coin | `CylinderGeometry(0.3, 0.3, 0.08, 24)` |
| Torch pole | `CylinderGeometry(0.05, 0.05, 1.2, 8)` |
| Torch flame | `ConeGeometry(0.1, 0.3, 8)` |
| Sign post | `CylinderGeometry(0.05, 0.05, 1.5, 8)` + `BoxGeometry(0.8, 0.4, 0.05)` |
| Fence post | `BoxGeometry(0.1, 1.0, 0.1)` |
| Fence rail | `BoxGeometry(1.0, 0.08, 0.08)` |
| Bush | `SphereGeometry(0.5, 8, 8)` slightly flattened |
| Flower stem | `CylinderGeometry(0.02, 0.02, 0.4, 6)` |
| Flower head | `SphereGeometry(0.12, 8, 8)` |

## Standard Animations

| Prop | Animation |
|------|-----------|
| Coin | continuous Y spin (`spinTrack`) |
| Torch flame | scale pulse + bob Y |
| Chest | lid opens: X rotation 0 → -π/2 (one-shot or loop) |
| Tree | gentle X sway: amplitude=0.05, slow D=4s |
| Floating collectible | bob Y + slow Y spin |
| Door | Y rotation 0 → π/2 (one-shot) |

## Color Conventions

| Context | Colors |
|---------|--------|
| Wood | `0x8b6914`, `0xa0785a` |
| Stone | `0x777777`, `0x888888`, `0x999999` |
| Metal | `0x888888` roughness 0.3, metalness 0.7 |
| Gold/coin | `0xffd700` roughness 0.2, metalness 0.9 |
| Gem | `0x4fc3f7` (blue), `0xe63946` (red), `0x69f0ae` (green) |
| Nature | `0x4a7c59` (dark green), `0x5a8a3c` (grass green) |
| Flame | `0xff6600` base, `0xffcc00` tip |

## Spec Location

New prop specs → `.agent/specs/props/<prop-name>/`

---

