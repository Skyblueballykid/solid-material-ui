import type { ComponentList } from './types'
import { render } from 'solid-js/web'
import Skeleton from './skeleton/skeleton'
import './theme.css'
import './style.css'

export function registerComponentList (componentList: ComponentList): void {
  render(() => Skeleton({ componentList }), document.getElementById('playground') ?? document.body)
}
