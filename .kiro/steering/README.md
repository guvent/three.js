---
inclusion: manual
---

# Steering & Specs — Quick Reference

## How to Talk to Kiro

Just describe what you need. Kiro reads the role files automatically and picks the right one.

| You say | Kiro activates |
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
| `workflow-editor.md` | Shared rules | Editor integration, hard constraints, animation helpers, delivery checklist |
| `role-characters.md` | Character Artist | Humanoids, creatures, NPCs — walk cycle, body structure |
| `role-props.md` | Prop Artist | Trees, coins, chests, torches, barrels — scene objects |
| `role-terrain.md` | Terrain Artist | Ground, platforms, walls, ramps, water |
| `role-fx.md` | FX Artist | Halos, sparkles, particles, score popups, auras |
| `role-animation.md` | Animator | Reaction clips — hit, die, jump, celebrate, idle |

---

## Specs Directory Structure

```
.kiro/specs/
  characters/        ← one folder per character built
  props/             ← one folder per prop built
  terrain/           ← one folder per terrain piece built
  fx/                ← one folder per FX asset built
  animations/        ← one folder per animation set built
```

Each spec folder contains:
- `design.md` — geometry, materials, animation design
- `requirements.md` — what the asset must do
- `tasks.md` — implementation checklist
