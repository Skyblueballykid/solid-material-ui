import { Component } from 'solid-js'
import { Button } from '../src/components/atoms/button'

export const App: Component = () => {
  return <div><Element /></div>
}

const Element: Component = () => {
  return (
    <>
      <div>
        <Button variant='filled'>filled</Button>
        <Button variant='filled' disabled>filled</Button>
      </div>
      <div>
        <Button variant='outlined'>outlined</Button>
        <Button variant='outlined' disabled>outlined</Button>
      </div>
      <div>
        <Button variant='text'>text</Button>
        <Button variant='text' disabled>text</Button>
      </div>
      <div>
        <Button variant='elevated'>text</Button>
        <Button variant='elevated' disabled>text</Button>
      </div>
      <div>
        <Button variant='tonal'>text</Button>
        <Button variant='tonal' disabled>text</Button>
      </div>
    </>
  )
}
