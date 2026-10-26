# OG images (1200 × 630)

Monochrome, real logo (logo-v2 geometry), Inter Display 600 title (tracking -0.03em), JetBrains Mono labels.

| File | Use |
|---|---|
| og-site.png / og-site@2x.png | Site-wide default. Ink #0B0D12 background, white logo, "Software & automations studio", "Melbourne, Australia · roadmaplabs.com.au" (footer copy). |
| og-title.png / @2x | Title-driven variant, long title (60px, title 60+ chars). White background, 12px ink bottom bar. |
| og-title-short.png / @2x | Title-driven variant, short title (76px). |
| opengraph-image.tsx | next/og reference template for the title variant. Uses fonts/InterDisplay-SemiBold-600.ttf and JetBrainsMono-Regular-400.ttf (Latin subsets, static TTF because next/og cannot read woff2). |
| src/*.html | HTML used to render the PNGs. Paths are relative to build/10 (re-render from there with `python3 og.py && python3 shot.py og-site.html ../../design-system/assets/og/og-site.png 1200 1 630`). |

Serve the 1x PNG as og:image (1200 × 630). The @2x files are design masters only.
Example titles come from copy/insights.md topic list. They are examples, not live posts.
