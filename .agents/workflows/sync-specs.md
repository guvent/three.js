---
description: Synchronize and finalize all spec files after delivering an asset
---
Review what was built or modified in this session. 

For every asset that was created or changed (characters, props, terrain, FX, animations):
1. Check that BOTH `editor/js/Menubar.Add.js` entry AND `examples/misc_<name>.html` exist — if either is missing, flag it.
2. Check if a corresponding spec folder exists at `.agent/specs/<work_name>/<category>/<asset-name>/`.
3. If `tasks.md` or `design.md` are missing or outdated, create/update them following the templates in the global rules. 
4. All specs for this session must live under the same `<work_name>` folder.
