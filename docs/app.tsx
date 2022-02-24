import { Component } from 'solid-js'
import { useMediaQuery } from '../src/hooks/useMediaQuery'

export const App: Component = () => {
  return <div><Element /></div>
}

const Element: Component = () => {
  const isMobile = useMediaQuery(() => '(max-width:600px)')
  return <div>{isMobile() ? 'mobile' : 'not mobile'}</div>
}
