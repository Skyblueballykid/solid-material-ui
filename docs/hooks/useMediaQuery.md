# useMediaQuery

This is a CSS media query hook for SolidJS. It listens for matches to a CSS media query. It allows the rendering of components based on whether the query matches or not.

## Basic usage

```typescript
import { Component } from 'solid-js'
import { useMediaQuery } from 'solid-material-ui/hooks/useMediaQuery'

export const SimpleMediaQuery: Component = () => {
  const matches = useMediaQuery(() => '(min-width:600px)')
  return <span>{`(min-width:600px) matches: ${matches}`}</span>
}
```

## Using theme breakpoint helper

```typescript
import { Component } from 'solid-js'
import { useMediaQuery } from 'solid-material-ui/hooks/useMediaQuery'

export const SimpleMediaQuery: Component = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'))
  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>
}
```
