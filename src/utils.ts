export function twoDig(n: number) {
  return `0${n}`.slice(-2)
}

export function formatDate(d?: Date) {
  if (!d) return ''
  return `${d.getMonth() + 1}/${d.getDate()}/${twoDig(d.getFullYear())}`
}
