import type { JSX } from 'solid-js'
import Ripple from '../ripple'
import Typography from '../typography'
import classNameFactory from '../utils/classNameFactory'
import './style.css'

export function List ({ children, ...props }: JSX.HTMLAttributes<HTMLUListElement>): JSX.Element {
  return (
    <ul
      className={classNameFactory(['sjsmlui-list', props?.className])}
      {...props}
    >
      {children}
    </ul>
  )
}

export function ListItem ({ children, ...props }: JSX.LiHTMLAttributes<HTMLLIElement>): JSX.Element {
  return (
    <li
      className={classNameFactory(['list-item', props?.className])}
      {...props}
    >
      <Typography variant='subtitle1' color='inherit'>{children}</Typography>
      <Ripple />
    </li>
  )
}
