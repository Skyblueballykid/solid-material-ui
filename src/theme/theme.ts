import { BreakpointOverrides, Breakpoints, defaultBreakpointValues, getBreakpointFunctions } from './breakpoints'
import { defaultPaletteValues, Palette, PaletteOverrides } from './palette'
import { defaultTypographyValues, Typography, TypographyOverrides } from './typography'

export interface Theme {
  breakpoints: Breakpoints
  palette: Palette
  typography: Typography
}

export interface ThemeOverrides {
  breakpoints?: Partial<BreakpointOverrides>
  palette?: Partial<PaletteOverrides>
  typography?: Partial<TypographyOverrides>
}

export const createTheme = (overrides?: ThemeOverrides): Theme => {
  const breakpointValues = Object.assign(defaultBreakpointValues, overrides?.breakpoints)
  return {
    breakpoints: {
      ...breakpointValues,
      ...getBreakpointFunctions(breakpointValues)
    },
    palette: Object.assign(defaultPaletteValues, overrides?.palette),
    typography: Object.assign(defaultTypographyValues, overrides?.typography)
  }
}

export const defaultTheme: Theme = createTheme()
