RedFolderGames
# Hotfix — Changelog Loading Fix

---

## Fixes
- Fixed an issue where **changelogs were not loading** on:
  - main changelog page
  - terminal (`changelog` command)

## Cause
- Fetch paths were incorrect when running in production (GitHub Pages)
- The app was trying to load logs from:

```txt
/logs/...
```

which does not work under:

```txt
/RedFolderGames/
```

## Temporary Fix (Hotfix)
- Updated fetch paths to explicitly point to:

```txt
Rewrite/RedFolderGames/public/logs/
```

- Applied fix in:
  - `ChangelogPage`
  - `Terminal`

## Result
- Changelogs now load correctly both:
  - in browser view
  - inside terminal command system

## Notes
- This is a **temporary workaround**
- Paths currently differ between:
  - local development
  - production (GitHub Pages)

## Known Issue
- Fetch paths must still be manually changed depending on environment

## Next Step (Planned Fix)
- Replace hardcoded paths with a **proper base path solution**
- Ensure logs work identically in:
  - localhost
  - GitHub Pages