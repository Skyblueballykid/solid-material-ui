import type { JSX } from 'solid-js'
import { createStore } from 'solid-js/store'
import './style.css'

export default function (): JSX.Element {
  const [state, setState] = createStore<{ x: number, y: number, size: number }>({ x: 0, y: 0, size: 0 })

  const calculateAnimationProps = (event: MouseEvent & { currentTarget: HTMLDivElement, target: Element }): void => {
    const currentTarget = event.currentTarget
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const size = height > width ? height : width
    const x = event.clientX - left - (size / 2)
    const y = event.clientY - top - (size / 2)
    setState({ x, y, size })
  }

  return (
    <div
      className='sjsmlui-ripple'
      onMouseDown={calculateAnimationProps}
      style={{
        '--ripple-size': `${state.size}px`,
        '--ripple-position-x': `${state.x}px`,
        '--ripple-position-y': `${state.y}px`
      }}
    />
  )
}
