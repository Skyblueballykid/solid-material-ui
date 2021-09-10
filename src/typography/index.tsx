import type { JSX } from 'solid-js'

interface Props extends JSX.HTMLAttributes<HTMLSpanElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline'
  color?: 'primary' | 'secondary'
}

export default function ({ children, color = 'primary', variant = 'body1', ...props }: Props): JSX.Element {
  return (
    <span
      className={`typography ${color} ${variant}`}
      {...props}
    >
      {children}
    </span>
  )
}
