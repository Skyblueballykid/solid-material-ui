export interface BreakpointOverrides {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface BreakpointFunctions {
  up: (key: keyof BreakpointOverrides) => string
  down: (key: keyof BreakpointOverrides) => string
  between: (start: keyof BreakpointOverrides, end: keyof BreakpointOverrides) => string
  only: (key: keyof BreakpointOverrides) => string
  not: (key: keyof BreakpointOverrides) => string
}

export type Breakpoints = BreakpointOverrides & BreakpointFunctions

/**
 * Default breakpoints in pixels
 *
 * @export
 * @type {BreakpointOverrides}
 **/
export const defaultBreakpointValues: BreakpointOverrides = {
  xs: 0,
  sm: 600,
  md: 905,
  lg: 1240,
  xl: 1440
}

export function getBreakpointFunctions (breakpointValues: BreakpointOverrides): BreakpointFunctions {
  const sortedKeys = Object
    .keys(breakpointValues)
    .sort((prev, cur) => breakpointValues[prev] - breakpointValues[cur]) as Array<keyof BreakpointOverrides>

  const up = (key: keyof BreakpointOverrides): string => {
    return `(min-width: ${breakpointValues[key]}px)`
  }

  const down = (key: keyof BreakpointOverrides): string => {
    return `(max-width: ${breakpointValues[key] - 1}px)`
  }

  const between = (start: keyof BreakpointOverrides, end: keyof BreakpointOverrides): string => {
    return `${up(start)} and ${down(end)}`
  }

  const only = (key: keyof BreakpointOverrides): string => {
    const currentKeyIndex = sortedKeys.indexOf(key)
    if (currentKeyIndex + 1 === sortedKeys.length) {
      return up(key)
    }

    const nextKey = sortedKeys[currentKeyIndex + 1]
    return between(key, nextKey)
  }

  const not = (key: keyof BreakpointOverrides): string => {
    return `not (all and ${only(key)})`
  }

  return {
    up,
    down,
    between,
    only,
    not
  }
}
