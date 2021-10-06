import type { JSX } from 'solid-js'
import Ripple from '../ripple'
import Typography from '../typography'
import './style.css'

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary'
}

export default function ({ children, color = 'primary', variant = 'contained', type = 'button', ...props }: Props): JSX.Element {
  return (
    <button
      className={`sjsmlui-button ${color} ${variant}`}
      type={type}
      {...props}
    >
      <Typography variant='button' color='inherit'>{children}</Typography>
      <Ripple />
    </button>
  )
}
