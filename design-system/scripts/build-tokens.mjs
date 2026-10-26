// Generates tokens.css and tailwind.config.snippet.js from tokens.json. No dependencies.
// Usage: node design-system/scripts/build-tokens.mjs   (do not hand-edit either output)
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const dir = join(dirname(fileURLToPath(import.meta.url)), '..');
const t = JSON.parse(readFileSync(join(dir, 'tokens.json'), 'utf8'));
const L = [];
const v = (k, val) => L.push(`  --rl-${k}: ${val};`);
L.push(`/* Roadmap Labs design tokens v${t.meta.version} (Mono). Generated from tokens.json by scripts/build-tokens.mjs. Do not edit by hand. */`);
L.push(':root {');
L.push('  color-scheme: light;');
for (const [k, val] of Object.entries(t.color.palette ?? {})) v(k, val);
for (const [k, val] of Object.entries(t.color.light)) v(`color-${k}`, val);
// Font family: --font-sans / --font-mono are the hook for next/font (variable option). Fallback stacks here.
L.push(`  ${t.font.variable.sans}: ${t.font.family.sans};`);
L.push(`  ${t.font.variable.mono}: ${t.font.family.mono};`);
v('font-sans', `var(${t.font.variable.sans})`);
v('font-mono', `var(${t.font.variable.mono})`);
for (const [k, val] of Object.entries(t.font.weight)) v(`weight-${k}`, val);
v('font-sans-features', t.font.features.sans); v('font-mono-features', t.font.features.mono);
for (const [k, s] of Object.entries(t.type)) {
  v(`text-${k}`, s.mobile); v(`text-${k}-lh`, s.lineHeight); v(`text-${k}-tracking`, s.tracking); v(`text-${k}-weight`, s.weight);
  if (typeof s.opsz === 'number') v(`text-${k}-opsz`, s.opsz);
}
for (const [k, val] of Object.entries(t.space)) v(`space-${k}`, val);
for (const [k, val] of Object.entries(t.radius)) v(`radius-${k}`, val);
for (const [k, val] of Object.entries(t.motion.duration)) v(`duration-${k}`, val);
for (const [k, val] of Object.entries(t.motion.easing)) v(`ease-${k}`, val);
const m = t.motion.menu; v('menu-open', m['open-duration']); v('menu-close', m['close-duration']); v('menu-ease', m.easing); v('menu-offset-y', m['offset-y']);
for (const [k, val] of Object.entries(t.z)) v(`z-${k}`, val);
const lay = t.layout;
v('container-max', lay['container-max']); v('margin', lay.margin.mobile); v('gutter', lay.gutter.mobile); v('columns', lay.columns.mobile);
v('section-y', lay['section-y'].mobile); v('nav-h', lay['nav-height'].mobile); v('measure', lay.measure);
v('hairline', t.border.hairline); v('focus-width', t.border.focus); v('focus-offset', t.border['focus-offset']);
v('underline-thickness', t.link['underline-thickness']); v('underline-offset', t.link['underline-offset']);
v('control-lg', t.control['height-lg']); v('control-sm', t.control['height-sm']); v('field-h', t.control['field-height']);
L.push('}', '');
for (const [bp, key] of [[t.breakpoint.md, 'tablet'], [t.breakpoint.lg, 'desktop']]) {
  L.push(`@media (min-width: ${bp}) {`, '  :root {');
  for (const [k, s] of Object.entries(t.type)) L.push(`    --rl-text-${k}: ${s[key]};`);
  L.push(`    --rl-margin: ${lay.margin[key]};`, `    --rl-gutter: ${lay.gutter[key]};`, `    --rl-columns: ${lay.columns[key]};`, `    --rl-section-y: ${lay['section-y'][key]};`);
  if (key === 'desktop') L.push(`    --rl-nav-h: ${lay['nav-height'].desktop};`);
  L.push('  }', '}', '');
}
L.push('/* Dark inverse: sections only (.rl-dark). There is no site-wide dark mode and prefers-color-scheme is ignored. */');
L.push('.rl-dark {');
for (const [k, val] of Object.entries(t.color.dark)) L.push(`  --rl-color-${k}: ${val};`);
L.push('  color-scheme: dark;', '  background: var(--rl-color-bg);', '  color: var(--rl-color-text);', '}', '');
L.push('@media (prefers-reduced-motion: reduce) {',
  '  :root { --rl-duration-fast: 0ms; --rl-duration-base: 0ms; --rl-duration-slow: 0ms; --rl-menu-open: 0ms; --rl-menu-close: 0ms; --rl-menu-offset-y: 0px; }',
  '  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }',
  '}', '');
