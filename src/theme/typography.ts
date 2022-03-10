interface Font {
  font: string
  lineHeight: number
  size: number
  tracking: number
  weight: number
}

interface FontSize {
  large: Font
  medium: Font
  small: Font
}

export interface TypographyOverrides {
  display: FontSize
  headline: FontSize
  title: FontSize
  label: FontSize
  body: FontSize
}

export type Typography = TypographyOverrides

/**
 * Default palette typography in px
 *
 * @export
 * @type {TypographyOverrides}
 **/
export const defaultTypographyValues: TypographyOverrides = {
  display: {
    large: {
      font: 'Roboto Regular',
      lineHeight: 64,
      size: 57,
      tracking: 0,
      weight: 400
    },
    medium: {
      font: 'Roboto Regular',
      lineHeight: 52,
      size: 45,
      tracking: 0,
      weight: 400
    },
    small: {
      font: 'Roboto Regular',
      lineHeight: 44,
      size: 36,
      tracking: 0,
      weight: 400
    }
  },
  headline: {
    large: {
      font: 'Roboto Regular',
      lineHeight: 40,
      size: 32,
      tracking: 0,
      weight: 400
    },
    medium: {
      font: 'Roboto Regular',
      lineHeight: 36,
      size: 28,
      tracking: 0,
      weight: 400
    },
    small: {
      font: 'Roboto Regular',
      lineHeight: 32,
      size: 24,
      tracking: 0,
      weight: 400
    }
  },
  title: {
    large: {
      font: 'Roboto Regular',
      lineHeight: 28,
      size: 22,
      tracking: 0,
      weight: 400
    },
    medium: {
      font: 'Roboto Medium',
      lineHeight: 24,
      size: 16,
      tracking: 0.15,
      weight: 500
    },
    small: {
      font: 'Roboto Medium',
      lineHeight: 20,
      size: 14,
      tracking: 0.1,
      weight: 500
    }
  },
  label: {
    large: {
      font: 'Roboto Medium',
      lineHeight: 20,
      size: 14,
      tracking: 0.1,
      weight: 500
    },
    medium: {
      font: 'Roboto Medium',
      lineHeight: 16,
      size: 12,
      tracking: 0.5,
      weight: 500
    },
    small: {
      font: 'Roboto Medium',
      lineHeight: 6,
      size: 11,
      tracking: 0.5,
      weight: 500
    }
  },
  body: {
    large: {
      font: 'Roboto Medium',
      lineHeight: 24,
      size: 16,
      tracking: 0.15,
      weight: 400
    },
    medium: {
      font: 'Roboto Medium',
      lineHeight: 20,
      size: 14,
      tracking: 0.25,
      weight: 400
    },
    small: {
      font: 'Roboto Medium',
      lineHeight: 16,
      size: 12,
      tracking: 0.4,
      weight: 400
    }
  }
}