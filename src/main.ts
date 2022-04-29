import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'
import type { ProjectsStoreState, Project, Lane, Task } from './taskboard'
import { createStore } from './taskboard'
import exampleData from './exampleData'

function Task(task: Task) {
  return html`<div class="task">
    <h4 class="task-title">${task.title}</h4>
    <div class="task-description">${task.description}</div>
    <div class="task-due">${task.dueDate}</div>
  </div>`
}

function Lane(lane: Lane) {
  return html`<div class="lane">
    <h4 class="lane-title">${lane.title}</h4>
    <div class="tasks">${lane.tasks.map((i) => Task(i))}</div>
  </div>`
}

function Project(p: Project) {
  return html`<div class="project">
    <h3 class="project-title">${p.title}</h3>
    <div class="lanes">${p.lanes.map((i) => Lane(i))}</div>
  </div> `
}

function ProjectSelector(projects: Project[], currentProject: Project) {
  return html`
    <div class="project-selector">
      ${projects.map(
        (i) =>
          html`<div
            class="project ${i === currentProject ? 'active' : ''}"
            @click=${() => setCurrentProject(i)}
          >
            ${i.title}
          </div>`
      )}
    </div>
  `
}

function App({
  projects,
  currentProject,
}: {
  projects: Project[]
  currentProject: Project
}) {
  return html`<div>
    ${ProjectSelector(projects, currentProject)} ${Project(currentProject)}
  </div>`
}

function renderApp(state: ProjectsStoreState) {
  render(App(state), appRoot)
}

const appRoot = document.querySelector<HTMLDivElement>('#app')!

const { setCurrentProject } = createStore(
  {
    projects: exampleData,
    currentProject: exampleData[0],
  },
  (state: ProjectsStoreState) => renderApp(state)
)

