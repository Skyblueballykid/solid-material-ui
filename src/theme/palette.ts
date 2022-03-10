type Color = string

export interface PaletteColor {
  main: Color
  onMain: Color
  container: Color
  onContainer: Color
}

export interface BackgroundColor {
  background: Color
  onBackground: Color
  surface: Color
  onSurface: Color
  surfaceVariant: Color
  onSurfaceVariant: Color
}

export interface InverseColor {
  primary: Color
  surface: Color
  onSurface: Color
}

export interface PaletteOverrides {
  primary: PaletteColor
  secondary: PaletteColor
  tertiary: PaletteColor
  error: PaletteColor
  background: BackgroundColor
  inverse: InverseColor
  outline: Color
  shadow: Color
}

export type Palette = PaletteOverrides

/**
 * Default palette values as hex strings
 *
 * @export
 * @type {PaletteOverrides}
 **/
export const defaultPaletteValues: PaletteOverrides = {
  primary: {
    main: '#6750A4',
    onMain: '#FFFFFF',
    container: '#EADDFF',
    onContainer: '#21005D'
  },
  secondary: {
    main: '#625B71',
    onMain: '#FFFFFF',
    container: '#E8DEF8',
    onContainer: '#1D192B'
  },
  tertiary: {
    main: '#7D5260',
    onMain: '#FFFFFF',
    container: '#FFD8E4',
    onContainer: '#31111D'
  },
  error: {
    main: '#B3261E',
    onMain: '#FFFFFF',
    container: '#F9DEDC',
    onContainer: '#410E0B'
  },
  background: {
    background: '#FFFBFE',
    onBackground: '#1C1B1F',
    surface: '#FFFBFE',
    onSurface: '#1C1B1F',
    surfaceVariant: '#E7E0EC',
    onSurfaceVariant: '#49454F'
  },
  inverse: {
    primary: '#D0BCFF',
    surface: '#313033',
    onSurface: '#F4EFF4'
  },
  outline: '#79747E',
  shadow: '#000000'
}
