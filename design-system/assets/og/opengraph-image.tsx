// Reference template for Next.js App Router (next/og). Not wired into any repo.
// Place as app/insights/[slug]/opengraph-image.tsx (title variant) and adapt
// for app/opengraph-image.tsx (site variant: ink background, white logo).
// Fonts: copy design-system/assets/fonts/InterDisplay-SemiBold-600.ttf and
// JetBrainsMono-Regular-400.ttf into the app (next/og needs TTF/OTF, not woff2).
// Logo: copy design-system/assets/logo-svg/roadmap-labs-black.svg into /public/brand/.
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Roadmap Labs';

const INK = '#0B0D12';
const MUTED = '#5B616E';

async function asset(...p: string[]) {
  return readFile(join(process.cwd(), ...p));
}

// Replace with the real post lookup. Label is "Insights · <category name>".
async function getPost(slug: string) {
  return { title: slug, category: 'Insights' };
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const [display, mono, logo] = await Promise.all([
    asset('assets', 'fonts', 'InterDisplay-SemiBold-600.ttf'),
    asset('assets', 'fonts', 'JetBrainsMono-Regular-400.ttf'),
    asset('public', 'brand', 'roadmap-labs-black.svg'),
  ]);
  const logoSrc = `data:image/svg+xml;base64,${logo.toString('base64')}`;
  const titleSize = post.title.length < 60 ? 76 : 60; // same rule as the reference PNGs

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200, height: 630, display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', padding: '72px 80px', background: '#FFFFFF',
          color: INK, borderBottom: `12px solid ${INK}`,
        }}
      >
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 22, color: MUTED }}>
          {`Insights · ${post.category}`}
        </div>
        <div
          style={{
            fontFamily: 'Inter Display', fontWeight: 600, fontSize: titleSize,
            letterSpacing: '-0.03em', lineHeight: 1.04, maxWidth: 1000,
          }}
        >
          {post.title}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* logo viewBox is 1206 x 364, so 48px high = 159px wide */}
          <img src={logoSrc} height={48} width={159} alt="" />
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 22, color: MUTED }}>roadmaplabs.com.au</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter Display', data: display, weight: 600, style: 'normal' },
        { name: 'JetBrains Mono', data: mono, weight: 400, style: 'normal' },
      ],
    },
  );
}
