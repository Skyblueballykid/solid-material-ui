import type { JSX } from 'solid-js'
import { List, ListItem } from '../../src'
import './style.css'

export default function (): JSX.Element {
  return (
    <div className='skeleton'>
      <div className='component-list'>
        <List>
          <ListItem>Button</ListItem>
          <ListItem>Typography</ListItem>
        </List>
      </div>
      <div>
        hello
      </div>
    </div>
  )
}
