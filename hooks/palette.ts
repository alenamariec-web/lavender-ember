// Lavender Ember: every shade lives here. Change a hex, and the look reloads.
// Light mode only: lavender grounds, burnt-orange accent, burgundy touches.
export const PALETTE = {
  label: 'Lavender Ember',
  only: 'light',
  roles: {
    accent: '#c2602a', // burnt orange: buttons, links, highlights, cursor, selection
    pro: { seed: '#8a2c43', fillShade: 600 }, // burgundy: code literals, badges, special highlights
    danger: '#b8323c', // crimson, kept apart from the burgundy
    success: '#5e8a52', // sage green
    warning: '#a8762a', // honey amber
  },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e8dfef', // page and sidebar: soft lavender
        'surface-1': '#f0e9f4', // cards: milky lavender
        'surface-2': '#f8f3f1', // panels and inputs: creamy off-white
        'surface-3': '#f8f3f1', // menus (must match surface-2 in light mode)
        'text-primary': '#3b1e2c', // deep burgundy-plum
        'text-secondary': '#5e3346', // burgundy
        'text-muted': '#704a5c', // dusty burgundy
      },
    },
    git: {
      merged: '#8a2c43', // burgundy
    },
  },
} as const

// Text on burnt-orange buttons: creamy off-white instead of pure white.
export const ON_ACCENT = '#fffaf3'
