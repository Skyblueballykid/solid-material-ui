import type { JSX } from 'solid-js'
import { createContext, useContext } from 'solid-js'
import { defaultTheme, Theme } from '../theme'

export const ThemeContext = createContext<Theme>(defaultTheme)

export function ThemeProvider ({ theme, children }: { theme?: Theme, children: JSX.Element }): JSX.Element {
  return (
    <ThemeContext.Provider value={theme ?? defaultTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme (): Theme {
  return useContext(ThemeContext)
}
