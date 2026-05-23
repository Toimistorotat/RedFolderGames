RedFolderGames
# Hotfix - Changelog Path And Release Fixes

---

## Fixes
- Fixed the terminal `changelog` command failing to load the latest log.
- Fixed malformed changelog fetch paths such as:

```txt
/RedFolderGames/logs//logs.json
```

- Fixed changelog loading in:
  - `Terminal.jsx`
  - `Changelogs.jsx`
- Fixed a terminal close-button typo:
  - `setToggle` -> `setTtoggle`
- Fixed the unused terminal prompt variable that caused lint errors.
- Fixed backend release issues discovered during deploy:
  - invalid empty DB port value in `connection.php`
  - feedback endpoint returning the wrong response shape
  - missing backend exception handler

---

## Cause
- Changelog paths were partly hardcoded and one helper returned a trailing slash.
- The fetch call added another slash before `logs.json`, creating a double-slash path.
- The live backend also failed because the DB connection file briefly contained an invalid PHP line:

```php
$port = getenv('DB_PORT', true) ?: ;
```

- Feedback display expected a raw array, but the backend had briefly been changed to return a wrapped object.

---

## Temporary Fix (Hotfix)
- Replaced hardcoded changelog paths with a base-path aware helper:

```js
const basePath = import.meta.env.BASE_URL || "/";
return `${basePath.replace(/\/$/, "")}/logs`;
```

- Applied the helper to both terminal and changelog page loading.
- Restored the feedback endpoint to return the old working raw array.
- Re-added backend exception handling in `index.php`.
- Removed the broken DB port line from the live backend connection file.
- Confirmed the CORS allow list includes the current GitHub Pages origin:

```txt
https://redking-11.github.io
```

---

## Result
- The latest changelog is now build-ready.
- The terminal `changelog` command should load logs correctly under:
  - local dev at `/RedFolderGames/`
  - GitHub Pages at `/RedFolderGames/`
- Feedback and comments are ready for the AE + Untitled release.
- Comment posting now supports:
  - `game_id`
  - page-specific feeds
  - basic backend rate limiting

---

## Notes
- Browser errors from `chrome-extension://...` are extension noise, not RedFolderGames errors.
- Vite chunk-size warnings are not release blockers.
- The remaining Terminal ESLint hook dependency warnings are existing cleanup work, not part of this hotfix.

---

## Known Issue
- The production bundle is large because Three.js and markdown/diagram systems are included in the main app bundle.
- Comment anti-spam is currently basic rate limiting, not CAPTCHA.
- Backend PHP changes still need to be uploaded to cPanel manually whenever changed locally.

---

## Next Step (Planned Fix)
- No required follow-up for this hotfix.
- Remaining notes are optional future polish, not blockers for this release.
