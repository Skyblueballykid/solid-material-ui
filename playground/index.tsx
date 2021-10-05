import { render } from 'solid-js/web'
import Skeleton from './skeleton/skeleton'
import './theme.css'
import './style.css'

render(() => <Skeleton />, document.getElementById('playground') ?? document.body)
