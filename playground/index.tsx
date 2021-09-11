import { render } from 'solid-js/web'
import {Button} from '../src'
import './theme.css'

render(() => <div><Button>hello</Button></div>, document.getElementById('playground') ?? document.body)
