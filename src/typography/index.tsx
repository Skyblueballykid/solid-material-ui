import type { JSX } from 'solid-js'
import classNameFactory from '../utils/classNameFactory'
import toKebabCase from '../utils/toKebabCase'
import './style.css'

interface Props extends JSX.HTMLAttributes<HTMLSpanElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline'
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'inherit'
}

export default function ({ children, color = 'primary', variant = 'body1', ...props }: Props): JSX.Element {
  return (
    <span
      className={classNameFactory(['sjsmlui-typography', toKebabCase(color), variant, props?.className])}
      {...props}
    >
      {children}
    </span>
  )
}
