# RedFolderGames — Update Log

## Added
- **Random Empty page system** for unfinished or non-existing routes  
  - Visiting something like \`/example\` redirects to an Empty page  
  - The Empty page returns you to the main site  
  - Small chance of a **special Empty variant** appearing just for fun  

- **Comment pinning mechanic**
  - Comments can switch from \`absolute\` → \`fixed\`
  - Allows the panel to follow your screen instead of being left behind

- **Hidden button**
  - Added just for fun

---

## Changes
- **Folders system updated**
  - Now looks and behaves more like the comment system

- **Terminal fully rewritten**
  - Rewrite completed successfully

---

## Development
- **Tailwind Typography plugin added**
  - Preparing styling support for markdown content

- **React Markdown installed**
  - Not implemented yet
  - Planned for **in-site changelog pages**

---

## Fixes
- Fixed existing **secrets**
- Added **additional secrets**

---

## Known / Pending
- **Footer has not been updated yet**
  - Credits and other requested additions are still missing

---

# Visual Overview

```mermaid
flowchart TB

User[User visits page] --> Check{Route exists?}

Check -->| Yes | Normal[Open page normally]
Check -->| No | Empty[Redirect to Empty page]

Empty --> Chance{Empty?}

Chance -->| Yes | Special[Show special Empty variant]
Chance -->| Yes | Standard[Show normal Empty page]

Standard --> Return[Return to main site]
Special --> Return

Return --> Home[Main Site]

Home --> Comment[Comment Section]
Comment --> Pin{Pin enabled?}

Pin -->| Yes | Fixed[Panel becomes fixed]
Pin -->| No | Absolute[Panel stays absolute]

Home --> Secrets[Hidden secrets]
Secrets --> Hidden[Hidden button]

linkStyle 1 stroke:#22c55e,stroke-width:2px
linkStyle 2 stroke:#ef4444,stroke-width:2px
linkStyle 4 stroke:#22c55e,stroke-width:2px
linkStyle 5 stroke:#22c55e,stroke-width:2px
linkStyle 11 stroke:#22c55e,stroke-width:2px
linkStyle 12 stroke:#ef4444,stroke-width:2px