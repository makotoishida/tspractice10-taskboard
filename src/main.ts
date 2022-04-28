import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

function App() {
  const template = html` <div>It's coming soon!</div> `
  render(template, appRoot)
}

function twoDig(n: number) {
  return `0${n}`.slice(-2)
}

App()
