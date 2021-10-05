import type { JSX } from 'solid-js'
import { List, ListItem } from '../src'

export default function (): JSX.Element {
  return (
    <List>
      <ListItem>Button</ListItem>
      <ListItem>Typography</ListItem>
    </List>
  )
}