L.push('/* Base utilities */',
  `html { font-optical-sizing: ${t.font.opticalSizing}; }`,
  '.rl-mono { font-family: var(--rl-font-mono); font-feature-settings: var(--rl-font-mono-features); }',
  ':focus-visible { outline: var(--rl-focus-width) solid var(--rl-color-focus); outline-offset: var(--rl-focus-offset); }',
  '.rl-link { color: var(--rl-color-link); text-decoration: underline; text-decoration-thickness: var(--rl-underline-thickness); text-underline-offset: var(--rl-underline-offset); text-decoration-color: var(--rl-color-link-underline); transition: text-decoration-color var(--rl-duration-fast) var(--rl-ease-standard); }',
  '.rl-link:hover { text-decoration-color: currentColor; }',
  '.rl-container { width: 100%; max-width: calc(var(--rl-container-max) + 2 * var(--rl-margin)); margin-inline: auto; padding-inline: var(--rl-margin); }',
  '.rl-grid { display: grid; grid-template-columns: repeat(var(--rl-columns), minmax(0, 1fr)); column-gap: var(--rl-gutter); }', '');
writeFileSync(join(dir, 'tokens.css'), L.join('\n'));
console.log('tokens.css written,', L.length, 'lines');

// Tailwind theme.extend snippet. Values point at tokens.css custom properties where they exist.
const fam = (stack, varName) => [`var(${varName})`, ...stack.split(',').map((x) => x.trim().replace(/^"|"$/g, ''))];
const fontSize = {};
for (const [k, s] of Object.entries(t.type)) {
  fontSize[`rl-${k}`] = [`var(--rl-text-${k})`, { lineHeight: String(s.lineHeight), letterSpacing: String(s.tracking), fontWeight: String(s.weight) }];
}
const pre = (o, p) => Object.fromEntries(Object.entries(o).map(([k, val]) => [`${p}${k}`, String(val)]));
const tw = {
  theme: {
    extend: {
      colors: { rl: Object.fromEntries(Object.keys(t.color.light).map((k) => [k, `var(--rl-color-${k})`])) },
      fontFamily: { sans: fam(t.font.family.sans, t.font.variable.sans), mono: fam(t.font.family.mono, t.font.variable.mono) },
      fontSize,
      spacing: pre(t.space, 'rl-'),
      borderRadius: pre(t.radius, 'rl-'),
      maxWidth: { 'rl-container': lay['container-max'], 'rl-measure': lay.measure },
      screens: { ...t.breakpoint },
      transitionDuration: pre(t.motion.duration, 'rl-'),
      transitionTimingFunction: pre(t.motion.easing, 'rl-'),
      zIndex: pre(t.z, 'rl-'),
      textUnderlineOffset: { rl: t.link['underline-offset'] },
      outlineOffset: { rl: t.border['focus-offset'] },
      height: { 'rl-control': t.control['height-lg'], 'rl-control-sm': t.control['height-sm'], 'rl-field': t.control['field-height'] },
    },
  },
};
const head = `/**
 * Roadmap Labs tokens v${t.meta.version} as a Tailwind theme.extend snippet (Tailwind v3 config, or v4 via @config).
 * Generated from tokens.json by scripts/build-tokens.mjs. Do not edit by hand.
 * Colours point at tokens.css custom properties so .rl-dark sections swap automatically.
 * Optical size: Inter's opsz axis follows font-size automatically (font-optical-sizing: auto, set in tokens.css).
 * Mono labels: add [font-feature-settings:var(--rl-font-mono-features)] or the .rl-mono class from tokens.css.
 */
`;
writeFileSync(join(dir, 'tailwind.config.snippet.js'), head + 'module.exports = ' + JSON.stringify(tw, null, 2) + ';\n');
console.log('tailwind.config.snippet.js written');
