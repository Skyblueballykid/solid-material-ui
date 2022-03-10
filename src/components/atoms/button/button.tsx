import { Component, createMemo, JSX } from 'solid-js'
import { cx } from '@emotion/css'
import { useTheme } from '../../../context/theme'
import * as styles from './styles'

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'
}

export const Button: Component<Props> = ({ variant = 'filled', children, ...props }) => {
  const theme = useTheme()
  const className = createMemo(() => cx(styles.getRootStyle(theme), {
    [styles.getFilledVariantStyle(theme)]: variant === 'filled'
  }, {
    [styles.getOutlinedVariantStyle(theme)]: variant === 'outlined'
  }, {
    [styles.getTextVariantStyle(theme)]: variant === 'text'
  }, {
    [styles.getElevatedVariantStyle(theme)]: variant === 'elevated'
  }, {
    [styles.getTonalVariantStyle(theme)]: variant === 'tonal'
  }))
  return (
    <button
      className={className()}
      {...props}
    >
      {children}
    </button>
  )
}
