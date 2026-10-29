# Fonts

Locked 25 Oct 2026: **Inter Display** for everything, **JetBrains Mono** for labels and meta. Both SIL Open Font License 1.1 (self-hosting and commercial use allowed; keep the licence file next to the fonts).

| File | Use | Source |
|---|---|---|
| InterVariable.woff2 | Site, all sans text. Variable: wght 100 to 900, opsz 14 to 32. With `font-optical-sizing: auto` the browser picks the cut from font size: 32px and up is the Inter Display cut, 14px is the text cut. | Inter 4.1, rsms/inter release, `web/InterVariable.woff2` |
| JetBrainsMono-Variable.woff2 | Site, mono labels. Variable: wght 100 to 800. | JetBrains Mono 2.304, `fonts/variable/JetBrainsMono[wght].ttf` |
| InterDisplay-SemiBold-600.ttf | next/og only (OG titles, 600). | Inter 4.1, `extras/ttf/InterDisplay-SemiBold.ttf` |
| JetBrainsMono-Regular-400.ttf | next/og only (OG labels). | JetBrains Mono 2.304, `fonts/ttf/JetBrainsMono-Regular.ttf` |
| OFL-Inter.txt, OFL-JetBrainsMono.txt | Licences. Ship them. | From each release |

All four font files are Latin subsets made with fontTools `pyftsubset`, keeping every variation axis and every OpenType feature:
`U+0000-00FF, U+0100-017F, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2190-2199, U+2212, U+2215, U+2713, U+FEFF, U+FFFD`.
The range includes the arrows → and ↗ used in links. Sizes: Inter 115 KB, JetBrains Mono 52 KB (woff2).

Why not the Google Fonts build of Inter: it has the opsz axis, but its files leave out → and ↗ (they fall back to a system font) and strip the cv and ss stylistic sets. The rsms release has both.

Settings: no stylistic sets on Inter (the approved comparison rendered without them). On JetBrains Mono set `font-feature-settings: "calt" 0` so code ligatures never form in labels. Never set `font-variation-settings: "opsz" …` in CSS: it inherits and forces one cut onto every size.

Retired: Geist and Geist Mono, kept in `_archive/geist/` for reference only. Do not ship them.
