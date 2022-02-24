import type { Accessor } from 'solid-js'
import { createSignal, onCleanup, onMount } from 'solid-js'
import { useTheme } from '../context/theme'
import { Theme } from '../theme'

export function useMediaQuery (query: (theme: Theme) => string): Accessor<boolean> {
  const theme = useTheme()
  const [getMediaQueryResult, setMediaQueryResult] = createSignal(false)
  let mediaQueryList: MediaQueryList

  const onChange = (event: MediaQueryListEvent): void => {
    setMediaQueryResult(event.matches)
  }

  onMount(() => {
    mediaQueryList = window.matchMedia(query(theme))
    setMediaQueryResult(mediaQueryList.matches)
    mediaQueryList.addEventListener('change', onChange)
  })

  onCleanup(() => {
    mediaQueryList.removeEventListener('change', onChange)
  })

  return getMediaQueryResult
}
