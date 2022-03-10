import { Component } from 'solid-js'
import { css } from '@emotion/css'
import { useMediaQuery } from '../src/hooks/useMediaQuery'
import { Theme } from '../src/theme'
import { useTheme } from '../src/context/theme'

const getStyle = (theme: Theme): string => css({
  paddingTop: 32,
  [`@media ${theme.breakpoints.only('sm')}`]: {
    paddingTop: 64
  }
})

export const App: Component = () => {
  return <div><Element /></div>
}

const Element: Component = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only('sm'))
  return (
    <div>
      {isMobile() ? 'mobile' : 'not mobile'}
      <div className={getStyle(theme)}>Yo</div>
    </div>
  )
}
