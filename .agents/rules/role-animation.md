---
trigger: always_on
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
