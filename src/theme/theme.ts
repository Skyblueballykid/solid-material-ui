import { BreakpointOverrides, Breakpoints, defaultBreakpointValues, getBreakpointFunctions } from './breakpoints'
import { defaultPaletteValues, Palette, PaletteOverrides } from './palette'

export interface Theme {
  breakpoints: Breakpoints
  palette: Palette
}

export interface ThemeOverrides {
  breakpoints?: Partial<BreakpointOverrides>
  palette?: Partial<PaletteOverrides>
}

export const createTheme = (overrides?: ThemeOverrides): Theme => {
  const breakpointValues = Object.assign(defaultBreakpointValues, overrides?.breakpoints)
  return {
    breakpoints: {
      ...breakpointValues,
      ...getBreakpointFunctions(breakpointValues)
    },
    palette: Object.assign(defaultPaletteValues, overrides?.palette)
  }
}

export const defaultTheme: Theme = createTheme()
