# Theme

## Default theme

```typescript
{
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 905,
    lg: 1240,
    xl: 1440,
    up: up(),
    down: down(),
    between: between()
    only: only()
    not: not()
  }
}
```

## Custom theme

Generate a theme base on the overrides received.

### Arguments

1. overrides (`ThemeOverrides`) *optional*: Takes an incompatible `ThemeOverrides` and adds the missing parts, if values are not provided then default theme used.

### Example

```typescript
import { createTheme } from 'solid-material-ui/theme'

const theme = createTheme({
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 905,
    lg: 1240,
    xl: 1440
  }
})
```

## Theme provider

This component takes a `theme` prop and applies it to the entire SolidJS tree that it is wrapping around. It should preferably be used at the root of your component tree. If you want to use the default theme, you don't have to worry about it, because by default the `defaultTheme` used.

### Props

|Name|Type|Description|
|-|-|-|
|theme *optional*|`Theme`|A theme object, the result of the above mentioned `createTheme` function, or the `defaultTheme` provided by the package, if nothing provided the `defaultTheme` used.
|children *required*|JSX.Element|Your component tree.|

### Example

```typescript
import { render } from 'solid-js/web'
import { ThemeProvider } from 'solid-material-ui/context'
import { createTheme } from 'solid-material-ui/theme'

const theme = createTheme({
  breakpoints: {
    md: 900
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your component tree */}
    </ThemeProvider>
  )
}

render(<App />, document.getElementById('root'))
```