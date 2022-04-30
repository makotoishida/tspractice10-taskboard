export function twoDig(n: number): string {
  return `0${n}`.slice(-2)
}

export function formatDate(d?: Date): string {
  if (!d) return ''
  return `${d.getMonth() + 1}/${d.getDate()}/${twoDig(d.getFullYear())}`
}

export function getRandomID(): string {
  return Date.now() + Math.random() + ''
}
