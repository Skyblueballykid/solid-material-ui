import type { JSX } from 'solid-js'
import Ripple from '../ripple'
import Typography from '../typography'
import './style.css'

export function List ({ children, ...props }: JSX.HTMLAttributes<HTMLUListElement>): JSX.Element {
  return (
    <ul
      className='sjsmlui-list'
      {...props}
    >
      {children}
    </ul>
  )
}

export function ListItem ({ children, ...props }: JSX.LiHTMLAttributes<HTMLLIElement>): JSX.Element {
  return (
    <li
      className='list-item'
      {...props}
    >
      <Typography variant='subtitle1' color='inherit'>{children}</Typography>
      <Ripple />
    </li>
  )
}
