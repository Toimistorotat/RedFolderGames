# RedFolderGames — Update Log (20-3)

---

## Changes
- Improved **terminal system stability and behavior**
- Refined **changelog readability and structure**
- Began introducing **hotfix logs** for smaller targeted fixes
- Added additional **hidden secrets / interactions**

---

## Added

### Hidden Interaction (Header Secret)
- Added a click-based hidden trigger system
  - Clicking the header counts interactions
  - Triggers after a set threshold
- Displays a hidden message when activated
- Can optionally hide itself after activation

👉 Turns previously empty UI into an **intentional interactive element**

---

### Text Response System
- Replaced browser Text-to-Speech with **visual message output**
- Uses state-driven messages instead of audio

👉 Better fits the terminal / experimental style of the site

---

### Delay / Timing Control
- Introduced proper async delays using Promises
- Replaced invalid `await(500)` usage

👉 Enables controlled pacing for interactions

---

### Tailwind Hover System (Header)
- Replaced pseudo-element text swap with real elements

```jsx
<span className="group-hover:hidden">RedFolderGames</span>
<span className="hidden group-hover:inline">HOME</span>
```

👉 Cleaner, accessible, and Tailwind-friendly implementation

---

### Procedural Background System
- Added animated triangle background system
- Features:
  - randomized layout
  - smooth sine-based animation
  - gradient colors
  - brightness + hue shifting

👉 Creates a **dynamic, ambient background engine**

---

## Improvements

### Terminal System
- Fixed multiple terminal-related issues
- Improved command handling and stability
- Better synchronization of terminal state and UI

---

### Changelog System
- Improved readability and structure of logs
- Cleaner formatting for markdown content
- Began separating **hotfix logs** from main updates

---

### React State Handling
- Introduced and improved usage of:
  - `clickCount`
  - `message`
  - `visible`
- UI now reacts properly to interaction instead of being static

---

### Layout & UI
- Centered changelog content using:

```jsx
mx-auto max-w-5xl
```

- Sidebar moved to floating/absolute layout
- Removed layout-breaking grid + margin hacks

👉 Results in a cleaner, more controlled layout

---

### Error Page System
- Refactored duplicate components into a reusable `EmptyPage`
- Added dynamic/randomized messages
- Stabilized randomness using `useMemo`

👉 Turned static error pages into configurable components

---

### Background Animation
- Switched from static visuals → procedural system
- Added:
  - sine-wave animation (`Math.sin`)
  - per-element randomness
  - slower timing for ambient effect

👉 Smooth, non-repetitive visuals

---

## Fixes

### JSX & Logic Fixes
- Fixed invalid JSX patterns:
  - `{ condition && (...) }` misuse
  - incorrect return structures
- Fixed incorrect operator usage:
  - `&` → `&&`
- Fixed invalid HTML:
  - `<error>` → `<h1>`

---

### Routing Fixes
- Fixed incorrect route matching:
```js
pathname.startsWith("/RedFolderGames/*") ❌
pathname === "/RedFolderGames/"        ✅
```

---

### Tailwind Fixes
- Corrected invalid classes:
  - `color-red` → `text-red-500`

---

### Animation & Rendering
- Fixed flickering caused by recalculating random values
- Moved randomness into `useMemo`

---

### Layout Fixes
- Fixed z-index layering issues
- Ensured background stays behind content

---

### Terminal UI State Bugs
- Fixed `isRunning` race condition
- Prevented outdated async runs from overriding state
- Reworked UI into a **single state flow (state machine)**

---

### Changelog System Fixes
- Fixed broken fetch paths across environments
- Fixed missing titles due to typo in `logs.json`
- Unified changelog loading between:
  - UI
  - terminal

---

## System Improvements (Architecture)

### UI State Model
- Moved from overlapping conditions → structured state flow:

```
RUNNING → INPUT ACTIVE → INPUT PAUSED → DEFAULT
```

👉 Prevents UI conflicts and rendering bugs

---

### Dynamic Path Handling
- Introduced environment-aware path system for logs
- Allows changelogs to work in:
  - localhost
  - GitHub Pages

---

### Markdown Integration
- Improved markdown rendering
- Added parser for terminal output
- Ensures consistent formatting across UI + terminal

---

## Notes
- Started using **hotfix logs** for smaller targeted fixes
- Changelog system is now more scalable and maintainable
- Terminal and UI systems are now more tightly integrated

---

## Summary

This update focused on:

- stabilizing systems (terminal, changelogs)
- improving UI structure and readability
- introducing hidden interactions and secrets
- upgrading visuals with procedural animation

---

## Status

✅ Terminal improvements  
✅ Changelog improvements  
✅ Hidden interaction system  
✅ Background animation system  
✅ Layout fixes  

🚧 Ongoing
- Further terminal expansion
- Additional secrets
- Continued UI polish