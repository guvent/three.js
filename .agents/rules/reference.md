---
trigger: always_on
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
