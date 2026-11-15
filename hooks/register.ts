import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { ON_ACCENT, PALETTE } from './palette.js'

const { theme, problems } = makeColors(structuredClone(PALETTE) as Parameters<typeof makeColors>[0])

// Swap the design system's pure white on accent buttons for cream.
const inputs = theme.inputs.light

if (inputs !== undefined) {
  inputs['role-accent-on'] = ON_ACCENT
}

const LOOK: ThemeSetArgs = { colors: theme, overrideColorScheme: 'light' }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (set.isDrawn) {
      $.ui.toast('Lavender Ember theme is on')
    } else {
      $.ui.status(`Lavender Ember not drawn: ${set.reason}`)
    }

    return next(e)
  })
}
