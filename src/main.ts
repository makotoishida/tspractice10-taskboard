import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'
import {
  sampleProjects,
  createStore,
  ProjectsStoreState,
  Project,
  Lane,
  Task,
} from './taskboard'

function Task(task: Task) {
  return html`<div>${task.title} ${task.description} ${task.dueDate}</div>`
}

function Lane(lane: Lane) {
  return html`<div>${lane.title} ${lane.tasks.map((i) => Task(i))}</div>`
}

function Project(p: Project) {
  return html`<div>
    <h2>${p.title}</h2>
    <hr />
    ${p.lanes.map((i) => Lane(i))}
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
    projects: sampleProjects,
    currentProject: sampleProjects[0],
  },
  (state: ProjectsStoreState) => renderApp(state)
)

