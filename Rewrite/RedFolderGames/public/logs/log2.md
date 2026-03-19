# RedFolderGames — Update Log (18-3)

## Changes
- *Terminal improvements*
  - Added more commands / interactions
  - Expanded what can be opened through the terminal

## Added
- *Terminal guide*
  - Added instructions on how to open *credits* via terminal

## Fixes
- Footer is now *completed*
  - Credits and requested additions are now implemented  
  - No pending changes for footer

---

## Notes
- Previous *Development section is outdated*
  - Tailwind Typography and React Markdown were already added earlier

- Some internal TODO items still remain (not yet implemented):
  - Improve site descriptions / add About section
  - Add accessibility options to game idea pages
  - Rewrite Typewriter component
  - Add hidden Konami code for terminal input
  - Fix Tailwind-related issues
  - Finalize calculator behavior
  - Improve pin system visuals / behavior

---

## Dev Snapshot

```mermaid
flowchart TB

subgraph Systems
    Old[Old Systems]
    Rewrite[Terminal Rewrite]
    Improve[Terminal Improvements]
end

subgraph Features
    Guide[Add Terminal Guide]
    Credits[Credits via Terminal]
end

subgraph Status
    Footer[Footer Completed]
    Now[Current State ✅]
end

Status --> Features --> Systems