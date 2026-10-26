/**
 * Roadmap Labs tokens v1.2.0 as a Tailwind theme.extend snippet (Tailwind v3 config, or v4 via @config).
 * Generated from tokens.json by scripts/build-tokens.mjs. Do not edit by hand.
 * Colours point at tokens.css custom properties so .rl-dark sections swap automatically.
 * Optical size: Inter's opsz axis follows font-size automatically (font-optical-sizing: auto, set in tokens.css).
 * Mono labels: add [font-feature-settings:var(--rl-font-mono-features)] or the .rl-mono class from tokens.css.
 */
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "rl": {
          "bg": "var(--rl-color-bg)",
          "bg-subtle": "var(--rl-color-bg-subtle)",
          "text": "var(--rl-color-text)",
          "text-secondary": "var(--rl-color-text-secondary)",
          "text-tertiary": "var(--rl-color-text-tertiary)",
          "rule": "var(--rl-color-rule)",
          "rule-strong": "var(--rl-color-rule-strong)",
          "action": "var(--rl-color-action)",
          "action-hover": "var(--rl-color-action-hover)",
          "action-active": "var(--rl-color-action-active)",
          "action-text": "var(--rl-color-action-text)",
          "disabled-bg": "var(--rl-color-disabled-bg)",
          "disabled-text": "var(--rl-color-disabled-text)",
          "link": "var(--rl-color-link)",
          "link-underline": "var(--rl-color-link-underline)",
          "focus": "var(--rl-color-focus)"
        }
      },
      "fontFamily": {
        "sans": [
          "var(--font-sans)",
          "Inter Display",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        "mono": [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace"
        ]
      },
      "fontSize": {
        "rl-display": [
          "var(--rl-text-display)",
          {
            "lineHeight": "1",
            "letterSpacing": "-0.03em",
            "fontWeight": "600"
          }
        ],
        "rl-h1": [
          "var(--rl-text-h1)",
          {
            "lineHeight": "1.02",
            "letterSpacing": "-0.03em",
            "fontWeight": "600"
          }
        ],
        "rl-h2": [
          "var(--rl-text-h2)",
          {
            "lineHeight": "1.04",
            "letterSpacing": "-0.025em",
            "fontWeight": "600"
          }
        ],
        "rl-h3": [
          "var(--rl-text-h3)",
          {
            "lineHeight": "1.15",
            "letterSpacing": "-0.02em",
            "fontWeight": "500"
          }
        ],
        "rl-h4": [
          "var(--rl-text-h4)",
          {
            "lineHeight": "1.3",
            "letterSpacing": "-0.015em",
            "fontWeight": "500"
          }
        ],
        "rl-lead": [
          "var(--rl-text-lead)",
          {
            "lineHeight": "1.5",
            "letterSpacing": "-0.01em",
            "fontWeight": "400"
          }
        ],
        "rl-body": [
          "var(--rl-text-body)",
          {
            "lineHeight": "1.55",
            "letterSpacing": "0",
            "fontWeight": "400"
          }
        ],
        "rl-small": [
          "var(--rl-text-small)",
          {
            "lineHeight": "1.5",
            "letterSpacing": "0",
            "fontWeight": "400"
          }
        ],
        "rl-caption": [
          "var(--rl-text-caption)",
          {
            "lineHeight": "1.45",
            "letterSpacing": "0",
            "fontWeight": "400"
          }
        ],
        "rl-button": [
          "var(--rl-text-button)",
          {
            "lineHeight": "1",
            "letterSpacing": "-0.005em",
            "fontWeight": "500"
          }
        ],
        "rl-mono": [
          "var(--rl-text-mono)",
          {
            "lineHeight": "1.5",
            "letterSpacing": "0.02em",
            "fontWeight": "400"
          }
        ],
        "rl-price": [
          "var(--rl-text-price)",
          {
            "lineHeight": "1",
            "letterSpacing": "-0.04em",
            "fontWeight": "600"
          }
        ]
      },
      "spacing": {
        "rl-0": "0px",
        "rl-1": "4px",
        "rl-2": "8px",
        "rl-3": "12px",
        "rl-4": "16px",
        "rl-5": "20px",
        "rl-6": "24px",
        "rl-8": "32px",
        "rl-10": "40px",
        "rl-12": "48px",
        "rl-16": "64px",
        "rl-20": "80px",
        "rl-24": "96px",
        "rl-32": "128px",
        "rl-40": "160px"
      },
      "borderRadius": {
        "rl-none": "0px",
        "rl-sm": "6px",
        "rl-field": "8px",
        "rl-image": "12px",
        "rl-pill": "9999px"
      },
      "maxWidth": {
        "rl-container": "1408px",
        "rl-measure": "38rem"
      },
      "screens": {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },
      "transitionDuration": {
        "rl-instant": "0ms",
        "rl-fast": "120ms",
        "rl-base": "200ms",
        "rl-slow": "320ms"
      },
      "transitionTimingFunction": {
        "rl-standard": "cubic-bezier(0.2, 0, 0, 1)",
        "rl-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        "rl-exit": "cubic-bezier(0.4, 0, 1, 1)"
      },
      "zIndex": {
        "rl-base": "0",
        "rl-raised": "10",
        "rl-sticky": "100",
        "rl-header": "200",
        "rl-overlay": "300",
        "rl-modal": "400",
        "rl-toast": "500",
        "rl-skip-link": "1000"
      },
      "textUnderlineOffset": {
        "rl": "0.22em"
      },
      "outlineOffset": {
        "rl": "2px"
      },
      "height": {
        "rl-control": "44px",
        "rl-control-sm": "36px",
        "rl-field": "48px"
      }
    }
  }
};
