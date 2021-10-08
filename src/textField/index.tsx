import type { JSX } from 'solid-js'
import './style.css'

export default function (props: Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type'>): JSX.Element {
  return (
    <input className='sjsmlui-text-field' type='text' {...props} />
  )
}
