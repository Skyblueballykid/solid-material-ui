import { css } from '@emotion/css'
import { Theme } from '../../../theme'
import { darken, transparentize } from 'color2k'

export const getRootStyle = (theme: Theme): string => css({
  height: `${40 / theme.typography.rootSize}rem`,
  borderRadius: `${20 / theme.typography.rootSize}rem`,
  [`@media ${theme.breakpoints.down('sm')}`]: {
    fontFamily: theme.typography.label.small.font,
    lineHeight: `${theme.typography.label.small.lineHeight / theme.typography.rootSize}rem`,
    fontSize: `${theme.typography.label.small.size / theme.typography.rootSize}rem`,
    letterSpacing: `${theme.typography.label.small.tracking / theme.typography.rootSize}rem`,
    fontWeight: theme.typography.label.small.weight
  },
  [`@media ${theme.breakpoints.between('sm', 'md')}`]: {
    fontFamily: theme.typography.label.medium.font,
    lineHeight: `${theme.typography.label.medium.lineHeight / theme.typography.rootSize}rem`,
    fontSize: `${theme.typography.label.medium.size / theme.typography.rootSize}rem`,
    letterSpacing: `${theme.typography.label.medium.tracking / theme.typography.rootSize}rem`,
    fontWeight: theme.typography.label.medium.weight
  },
  [`@media ${theme.breakpoints.up('md')}`]: {
    fontFamily: theme.typography.label.large.font,
    lineHeight: `${theme.typography.label.large.lineHeight / theme.typography.rootSize}rem`,
    fontSize: `${theme.typography.label.large.size / theme.typography.rootSize}rem`,
    letterSpacing: `${theme.typography.label.large.tracking / theme.typography.rootSize}rem`,
    fontWeight: theme.typography.label.large.weight
  }
})

export const getFilledVariantStyle = (theme: Theme): string => css({
  border: 'unset',
  paddingLeft: `${24 / theme.typography.rootSize}rem`,
  paddingRight: `${24 / theme.typography.rootSize}rem`,
  '&:not(:disabled)': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.onMain,
    '&:focus-visible, &:hover': {
      backgroundColor: transparentize(theme.palette.primary.main, 0.08),
      boxShadow: `0px 1px 3px 1px ${transparentize(theme.palette.shadow, 1 - 0.15)}, 0px 1px 2px 0px ${transparentize(theme.palette.shadow, 1 - 0.3)}`
    },
    '&:active': {
      backgroundColor: transparentize(theme.palette.primary.main, 0.12),
      boxShadow: 'none'
    }
  },
  '&:disabled': {
    backgroundColor: transparentize(theme.palette.background.onSurface, 1 - 0.12),
    color: transparentize(theme.palette.background.onSurface, 1 - 0.38)
  }
})

export const getOutlinedVariantStyle = (theme: Theme): string => css({
  borderStyle: 'solid',
  paddingLeft: `${24 / theme.typography.rootSize}rem`,
  paddingRight: `${24 / theme.typography.rootSize}rem`,
  '&:not(:disabled)': {
    borderWidth: `${1 / theme.typography.rootSize}rem`,
    borderColor: theme.palette.outline,
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    '&:focus-visible, &:hover': {
      backgroundColor: transparentize(theme.palette.primary.main, 1 - 0.08)
    },
    '&:active': {
      borderColor: theme.palette.primary.main
    }
  },
  '&:disabled': {
    backgroundColor: transparentize(theme.palette.background.onSurface, 1 - 0.12),
    color: transparentize(theme.palette.background.onSurface, 1 - 0.38)
  }
})

export const getTextVariantStyle = (theme: Theme): string => css({
  border: 'unset',
  backgroundColor: 'transparent',
  paddingLeft: `${12 / theme.typography.rootSize}rem`,
  paddingRight: `${12 / theme.typography.rootSize}rem`,
  '&:not(:disabled)': {
    color: theme.palette.primary.main,
    '&:focus-visible, &:hover': {
      backgroundColor: transparentize(theme.palette.primary.main, 1 - 0.08)
    },
    '&:active': {
      backgroundColor: transparentize(theme.palette.primary.main, 1 - 0.12)
    }
  },
  '&:disabled': {
    color: transparentize(theme.palette.background.onSurface, 1 - 0.38)
  }
})

export const getElevatedVariantStyle = (theme: Theme): string => css({
  border: 'unset',
  paddingLeft: `${24 / theme.typography.rootSize}rem`,
  paddingRight: `${24 / theme.typography.rootSize}rem`,
  '&:not(:disabled)': {
    backgroundColor: theme.palette.background.surface,
    color: theme.palette.primary.main,
    boxShadow: `0px 1px 3px 1px ${transparentize(theme.palette.shadow, 1 - 0.15)}, 0px 1px 2px 0px ${transparentize(theme.palette.shadow, 1 - 0.3)}`,
    '&:focus-visible, &:hover': {
      backgroundColor: transparentize(theme.palette.secondary.container, 0.08),
      boxShadow: `0px 2px 6px 2px ${transparentize(theme.palette.shadow, 1 - 0.15)}, 0px 1px 2px 0px ${transparentize(theme.palette.shadow, 1 - 0.3)}`
    },
    '&:active': {
      backgroundColor: transparentize(theme.palette.secondary.container, 0.12),
      boxShadow: `0px 1px 3px 1px ${transparentize(theme.palette.shadow, 1 - 0.15)}, 0px 1px 2px 0px ${transparentize(theme.palette.shadow, 1 - 0.3)}`
    }
  },
  '&:disabled': {
    backgroundColor: transparentize(theme.palette.background.onSurface, 1 - 0.12),
    color: transparentize(theme.palette.background.onSurface, 1 - 0.38)
  }
})

export const getTonalVariantStyle = (theme: Theme): string => css({
  border: 'unset',
  paddingLeft: `${24 / theme.typography.rootSize}rem`,
  paddingRight: `${24 / theme.typography.rootSize}rem`,
  '&:not(:disabled)': {
    backgroundColor: theme.palette.secondary.container,
    color: theme.palette.secondary.onContainer,
    '&:focus-visible, &:hover': {
      backgroundColor: darken(theme.palette.secondary.container, 0.08),
      boxShadow: `0px 1px 3px 1px ${transparentize(theme.palette.shadow, 1 - 0.15)}, 0px 1px 2px 0px ${transparentize(theme.palette.shadow, 1 - 0.3)}`
    },
    '&:active': {
      backgroundColor: darken(theme.palette.secondary.container, 0.12),
      boxShadow: 'none'
    }
  },
  '&:disabled': {
    backgroundColor: transparentize(theme.palette.background.onSurface, 1 - 0.12),
    color: transparentize(theme.palette.background.onSurface, 1 - 0.38)
  }
})
