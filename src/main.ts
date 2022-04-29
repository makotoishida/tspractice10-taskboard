import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'
import type { ProjectsStoreState, Project, Lane, Task } from './taskboard'
import { createStore } from './taskboard'
import exampleData from './exampleData'

function Task(task: Task) {
  return html`<div data-id="${task.id}" class="task" draggable="true">
    <h4 class="task-title">${task.title}</h4>
    <div class="task-description">${task.description}</div>
    <div class="task-due">${task.dueDate}</div>
  </div>`
}

function Lane(lane: Lane) {
  return html`<div data-id="${lane.id}" class="lane" dropzone="true">
    <h4 class="lane-title">${lane.title}</h4>
    <div class="tasks">${lane.tasks.map((i) => Task(i))}</div>
  </div>`
}

function Project(p: Project) {
  return html`<div data-id="${p.id}" class="project">
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
  enableDrag()
}

const appRoot = document.querySelector<HTMLDivElement>('#app')!

const { setCurrentProject, moveTask } = createStore(
  {
    projects: exampleData,
    currentProject: exampleData[0],
  },
  (state: ProjectsStoreState) => renderApp(state)
)

function enableDrag() {
  const draggables = document.querySelectorAll<HTMLElement>(
    '.task[draggable=true]'
  )

  const dropzones = document.querySelectorAll<HTMLElement>(
    '.lane[dropzone=true]'
  )

  let overElem: HTMLElement | null = null

  draggables.forEach((el) => {
    el.ondragstart = (ev: DragEvent) => {
      const id = (ev?.target as HTMLElement)?.dataset.id ?? ''
      if (ev.dataTransfer) {
        ev.dataTransfer.setData('text/plain', id)
        ev.dataTransfer.effectAllowed = 'move'
      }
    }

    el.ondragenter = (ev: DragEvent) => {
      ev.preventDefault()
      overElem = el
    }
    el.ondragover = (ev: DragEvent) => {
      ev.preventDefault()

      el.classList.remove('over-top', 'over-bottom')
      const rect = el.getBoundingClientRect()
      if (ev.clientY - rect.top < el.clientHeight / 2) {
        el.classList.add('over-top')
      } else {
        el.classList.add('over-bottom')
      }
    }

    el.ondragleave = (ev: DragEvent) => {
      ev.preventDefault()
      el.classList.remove('over-top', 'over-bottom')
    }

    el.ondrop = (ev: DragEvent) => {
      ev.preventDefault()
      overElem = null

      const taskId = ev?.dataTransfer?.getData('text/plain')
      if (!taskId) return

      let beforeTaskId = el.dataset.id

      el.classList.remove('over-top', 'over-bottom')
      const rect = el.getBoundingClientRect()
      const isBefore = ev.clientY - rect.top < el.clientHeight / 2
      if (!isBefore) {
        const siblings = Array.from(
          el.parentElement?.querySelectorAll('.task') ?? []
        ) as HTMLElement[]
        const nextIndex = siblings.findIndex((i) => i === el)
        const nextEl = nextIndex >= 0 ? siblings[nextIndex + 1] : undefined
        beforeTaskId = nextEl?.dataset?.id
      }

      const toLaneId = (el.closest('.lane')! as HTMLElement).dataset.id!
      moveTask(taskId, toLaneId, beforeTaskId)
    }
  })

  dropzones.forEach((el) => {
    el.ondragenter = (ev: DragEvent) => {
      ev.preventDefault()
      el.classList.add('over')
      overElem = el
    }

    el.ondragover = (ev: DragEvent) => {
      ev.preventDefault()
      el.classList.add('over')
    }

    el.ondragleave = (ev: DragEvent) => {
      ev.preventDefault()
      el.style.border = ''
      el.classList.remove('over')
    }

    el.ondrop = (ev: DragEvent) => {
      ev.preventDefault()

      el.classList.remove('over')
      if (overElem !== el) return
      overElem = null

      const taskId = ev?.dataTransfer?.getData('text/plain')
      if (!taskId) return

      const toLaneId = el.dataset.id!
      moveTask(taskId, toLaneId)
    }
  })
}
