import type { Component } from 'solid-js'
import { render } from 'solid-js/web'
import Skeleton from './skeleton/skeleton'
import './theme.css'
import './style.css'

// TODO: add dynamic props
export type ComponentList = Record<string, {
  component: Component
}>

export function registerComponentList (componentList: ComponentList): void {
  render(() => <Skeleton componentList={componentList} />, document.getElementById('playground') ?? document.body)
}
