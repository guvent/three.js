---
trigger: always_on
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

New character specs → `.agents/specs/characters/<character-name>/`