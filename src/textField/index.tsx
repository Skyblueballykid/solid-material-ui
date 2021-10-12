import type { JSX } from 'solid-js'
import './style.css'

interface Props extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: 'outlined' | 'filled'
}

export default function ({ variant = 'outlined', ...props }: Props): JSX.Element {
  return (
    <div className={`sjsmlui-text-field ${variant}`}>
      <input
        type='text'
        {...props}
      />
    </div>
  )
}
