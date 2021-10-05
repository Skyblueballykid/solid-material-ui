import { render } from 'solid-js/web'
import Skeleton from './skeleton'
import './theme.css'

render(() => <Skeleton />, document.getElementById('playground') ?? document.body)
