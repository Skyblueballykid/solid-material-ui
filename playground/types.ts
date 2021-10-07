import type { Component } from 'solid-js'

// { type: PropTypes.STRING, defaultValue: '', values: [] }
// { type: PropTypes.NUMBER, defaultValue: 0 }
// { type: PropTypes.BOOLEAN, defaultValue: false }

export interface PlaygroundComponent {
  component: Component
  title: string
  props?: Record<string, unknown>
}

export type ComponentList = PlaygroundComponent[]
