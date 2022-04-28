import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

function App() {
  const template = html` <div>It's coming soon!</div> `
  render(template, appRoot)
}

App()
