# Earthscape Studio · 埴角

> A peninsula of earth — still attached to the mainland, but already reaching into another sea.

Studio archive for Earthscape — a ceramic studio based in Banqiao, Taipei.  
工作室典藏網站 — 一間位於台北板橋的陶藝工作室。

🌐 **Live site**: [earthscape-studio.com](https://earthscape-studio.com)  
📷 **Instagram**: [@earthscape.studio](https://instagram.com/earthscape.studio)

---

## Structure

```
.
├── index.html               # Home — studio archive cover
├── work-detail.html         # Individual work page (museum object label style)
├── journal.html             # Working journal index
├── journal-entry.html       # Single journal entry (research paper layout)
├── about.html               # About / Artist statement / Practice / CV
├── visit.html               # Studio visit booking (Cal.com integration pending)
└── styles.css               # Shared design tokens & components
```

## Design system

A static site built with vanilla HTML + CSS, designed in the spirit of a museum archive.

### Colors (mineral oxide palette)

| Token | Value | Source |
|-------|-------|--------|
| `--fe-500` | `#A8421C` | Fe₂O₃ Hematite — brand primary |
| `--mn-900` | `#1A1614` | MnO₂ Pyrolusite — text |
| `--bg`     | `#F7F1E6` | Kaolin cream — page background |
| `--accent-500` | `#1E9BD8` | Fluorescent mineral — minimal accent |

### Typography

- **Display**: Fraunces (variable serif)
- **Body**: Source Serif 4 / Noto Serif TC
- **Mono**: JetBrains Mono

## Deployment

Deployed via Cloudflare Pages (auto-deploy on push to `main`).

## License

© 2026 Earthscape Studio. All rights reserved.  
Code structure may be referenced; brand assets, statements, and journal content may not be reproduced without permission.
