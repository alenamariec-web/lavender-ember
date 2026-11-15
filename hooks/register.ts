import type { EngineInterface, Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { ON_ACCENT, PALETTE } from './palette.js'

const { theme, problems } = makeColors(structuredClone(PALETTE) as Parameters<typeof makeColors>[0])

// Swap the design system's pure white on accent buttons for cream.
const inputs = theme.inputs.light

if (inputs !== undefined) {
  inputs['role-accent-on'] = ON_ACCENT
}

const LOOK: ThemeSetArgs = { colors: theme, overrideColorScheme: 'light' }

const apply = async ($: EngineInterface) => {
  const set = await $.theme.set(LOOK)

  return set.isDrawn
    ? 'Lavender Ember is on. If the app still looks white, switch the app to light mode and look inside this Claude Code session.'
    : `Lavender Ember is set, but the app is not drawing it: ${set.reason}`
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'lavender',
      description: 'Turn on the Lavender Ember theme and say whether the app draws it',
    })
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    $.ui.toast(await apply($))

    return next(e)
  })

  on('command.run', { command: 'lavender' }, async $ => ({ text: await apply($) }))
}
