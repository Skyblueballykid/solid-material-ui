import type { JSX } from 'solid-js'
import { For, Switch, Match } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { createStore } from 'solid-js/store'
import { List, ListItem, Typography } from '../../src'
import ComponentList from './componentList'
import './style.css'

function Loading (): JSX.Element {
  return <Typography color='inherit' variant='body1'>Loading...</Typography>
}

function NotFound (): JSX.Element {
  return <Typography color='inherit' variant='body1'>Not found</Typography>
}

export default function (): JSX.Element {
  const ComponentListKeys = Object.keys(ComponentList)
  const [state, setState] = createStore({ selectedComponent: ComponentListKeys[0] })

  return (
    <div className='skeleton'>
      <div className='component-list'>
        <List>
          <For each={ComponentListKeys} fallback={<Loading />}>
            {(item) => (
              <ListItem onClick={() => setState({ selectedComponent: item })}>
                {item}
              </ListItem>
            )}
          </For>
        </List>
      </div>
      <div className='doc'>
        <Switch fallback={NotFound}>
          <For each={ComponentListKeys} fallback={<Loading />}>
            {(item) => (
              <Match when={state.selectedComponent === item}>
                <Dynamic component={ComponentList[item]} />
              </Match>
            )}
          </For>
        </Switch>
      </div>
    </div>
  )
}
