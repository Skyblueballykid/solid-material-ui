import { BreakpointOverrides, Breakpoints, defaultBreakpointValues, getBreakpointFunctions } from './breakpoints'

export interface Theme {
  breakpoints: Breakpoints
}

export interface ThemeOverrides {
  breakpoints?: Partial<BreakpointOverrides>
}

export const createTheme = (overrides?: ThemeOverrides): Theme => {
  const breakpointValues = Object.assign(defaultBreakpointValues, overrides?.breakpoints)
  return {
    breakpoints: {
      ...breakpointValues,
      ...getBreakpointFunctions(breakpointValues)
    }
  }
}

export const defaultTheme: Theme = createTheme()
