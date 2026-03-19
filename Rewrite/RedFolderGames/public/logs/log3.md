# RedFolderGames — Update Log (19-3)

---

## Changes
- Reworked **changelog system**
  - Moved from hardcoded markdown → file-based logs
  - Logs now loaded dynamically instead of being inside JSX :contentReference[oaicite:0]{index=0}

- **Terminal flow redesigned**
  - Now behaves like a real boot/session instead of a scripted sequence
  - Flow now follows:
    - system boot → login → identity (`whoami`, `pwd`)
    - navigation to `/RedFolderGames`
    - file listing (`ls`)
    - execution of `terminal-intro.exe`
  - Outputs are now correctly rendered as **output**, not commands :contentReference[oaicite:1]{index=1}

---

## Added
- **File-based changelog system**
  - Each log is now its own `.md` file
  - Added `logs.json` as index / metadata system
  - Supports multiple logs and latest selection :contentReference[oaicite:2]{index=2}

- **Dynamic log loading**
  - Fetches logs using `import.meta.env.BASE_URL`
  - Works correctly with GitHub Pages (`/RedFolderGames/`)

- **Log switching system**
  - Switch between logs without reload

- **Mermaid diagram support**
  - Diagrams render directly inside markdown

---

- **Terminal unlock system**
  - Input locked during intro
  - Unlocks after reaching:
    - `type 'help' to explore available commands`
  - Requires hidden help sequence
  - Makes interaction feel intentional :contentReference[oaicite:3]{index=3}

- **Interactive terminal mode**
  - Typing, Backspace, Enter support
  - Command system:
    - `help`, `credits`, `changelog`, `replay`, `clear`
  - Unknown commands → `command not found`

- **Command-driven content**
  - `credits` → credits output
  - `changelog` → loads latest log from `logs.json`
  - `replay` → restart intro
  - `clear` → wipe terminal

---

- **Hidden diagnostic system**
  - Secret command-triggered system scan
  - Starts normal → escalates → becomes corrupted
  - Ends in forced termination / connection lost :contentReference[oaicite:4]{index=4}

- **Secret trigger integration**
  - Konami-style sequence unlocks hidden behavior
  - Adds alternative terminal path

- **Arrow key input system**
  - Arrow keys mapped to symbols
  - Enables combo-based hidden sequences

---

## Improvements
- **Mermaid rendering**
  - Switched `LR` → `TB`
  - Fixed scaling and readability issues
  - Cleaner spacing and layout :contentReference[oaicite:5]{index=5}

- **Diagram clarity**
  - Layout fixed through structure, not CSS hacks

---

- **Terminal state system**
  - Added:
    - `inputUnlocked`
    - `awaitingHelpUnlock`
    - `terminalInput`
    - `inputActive`
  - Clear separation between intro / unlock / interactive :contentReference[oaicite:6]{index=6}

- **Keyboard handling**
  - No longer hijacks global input
  - Ignores:
    - `<input>`, `<textarea>`, `contenteditable`
  - Added `Ctrl + C` to cancel input

- **UI / UX**
  - Terminal-style block cursor
  - Improved prompt alignment
  - Footer now reacts to state (intro vs interactive)

- **Terminal stability**
  - Replay & clear fully reset state
  - Prevents hidden state leaks

---

- **Progressive output simulation**
  - Staged checks and processing
  - Uneven delays + progressive dots
  - Recovery attempts before failure :contentReference[oaicite:7]{index=7}

- **Diagnostic pacing**
  - Built using `runSteps`
  - Uses pause + staged outputs

---

## Narrative / Visual
- **Hidden narrative layer**
  - anomaly detection
  - corrupted text
  - system logs (`[log_00X]`)
  - direct user acknowledgment
- Creates subtle fourth-wall break :contentReference[oaicite:8]{index=8}

---

## Fixes
- Fixed **GitHub Pages fetch paths**
- Fixed **Mermaid sizing issues** :contentReference[oaicite:9]{index=9}

- Fixed terminal issues:
  - variable initialization bugs
  - incorrect refs
  - misplaced event checks
  - duplicate listeners :contentReference[oaicite:10]{index=10}

- Fixed global input capture issues

---

## Known / Pending
- `about` command not implemented yet
  - currently returns `command not found`
  - planned to reuse intro content :contentReference[oaicite:11]{index=11}

---

## Dev Notes
- Structure > styling (learned the hard way 💀)
- Mermaid layout depends on connections
- `.md + logs.json` > hardcoded content
- Terminal now runs on layered system architecture
- Secrets are integrated, not separate hacks

---

# System Overview

```mermaid
flowchart TB

Intro[Boot Sequence] --> Unlock[Help Unlock Phase]
Unlock --> Interactive[Interactive Terminal]

Interactive --> Commands[Command Parser]

Commands --> Core[Core Commands]
Commands --> Secret[Secret Systems]

Secret --> Diagnostics[Hidden Diagnostics]
Diagnostics --> Corruption[Corrupted Output]

Core --> Help[help]
Core --> Credits[credits]
Core --> Logs[changelog]
Core --> Replay[replay]
Core --> Clear[clear]