export default function (classNames: Array<string | undefined>): string {
  return classNames.join(' ').trim()
}
