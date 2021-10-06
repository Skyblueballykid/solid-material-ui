import type { JSX } from 'solid-js'
import { Typography } from '../../src'

// TODO: move this under src/typography
// TODO: write useProps? hooks for doc
export default function (): JSX.Element {
  return (
    <>
      <Typography variant='h1'>primary h1</Typography>
      <Typography variant='h2'>primary h2</Typography>
      <Typography variant='h3'>primary h3</Typography>
      <Typography variant='h4'>primary h4</Typography>
      <Typography variant='h5'>primary h5</Typography>
      <Typography variant='h6'>primary h6</Typography>
      <Typography variant='subtitle1'>primary subtitle1</Typography>
      <Typography variant='subtitle2'>primary subtitle2</Typography>
      <Typography variant='body1'>primary body1</Typography>
      <Typography variant='body2'>primary body2</Typography>
      <Typography variant='button'>primary button</Typography>
      <Typography variant='caption'>primary caption</Typography>
      <Typography variant='overline'>primary overline</Typography>
    </>
  )
}
