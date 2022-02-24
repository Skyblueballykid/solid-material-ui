# Breakpoints

For optimal user experience, material design interfaces need to be able to adapt their layout at various breakpoints.
The default breakpoint values is based on the [specification](https://material.io/design/layout/responsive-layout-grid.html#breakpoints)

## Default breakpoints

Each breakpoint matches with a fixed screen width:

- **xs**, extra-small: 0
- **sm**, small: 600
- **md**, medium: 905
- **lg**, large: 1240
- **xl**, extra-large: 1400

## Media queries

### `theme.breakpoints.up`

#### Arguments

1. key: A breakpoint key (`xs`, `sm`, `md`, `lg`, `xl`)

#### Returns

A `media query` string ready to be used with the `useMediaQuery` hook, which matches screen widths greater than the screen size given by the breakpoint key (inclusive).

#### Example

```typescript
/* (min-width: 600px) */
theme.breakpoints.up('sm')
```

### `theme.breakpoints.down`

#### Arguments

1. key: A breakpoint key (`xs`, `sm`, `md`, `lg`, `xl`)

#### Returns

A `media query` string ready to be used with the `useMediaQuery` hook, which matches screen widths less than the screen size given by the breakpoint key (exclusive).

#### Example

```typescript
/* (max-width: 599px) */
theme.breakpoints.max('sm')
```

### `theme.breakpoints.between`

#### Arguments

1. start: A breakpoint key (`xs`, `sm`, `md`, `lg`, `xl`)
2. end: A breakpoint key (`xs`, `sm`, `md`, `lg`, `xl`)

#### Returns

A `media query` string ready to be used with the `useMediaQuery` hook, which matches screen widths greater than the screen size given by the breakpoint key in the first argument (inclusive) and less than the screen size given by the breakpoint key in the second argument (exclusive).

#### Example

```typescript
/* (min-width: 600px) and (max-width: 1239px) */
theme.breakpoints.between('sm', 'lg')
```

### `theme.breakpoints.only`

#### Arguments

1. key: A breakpoint key (`xs`, `sm`, `md`, `lg`, `xl`)

#### Returns

A `media query` string ready to be used with the `useMediaQuery` hook, which matches screen widths starting from the screen size given by the breakpoint key (inclusive) and stopping at the screen size given by the next breakpoint key (exclusive).

If the breakpoint key matches the larges screen size specified by theme, in that case it will return a `media query`, which matches screen widths greater than the screen size given by the breakpoint key (inclusive).

#### Example

```typescript
/* (min-width: 600px) and (max-width: 904px) */
theme.breakpoints.only('sm')

/* (min-width: 1400px) */
theme.breakpoints.only('xl')
```

### `theme.breakpoints.not`

#### Arguments

1. key: A breakpoint key (`xs`, `sm`, `md`, `lg`, `xl`)

#### Returns

A `media query` string ready to be used with the `useMediaQuery` hook, which matches screen widths stopping at the screen size given by the breakpoint key (inclusive) and starting at the screen size given by the next breakpoint key (exclusive).

If the breakpoint key matches the larges screen size specified by theme, in that case it will return a `media query`, which matches screen widths less than the screen size given by the breakpoint key (inclusive).

#### Example

```typescript
/* not (all and (min-width: 600px) and (max-width: 904px)) */
theme.breakpoints.not('sm')

/* not (all and (min-width: 1400px)) */
theme.breakpoints.not('xl')
```
